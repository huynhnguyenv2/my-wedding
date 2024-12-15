"use client"
import { useCallback } from "react"
import debounce from "lodash.debounce"

export default function useDebounce(
  callback: any,
  delay: number,
  deps = [] as any[]
) {
  const d = callback
  const callbackFn = useCallback(debounce(d, delay), deps)

  return [callbackFn]
}
