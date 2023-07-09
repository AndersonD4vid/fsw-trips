import React from "react"
import TripSearch from "./components/TripSearch"
import QuickSearch from "./components/QuickSearch"
import RecommendedTrips from "./components/RecommendedTrips"

export const metadata = {
  title: "Home - Search for a trip",
  description: "Search for a trip..."
}

export default function Home() {

  return (
    <div className="container ">
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div >
  )
}
