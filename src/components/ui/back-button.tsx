"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href?: string;
  label?: string;
}

export function BackButton({ href = "/", label = "Retour" }: BackButtonProps) {
  return (
    <Link 
      href={href}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
    >
      <ArrowLeft className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
}