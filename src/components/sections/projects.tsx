import * as React from "react"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { FilesIcon } from "lucide-react";

interface ProjectCategory {
    type?: string;
    list?: string[];
}

interface ProjectProps {
    data?: ProjectCategory[];
}

const defaultProjectsData: ProjectCategory[] = [
    {
        type: "Systems Projects",
        list: [
            "Distributed Cache System - Built a scalable in-memory caching solution with sharding and replication",
            "Containerization Platform - Developed a lightweight container orchestration system similar to Docker",
            "High-Performance Message Queue - Implemented a fault-tolerant message broker with guaranteed delivery"
        ]
    },
    {
        type: "Web Applications",
        list: [
            "Real-time Collaboration Tool - Created a document editing platform with websocket synchronization",
            "Analytics Dashboard - Built a data visualization portal for tracking user engagement metrics",
            "Content Management System - Developed a headless CMS with RESTful and GraphQL APIs"
        ]
    },
    {
        type: "Mobile Development",
        list: [
            "Cross-platform Fitness App - Built with React Native featuring workout tracking and social sharing",
            "Augmented Reality Navigation - iOS application using ARKit for indoor navigation assistance",
            "Offline-first Note Taking App - Implemented with Flutter and local SQLite database synchronization"
        ]
    }
];

export default function Project({ data = defaultProjectsData }: ProjectProps) {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle className="text-2xl tracking-tight border-b pb-2 mb-1">
                    <div className="flex items-center gap-x-2">
                        <FilesIcon className="inline-block h-8 w-8 text-primary" />
                        Projects
                    </div>
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2">Some of my notable projects</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple" defaultValue={data.map((_, index) => `project${index}`)}>
                    {data.map((category, categoryIndex) => (
                        <AccordionItem key={categoryIndex} value={`project${categoryIndex}`}>
                            <AccordionTrigger>{category.type}</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-2">
                                    {category.list?.map((project, projectIndex) => (
                                        <div key={projectIndex} className="mb-4">
                                            <p>{project}</p>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    );
}