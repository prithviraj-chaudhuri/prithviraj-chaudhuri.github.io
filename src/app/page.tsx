import * as React from "react"

import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Skill from "@/components/sections/skill"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid gap-4 p-8 max-w-[1500px] mx-auto md:grid-cols-3">
        <div className="grid gap-4 md:col-span-1">
          <About />
          <Skill />
        </div>
        <div className="grid gap-4 md:col-span-2 content-start">
          <Experience />
          <Education />
        </div>
      </div>
    </section>
  )
}
