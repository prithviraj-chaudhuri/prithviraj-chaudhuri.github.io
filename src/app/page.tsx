import * as React from "react"

import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Skill from "@/components/sections/skill"
import Project from "@/components/sections/projects"

import siteContent from "../../public/data/site-content.json"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid gap-4 p-8 max-w-[1500px] mx-auto md:grid-cols-3 md:mt-20">
        <div className="grid gap-4 md:col-span-1 content-start">
          <About data={siteContent.content.contact}/>
          <Skill data={siteContent.content.skills}/>
        </div>
        <div className="grid gap-4 md:col-span-2 content-start">
          <Experience data={siteContent.content.experience}/>
          <Education data={siteContent.content.educational_qualification}/>
          <Project data={siteContent.content.projects}/>
        </div>
      </div>
    </section>
  )
}
