export type EventType = "visit" | "booking" | "blog_view" | "pricing_view";

export interface Visit {
  id: string;
  page_path: string;
  city: string | null;
  country: string | null;
  created_at: string;
  lang: string | null;
  event_type: EventType;
}

export interface TrackVisitPayload {
  pagePath: string;
  lang?: string;
  eventType?: EventType;
}
