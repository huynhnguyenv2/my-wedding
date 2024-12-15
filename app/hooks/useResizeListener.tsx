"use client"
import React, { useState, useEffect } from "react"
import useDebounce from "./useDebounce"

function useResizeListener({ mobileAgent: mobileAgent = false }) {
  const isIpad =
    typeof window === "undefined"
      ? null
      : navigator.userAgent.match(/(iPad)/) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)

  const initialValues =
    typeof window === "undefined"
      ? [
          mobileAgent ? 375 : 1080,
          mobileAgent ? 812 : 750,
          null,
          null,
          mobileAgent || null,
          mobileAgent || null,
        ]
      : [
          window.innerWidth,
          window.innerHeight,
          window.innerWidth < 576 ? "mobile" : "desktop",
          window.innerWidth < window.innerHeight
            ? "portrait-view"
            : "landscape-view",
          window.innerWidth < 576 ? true : false,
          (window.innerWidth >= 576 && window.innerWidth < 992) || isIpad
            ? true
            : false,
        ]
  const [values, setValues] = useState(initialValues)
  const [
    screenWidth,
    screenHeight,
    viewport,
    viewMode,
    mobileView,
    tabletView,
  ] = values || []
  const [debouncedSetValue] = useDebounce(handleChangeViewport, 300)

  function handleChangeViewport() {
    const isIpad =
      navigator.userAgent.match(/(iPad)/) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)

    const newChanges = [
      window.innerWidth,
      window.innerHeight,
      window.innerWidth < 576 ? "mobile" : "desktop",
      window.innerWidth < window.innerHeight
        ? "portrait-view"
        : "landscape-view",
      window.innerWidth < 576 ? true : false,
      (window.innerWidth >= 576 && window.innerWidth < 992) || isIpad
        ? true
        : false,
    ]

    if (JSON.stringify(newChanges) === JSON.stringify(values)) return
    setValues(newChanges)
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    window?.addEventListener("resize", debouncedSetValue)
    window?.addEventListener("focus", debouncedSetValue)

    return () => {
      window?.removeEventListener("resize", debouncedSetValue)
      window?.removeEventListener("focus", debouncedSetValue)
    }
  }, [])
  return {
    // screenWidth,
    // screenHeight,
    // viewport,
    // viewMode,
    mobileView,
    // tabletView,
  }
}

export default useResizeListener
