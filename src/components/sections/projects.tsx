import * as React from "react"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Project() {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple" defaultValue={["project1", "project2", "project3"]}>
                    <AccordionItem value="project1">
                        <AccordionTrigger>E-commerce Platform (2023)</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2">
                                <p>Full-stack e-commerce application with product catalog and secure checkout</p>
                                <p><strong>Technologies:</strong> React, Node.js, MongoDB, Stripe</p>
                                <p><strong>Key Features:</strong></p>
                                <ul className="list-disc list-inside">
                                    <li>User authentication with JWT</li>
                                    <li>Product search and filtering</li>
                                    <li>Shopping cart functionality</li>
                                    <li>Payment processing with Stripe</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="project2">
                        <AccordionTrigger>Task Management App (2022)</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2">
                                <p>Collaborative task management tool for teams</p>
                                <p><strong>Technologies:</strong> TypeScript, Next.js, Prisma, PostgreSQL</p>
                                <p><strong>Key Features:</strong></p>
                                <ul className="list-disc list-inside">
                                    <li>Drag-and-drop task organization</li>
                                    <li>Real-time updates using WebSockets</li>
                                    <li>Team collaboration tools</li>
                                    <li>Automated reminders and notifications</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="project3">
                        <AccordionTrigger>Machine Learning Dashboard (2021)</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2">
                                <p>Data visualization dashboard for ML model performance</p>
                                <p><strong>Technologies:</strong> Python, Flask, TensorFlow, D3.js</p>
                                <p><strong>Key Features:</strong></p>
                                <ul className="list-disc list-inside">
                                    <li>Interactive visualization of model metrics</li>
                                    <li>Custom dataset uploading and processing</li>
                                    <li>Model comparison tools</li>
                                    <li>Export results in multiple formats</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    );
}