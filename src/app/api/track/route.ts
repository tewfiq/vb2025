import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { EventType } from "@/types/social-proof";

interface TrackRequestBody {
  pagePath: string;
  lang?: string;
  eventType?: EventType;
}

// Helper: fetch city/country from ipapi.co with timeout
async function getGeoLocation(
  ip?: string,
): Promise<{ city: string | null; country: string | null }> {
  try {
    const url = ip ? `https://ipapi.co/${ip}/json/` : `https://ipapi.co/json/`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // 2s timeout

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) return { city: null, country: null };

    const data = await response.json();
    return {
      city: data.city || null,
      country: data.country_code || null,
    };
  } catch (error) {
    // Timeout or network error - graceful fallback
    return { city: null, country: null };
  }
}

// Create Supabase client at runtime (not at import time)
// This prevents Next.js from including the service role key in the webpack bundle
function createSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Missing Supabase configuration: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY",
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function POST(req: Request) {
  try {
    const body: TrackRequestBody = await req.json();
    const { pagePath = "/", lang, eventType = "visit" } = body;

    // Extract IP from headers (Vercel/Netlify compatible)
    const headers = new Headers(req.headers);
    const ip =
      headers.get("x-forwarded-for")?.split(",")[0] ||
      headers.get("x-real-ip") ||
      undefined;

    // Get geo location (city, country)
    const { city, country } = await getGeoLocation(ip);

    // Fallback to header-based country if ipapi failed
    const finalCountry =
      country ||
      headers.get("x-vercel-ip-country") ||
      headers.get("x-country-code") ||
      null;

    const ua = headers.get("user-agent") || undefined;

    // Create Supabase client at request time (not at module import time)
    const supabase = createSupabaseServerClient();

    // Insert into Supabase (service_role bypasses RLS)
    const { error } = await supabase.from("visits").insert({
      page_path: pagePath,
      city: city || null,
      country: finalCountry,
      lang: lang || null,
      event_type: eventType,
      ua,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    console.error("Track error:", e.message);
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
