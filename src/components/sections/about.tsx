import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"

export default function About() {
    return (
        <Card className="">
            <CardHeader>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-full" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="text-left">
                    <h2 className="text-2xl font-bold mb-2">Prithviraj Chaudhuri</h2>
                    <p className="text-gray-600 mb-2">Senior Software Engineer</p>
                    <p className="mb-4">
                        Passionate about building scalable web applications and solving complex problems.
                        Experienced in full-stack development with expertise in React, TypeScript, and Node.js.
                    </p>
                    <div className="space-y-1">
                        <p>📍 Toronto, ON</p>
                        <p>📧 <a href="mailto:p.chaudhuri1993@gmail.com">p.chaudhuri1993@gmail.com</a></p>
                        <p>🔗 <a href="https://linkedin.com/in/prithviraj-chaudhuri" target="_blank" rel="noopener noreferrer">linkedin.com/in/prithviraj-chaudhuri</a></p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Download Resume</Button>
            </CardFooter>
        </Card>
    );
}