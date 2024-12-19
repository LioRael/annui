import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { colord } from "colord"

import { cn } from "@/registry/default/lib/utils"

interface ColoredLabelProps extends React.ComponentPropsWithoutRef<"div"> {
  color?: string
  darkColor?: string
  bgOpacity?: number
  textOpacity?: number
  borderOpacity?: number
  darkBgOpacity?: number
  darkTextOpacity?: number
  darkBorderOpacity?: number
  variant?: "background" | "border"
}

const ColoredLabel = React.forwardRef<
  React.ComponentRef<"div">,
  ColoredLabelProps & { asChild?: boolean }
>(
  (
    {
      children,
      className,
      color,
      darkColor = color,
      bgOpacity = 0.1,
      textOpacity = 1,
      borderOpacity = 0.3,
      darkBgOpacity = bgOpacity,
      darkTextOpacity = textOpacity,
      darkBorderOpacity = borderOpacity,
      asChild,
      variant = "background",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div"

    return (
      <Comp
        ref={ref}
        className={cn(
          "rounded-md text-xs px-1.5 py-0.5 w-fit font-medium text-[var(--text-color)] dark:text-[var(--dark-text-color)]",
          variant === "border" &&
            "border-[var(--border-color)] dark:border-[var(--dark-border-color)] border",
          variant === "background" &&
            "bg-[var(--bg-color)] dark:bg-[var(--dark-bg-color)]",
          className
        )}
        style={
          {
            "--bg-color": color
              ? colord(color).alpha(bgOpacity).toRgbString()
              : undefined,
            "--dark-bg-color": darkColor
              ? colord(darkColor).alpha(darkBgOpacity).toRgbString()
              : undefined,

            "--border-color": color
              ? colord(color).alpha(borderOpacity).toRgbString()
              : undefined,
            "--dark-border-color": darkColor
              ? colord(darkColor).alpha(darkBorderOpacity).toRgbString()
              : undefined,

            "--text-color": color
              ? colord(color).alpha(textOpacity).toRgbString()
              : undefined,
            "--dark-text-color": darkColor
              ? colord(darkColor).alpha(darkTextOpacity).toRgbString()
              : undefined,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
ColoredLabel.displayName = "ColoredLabel"

export { ColoredLabel }
