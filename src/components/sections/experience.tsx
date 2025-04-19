import * as React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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
                <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {data.map((experience, index) => (
                        <div key={index} className="relative">
                            <div className="absolute h-full w-0.5 bg-gray-200 left-2"></div>
                            <div className="relative flex items-start space-x-4">
                                <div className="h-4 w-4 rounded-full bg-primary mt-1"></div>
                                <div>
                                    <h3 className="font-bold">{experience.title}</h3>
                                    <p className="text-sm text-muted-foreground">{experience.time}</p>
                                    <p className="mt-2">{experience.title}</p>
                                    {/* <p className="text-sm text-muted-foreground">{experience.description}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
