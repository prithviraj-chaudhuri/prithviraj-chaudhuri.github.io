import * as React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { 
    Sheet, 
    SheetContent, 
    SheetDescription, 
    SheetHeader, 
    SheetTitle, 
    SheetTrigger 
} from "../ui/sheet";
import { Briefcase } from "lucide-react";

interface Project {
    description: string;
    tech_used: string[];
    highlights: string[];
}

interface ExperienceItem {
    id: string;
    title: string;
    time: string;
    role: string;
    description: string;
    responsibilities: string[];
    projects: Project[];
}

interface ExperienceProps {
    data?: ExperienceItem[];
}

const defaultExperienceData: ExperienceItem[] = [
    {
        id: "apple_part",
        title: "Apple",
        time: "2022 - Present",
        role: "Software Engineer",
        description: "Working on Core ML and Foundation Models at Apple.",
        responsibilities: [
            "Develop and optimize Core ML features",
            "Work on Foundation Models implementation",
            "Collaborate with cross-functional teams on ML initiatives"
        ],
        projects: [
            {
                description: "Core ML Optimization",
                tech_used: ["Swift", "C++", "Python", "TensorFlow"],
                highlights: [
                    "Improved model inference performance on Apple devices",
                    "Implemented optimized model conversion pipelines",
                    "Enhanced on-device ML capabilities"
                ]
            }
        ]
    },
    {
        id: "amazon_part",
        title: "Amazon",
        time: "2020 - 2022",
        role: "Software Development Engineer",
        description: "Worked on various aspects of the Amazon Prime Video platform.",
        responsibilities: [
            "Develop and maintain Prime Video features",
            "Optimize streaming performance across devices",
            "Implement analytics for user engagement tracking"
        ],
        projects: [
            {
                description: "Prime Video Streaming Optimization",
                tech_used: ["Java", "AWS", "React", "Node.js"],
                highlights: [
                    "Reduced buffering time by 30% through adaptive bitrate improvements",
                    "Implemented cross-platform playback synchronization",
                    "Built analytics dashboard for streaming quality metrics"
                ]
            }
        ]
    }
];

export default function Experience({ data = defaultExperienceData }: ExperienceProps) {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle className="text-2xl tracking-tight">
                    <div className="flex items-center gap-x-2">
                        <Briefcase className="inline-block h-8 w-8 text-primary" />
                        Experience
                    </div>
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2"></CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-sm">
                    {data.map((experience, index) => (
                        <div key={index} className="relative pb-8">
                            {index < data.length - 1 && (
                                <div className="absolute left-5 top-5 h-full w-0.5 bg-border"></div>
                            )}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center relative">
                                        <div className="h-2.5 w-2.5 rounded-sm bg-primary"></div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-base">{experience.title}</h3>
                                        <span className="text-xs bg-muted px-2 py-1 rounded">{experience.time}</span>
                                    </div>
                                    <p
                                        className="text-muted-foreground font-medium mt-1"
                                    >
                                        {experience.role}
                                    </p>
                                    {/* <p className="mt-2 text-sm">{experience.description}</p> */}
                                    {experience.projects && experience.projects.length > 0 && (
                                        <div className="mt-3">
                                            <Sheet>
                                                <SheetTrigger>
                                                    <span className="text-sm font-medium cursor-pointer text-blue-600 hover:underline">
                                                        View More
                                                    </span>
                                                </SheetTrigger>
                                                <SheetContent>
                                                    <SheetHeader>
                                                        <SheetTitle><br></br></SheetTitle>
                                                        <SheetDescription asChild>
                                                            <div className="h-[calc(100vh-8rem)] overflow-y-auto pr-4">
                                                                {experience.projects.map((project, index) => (
                                                                    <div key={index} className="mb-4 border-b pb-4 last:border-b-0 last:pb-0">
                                                                        <h3 className="font-semibold text-foreground">{project.description}</h3>
                                                                        <div className="mt-2 flex flex-wrap gap-1">
                                                                            {project.tech_used.map((tech, techIndex) => (
                                                                                <div key={techIndex} className="flex items-center gap-1.5 bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium">
                                                                                    <span>{tech}</span>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        {/* <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-foreground">
                                                                            {project.highlights.map((highlight, highlightIndex) => (
                                                                                <li key={highlightIndex}>{highlight}</li>
                                                                            ))}
                                                                        </ul> */}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </SheetDescription>
                                                    </SheetHeader>
                                                </SheetContent>
                                            </Sheet>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
