import * as React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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
                <CardTitle className="text-2xl tracking-tight border-b pb-2 mb-1">
                    <div className="flex items-center gap-x-2">
                        <Briefcase className="inline-block h-8 w-8 text-primary" />
                        Experience
                    </div>
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2">My professional journey and work history</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8 text-sm">
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
                                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{experience.time}</span>
                                    </div>
                                    <p
                                        className="text-muted-foreground font-medium mt-1"
                                        dangerouslySetInnerHTML={{ __html: experience.role }}
                                    />
                                    <p className="mt-2 text-sm">{experience.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
