"use client"

import React from "react"
import { signIn } from 'next-auth/react'

export const metadata = {
  title: "Home",
  description: "Home..."
}

export default function Home() {

  return (
    <div className="container">
      <button onClick={() => signIn()}>Login</button>
    </div >
  )
}
