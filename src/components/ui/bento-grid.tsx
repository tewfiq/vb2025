"use client";

import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-1 gap-4 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl",
      "bg-card border border-border shadow-sm",
      "transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
      className
    )}
  >
    <div>{background}</div>

    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2">
      <Icon className="h-12 w-12 origin-left transform-gpu text-foreground transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-foreground font-headline">{name}</h3>
      <p className="max-w-lg text-muted-foreground leading-relaxed">{description}</p>
    </div>

    <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-accent/5" />
  </div>
);

export { BentoCard, BentoGrid };