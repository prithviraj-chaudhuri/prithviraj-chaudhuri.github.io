import * as React from "react"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

interface EducationItem {
    id?: string;
    title?: string;
    institution?: string;
    period?: string;
    grade?: string;
    courses?: string[];
    projects?: string[];
}

interface EducationProps {
    data?: EducationItem[];
}

const defaultData: EducationItem[] = [
    {
        id: "1",
        title: "School of Engineering",
        institution: "College of Technology",
        period: "2019-2021",
        grade: "GPA: 3.9/4.0",
        courses: [
            "Advanced Algorithms",
            "Machine Learning",
            "Distributed Systems",
            "Computer Vision"
        ],
        projects: [
            "Distributed Database System",
            "Image Recognition Application"
        ]
    },
    {
        id: "2",
        title: "Bachelor of Science in Computer Science",
        institution: "College of Engineering",
        period: "2015-2019",
        grade: "GPA: 3.8/4.0",
        courses: [
            "Data Structures and Algorithms",
            "Operating Systems",
            "Digital Electronics",
            "Computer Architecture"
        ],
        projects: [
            "Operating System Scheduler",
            "Network Protocol Implementation"
        ]
    },
    {
        id: "3",
        title: "High School Diploma",
        institution: "Example High School",
        period: "2011-2015",
        grade: "GPA: 4.0/4.0",
        courses: [
            "Physics",
            "Chemistry",
            "Mathematics"
        ]
    }
];

export default function Education({ data = defaultData }: EducationProps) {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-tight border-b pb-2 mb-1">
                    <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        Education
                    </span>
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2">My credentials</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple" >
                    {data.map((item) => (
                        <AccordionItem key={item.id} value={item.id || ""}>
                            <AccordionTrigger>{item.title} ({item.period})</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-2">
                                    <p>{item.institution}</p>
                                    <p>{item.grade}</p>
                                    {item.courses && (
                                        <>
                                            <p>Key Courses:</p>
                                            <ul className="list-disc list-inside">
                                                {item.courses.map((course, index) => (
                                                    <li key={index}>{course}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {item.projects && item.projects.length > 0 && (
                                        <>
                                            <p>Projects:</p>
                                            <ul className="list-disc list-inside">
                                                {item.projects.map((project, index) => (
                                                    <li key={index}>{project}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    );
}