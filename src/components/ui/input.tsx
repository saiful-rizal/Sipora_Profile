import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          // Tampilan utama: biru gelap, kontras tinggi, elegan
          "flex h-11 w-full rounded-md border border-blue-800 bg-gradient-to-b from-blue-950 to-black px-4 py-2 text-base text-blue-100 placeholder:text-blue-400/60",
          // Fokus: efek glowing biru
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950",
          // File input styling & disabled
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-blue-300",
          "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200",
          // Hover efek lembut
          "hover:border-blue-600 hover:shadow-md hover:shadow-blue-800/30",
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
