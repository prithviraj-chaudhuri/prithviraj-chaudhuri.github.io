import * as React from "react"

import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Skill from "@/components/sections/skill"
import Project from "@/components/sections/projects"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid gap-4 p-8 max-w-[1500px] mx-auto md:grid-cols-3 md:mt-20">
        <div className="grid gap-4 md:col-span-1 content-start">
          <About />
          <Skill />
        </div>
        <div className="grid gap-4 md:col-span-2 content-start">
          <Experience />
          <Education />
          <Project />
        </div>
      </div>
    </section>
  )
}
