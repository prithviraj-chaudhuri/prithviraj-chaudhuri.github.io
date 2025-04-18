import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"

interface AboutProps {
    data?: {
        name?: string;
        title?: string;
        bio?: string;
        location?: string;
        email?: string;
        linkedin?: string;
        avatar?: string;
        resume?: string;
    }
}

const defaultData = {
    name: "First Name Last Name",
    title: "Job Title",
    bio: "Passionate about building scalable web applications and solving complex problems. Experienced in full-stack development with expertise in React, TypeScript, and Node.js.",
    location: "City, State, Country",
    email: "example@mail.com",
    linkedin: "linkedin.com/in/username",
    avatar: "/images/profile.jpeg",
    resume: "/path/to/resume.pdf"
}

export default function About({ data = defaultData }: AboutProps) {

    return (
        <Card className="">
            <CardHeader>
                <Avatar className="max-h-[350px] max-w-[320px] w-full h-auto mx-auto">
                    <AvatarImage src={data.avatar} alt={data.name} className="rounded-full object-cover w-full h-full" />
                    <AvatarFallback className="text-4xl">
                        {data.name?.split(" ").map(word => word[0]).join("").toUpperCase() || "?"}
                    </AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="text-left">
                    <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
                    <p className="text-muted-foreground mb-2">{data.title}</p>
                    <p className="mb-4">{data.bio}</p>
                    <div className="space-y-1">
                        <p>📍 {data.location}</p>
                        <p>📧 <a href={`mailto:${data.email}`}>{data.email}</a></p>
                        <p>🔗 <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer">{data.linkedin}</a></p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <a href={data.resume} download>
                    <Button variant="outline">
                        Download Resume
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
}