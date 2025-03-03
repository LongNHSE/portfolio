import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/libs/utils"

const ribbonVariants = cva(
  "absolute flex items-center justify-center overflow-hidden whitespace-nowrap text-sm font-bold text-white shadow-md",
  {
    variants: {
      variant: {
        default: "bg-yellow-500",
        secondary: "bg-blue-500",
        destructive: "bg-red-500",
        success: "bg-green-500",
        warning: "bg-orange-500",
        info: "bg-cyan-500",
      },
      position: {
        "top-right": "right-[-120px] top-[22px] rotate-45 transform",
        "top-left": "left-[-40px] top-[32px] -rotate-45 transform",
        "bottom-right": "bottom-[32px] right-[-40px] -rotate-45 transform",
        "bottom-left": "bottom-[32px] left-[-40px] rotate-45 transform",
      },
      size: {
        sm: "h-[24px] min-w-[120px] text-xs",
        default: "h-[32px] min-w-[320px]",
        lg: "h-[40px] min-w-[200px] text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "top-right",
      size: "default",
    },
  },
)

export interface RibbonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof ribbonVariants> {
  asChild?: boolean
}

const Ribbon = React.forwardRef<HTMLDivElement, RibbonProps>(
  ({ className, variant, position, size, ...props }, ref) => {
    return <div className={cn(ribbonVariants({ variant, position, size }), className)} ref={ref} {...props} />
  },
)
Ribbon.displayName = "Ribbon"

export { Ribbon, ribbonVariants }

