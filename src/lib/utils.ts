import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  // Spread the inputs so clsx receives a flat argument list
  // otherwise nested arrays may not be merged as expected
  return twMerge(clsx(...inputs))
}
