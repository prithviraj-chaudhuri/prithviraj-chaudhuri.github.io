import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Experience() {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="space-y-8">
                    <div className="relative">
                        <div className="absolute h-full w-0.5 bg-gray-200 left-2"></div>
                        <div className="relative flex items-start space-x-4">
                            <div className="h-4 w-4 rounded-full bg-primary mt-1"></div>
                            <div>
                                <h3 className="font-bold">Apple</h3>
                                <p className="text-sm text-muted-foreground">2022 - Present</p>
                                <p className="mt-2">Software Engineer</p>
                                <p className="text-sm text-muted-foreground">Working on Core ML and Foundation Models</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute h-full w-0.5 bg-gray-200 left-2"></div>
                        <div className="relative flex items-start space-x-4">
                            <div className="h-4 w-4 rounded-full bg-primary mt-1"></div>
                            <div>
                                <h3 className="font-bold">Amazon</h3>
                                <p className="text-sm text-muted-foreground">2020 - 2022</p>
                                <p className="mt-2">Software Development Engineer</p>
                                <p className="text-sm text-muted-foreground">Worked on Amazon Prime Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}