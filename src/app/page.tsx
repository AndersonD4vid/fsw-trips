import { useState } from 'react'
import Trips from './about/components/Trips'

export const metadata = {
  title: "Home",
  description: "Home..."
}

export default function Home() {
  return (
    <main className="container">
      <Trips />
    </main>
  )
}
