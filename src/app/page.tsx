import * as React from "react"

import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Skill from "@/components/sections/skill"

export default function Home() {
  return (
    <section className="grid gap-4 p-8">
        <About />
        <Experience />
        <Education />
        <Skill />
    </section>
  )
}
