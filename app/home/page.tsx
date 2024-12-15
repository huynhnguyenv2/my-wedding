import React, { Suspense } from "react"
import Home from "../core/containers/Home"
export default function home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  )
}
