import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Skill() {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1 text-sm font-medium">
                        <i className="devicon-typescript-plain"></i>
                        <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1 text-sm font-medium">
                        <i className="devicon-react-original"></i>
                        <span>React</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1 text-sm font-medium">
                        <i className="devicon-nodejs-plain"></i>
                        <span>Node.js</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1 text-sm font-medium">
                        <i className="devicon-python-plain"></i>
                        <span>Python</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1 text-sm font-medium">
                        <i className="devicon-java-plain"></i>
                        <span>Java</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1 text-sm font-medium">
                        <i className="devicon-cplusplus-plain"></i>
                        <span>C++</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1 text-sm font-medium">
                        <i className="devicon-docker-plain"></i>
                        <span>Docker</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1 text-sm font-medium">
                        <i className="devicon-kubernetes-plain"></i>
                        <span>Kubernetes</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1 text-sm font-medium">
                        <i className="devicon-amazonwebservices-original"></i>
                        <span>AWS</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1 text-sm font-medium">
                        <i className="devicon-git-plain"></i>
                        <span>Git</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1 text-sm font-medium">
                        <i className="devicon-tensorflow-original"></i>
                        <span>TensorFlow</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black rounded-full px-3 py-1 text-sm font-medium">
                        <i className="devicon-postgresql-plain"></i>
                        <span>PostgreSQL</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}