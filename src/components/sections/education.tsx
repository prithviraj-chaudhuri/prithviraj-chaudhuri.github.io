import * as React from "react"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Education() {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple" >
                    <AccordionItem value="university">
                        <AccordionTrigger>Bachelor of Technology (2020-2024)</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2">
                                <p>VIT Vellore - Computer Science Engineering</p>
                                <p>CGPA: 8.91/10</p>
                                <p>Key Courses:</p>
                                <ul className="list-disc list-inside">
                                    <li>Data Structures and Algorithms</li>
                                    <li>Operating Systems</li>
                                    <li>Database Management Systems</li>
                                    <li>Computer Networks</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="highschool">
                        <AccordionTrigger>High School (2018-2020)</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2">
                                <p>Delhi Public School - Science Stream</p>
                                <p>Percentage: 95.6%</p>
                                <p>Subjects: Physics, Chemistry, Mathematics, Computer Science</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    );
}