import * as React from "react"

import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Skill from "@/components/sections/skill"
import Project from "@/components/sections/projects"

import siteContent from "../../public/data/site-content.json"
import Github from "@/components/sections/stats"

const site = siteContent.content.site;
const person = siteContent.content.contact;

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Person", "WebSite"],
  "name": person.name,
  "description": person.bio,
  "url": site.url,
  "jobTitle": person.title,
  "email": `mailto:${person.email}`,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Albany",
    "addressRegion": "New York",
    "addressCountry": "US"
  },
  "sameAs": [
    person.linkedin,
    "https://github.com/prithviraj-chaudhuri"
  ],
  "knowsAbout": siteContent.content.skills.flatMap((group: { list?: { skill?: string }[] }) =>
    (group.list ?? []).map((skill: { skill?: string }) => skill.skill).filter(Boolean)
  ),
  "mainEntityOfPage": site.url
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "jobTitle": person.title,
  "description": person.bio,
  "url": site.url,
  "sameAs": [
    person.linkedin,
    "https://github.com/prithviraj-chaudhuri"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Albany",
    "addressRegion": "New York",
    "addressCountry": "US"
  },
  "knowsAbout": siteContent.content.skills.flatMap((group: { list?: { skill?: string }[] }) =>
    (group.list ?? []).map((skill: { skill?: string }) => skill.skill).filter(Boolean)
  ),
  "hasOccupation": {
    "@type": "Occupation",
    "name": person.title
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="grid gap-4 p-8 max-w-[1500px] mx-auto md:grid-cols-3 md:mt-20">
          <div className="grid gap-4 md:col-span-1 content-start">
            <About data={siteContent.content.contact}/>
            <Skill data={siteContent.content.skills}/>
            <Github username={siteContent.content.github_username}/>
          </div>
          <div className="grid gap-4 md:col-span-2 content-start">
            <Experience data={siteContent.content.experience}/>
            <Education data={siteContent.content.educational_qualification}/>
            <Project data={siteContent.content.projects}/>
          </div>
        </div>
      </section>
    </>
  )
}
