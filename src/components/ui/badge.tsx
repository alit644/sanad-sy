import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-destructive bg-destructive/30 text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        verified:
          "border-[var(--verified)] bg-[var(--verified)]/30 text-[var(--verified-foreground)] [a&]:hover:bg-[var(--verified)]/90",
        pending:
          "border-[var(--pending)] bg-[var(--pending)]/30 text-[var(--pending-foreground)] [a&]:hover:bg-[var(--pending)]/90",
        warning:
          "border-[var(--warning)] bg-[var(--warning)]/30 text-[var(--warning-foreground)] [a&]:hover:bg-[var(--warning)]/90",
        pharmacy:
          "border-[var(--pharmacy)]  text-[var(--pharmacy-foreground)] [a&]:hover:bg-[var(--pharmacy)]/90",
        hospital:
          "border-[var(--hospital)] text-[var(--hospital-foreground)] [a&]:hover:bg-[var(--hospital)]/90",
        ngo:
          "border-[var(--ngo)] text-[var(--ngo-foreground)] [a&]:hover:bg-[var(--ngo)]/90",
        emergency:
          "border-[var(--emergency)] text-[var(--emergency-foreground)] [a&]:hover:bg-[var(--emergency)]/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
