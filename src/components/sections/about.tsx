import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { MapPin, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

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
                    {/* <p className="mb-4">{data.bio}</p> */}
                    <div className="space-y-1 text-sm">
                        <p className="flex items-center gap-2">
                            <MapPin size={16} className="text-muted-foreground" /> {data.location}
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail size={16} className="text-muted-foreground" /> 
                            <Link
                                href={`mailto:${data.email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-sm text-blue-600 hover:underline"
                            >
                                {data.email}
                            </Link>
                        </p>
                        <p className="flex items-center gap-2">
                            <Linkedin size={16} className="text-muted-foreground" /> 
                            <Link
                                href={`https://${data.linkedin}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center text-sm text-blue-600 hover:underline"
                            >
                                {data.linkedin}
                            </Link>
                        </p>
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