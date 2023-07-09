"use client"

import React from "react"
import TripSearch from "./components/TripSearch"

export const metadata = {
  title: "Home",
  description: "Home..."
}

export default function Home() {

  return (
    <div className="container ">
      <TripSearch />
    </div >
  )
}
