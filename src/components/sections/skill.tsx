import * as React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Wrench } from "lucide-react";

interface SkillItem {
    skill?: string;
    icon?: string;
}

interface SkillCategory {
    type?: string;
    list?: SkillItem[];
}

interface SkillProps {
    data?: SkillCategory[];
}

const skillsData: SkillCategory[] = [
    {
        type: "Intermediate",
        list: [
            {
                skill: "Java Spring Boot",
                icon: "devicon-spring-plain"
            },
            {
                skill: "Alfresco Document Management",
                icon: "devicon-java-plain"
            },
            {
                skill: "OpenMP",
                icon: "devicon-c-plain"
            },
            {
                skill: "MPI",
                icon: "devicon-cplusplus-plain"
            },
            {
                skill: "CUDA",
                icon: "devicon-nvidia-plain"
            },
            {
                skill: "R",
                icon: "devicon-r-plain"
            },
            {
                skill: "PHP",
                icon: "devicon-php-plain"
            },
            {
                skill: "C#",
                icon: "devicon-csharp-plain"
            },
            {
                skill: "ASP.NET",
                icon: "devicon-dot-net-plain"
            }
        ]
    }
];

export default function Skill({ data = skillsData }: SkillProps) {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Skills
                </CardTitle>
            </CardHeader>
            <CardContent>
                {data.map((category) => (
                    <div key={category.type} className="mb-4">
                        <div className="border-b border-border pb-2 mb-2">
                            <span className="bg-clip-text">
                                {category.type}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.list?.map((item, index) => (
                                <div key={index} className="flex items-center gap-1.5 text-sm bg-muted px-2 py-1 rounded">
                                    {item.icon && <i className={item.icon}></i>}
                                    <span>{item.skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}