import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { FilesIcon } from "lucide-react";

interface ProjectCategory {
    type?: string;
    list?: string[];
}

interface ProjectProps {
    data?: ProjectCategory[];
}

const defaultProjectsData: ProjectCategory[] = [
    {
        type: "AI & Agentic Systems",
        list: [
            "Built an enterprise-ready MCP server with DCR authentication and Redis backend to enable secure Google Workspace interactions and AI-driven access to organizational data.",
            "Developed Gemini Enterprise agents using MCP, A2A, and agent-defined tools to support no-code workflow automation and internal productivity use cases.",
            "Created Python-based RAG connectors for AEM and Google Drive content, enabling Gemini Enterprise to answer questions grounded in official documentation and brand assets."
        ]
    },
    {
        type: "Systems Projects",
        list: [
            "Improved performance of simulation algorithm by leveraging parallel device and multithreaded capabilities of CUDA, OpenACC, OpenMP and MPI.",
            "Architected infrastructure modernization by migrating legacy hosts to OpenStack and OpenShift using Ansible automation and Linux images.",
            "Built deployment and maintenance tooling for containerized apps and multi-service infrastructure with GitLab pipelines and Docker-based workflows."
        ]
    },
    {
        type: "Data Science Projects",
        list: [
            "Studied transformer networks, CNNs, and word embeddings on the Flickr9k dataset to compare caption-generation performance with BLEU and cosine similarity metrics.",
            "Evaluated multimodal versus single-mode classification on the Yelp dataset to validate improvements in prediction quality and model robustness.",
            "Developed feature-selection and sentiment-analysis experiments with R, MATLAB, Java, and NLP libraries to extract patterns from structured and text data."
        ]
    },
    {
        type: "Web Development Projects",
        list: [
            "Designed registration and event platforms for annual college festivals to streamline participant onboarding and improve engagement.",
            "Customized Adobe Experience Manager solutions with React, Java, and JCR to improve asset workflows, personalization, and content authoring.",
            "Built and maintained containerized and deployment-ready web applications for research and internal business platforms."
        ]
    }
];

export default function Project({ data = defaultProjectsData }: ProjectProps) {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle className="text-2xl tracking-tight">
                    <div className="flex items-center gap-x-2">
                        <FilesIcon className="inline-block h-8 w-8 text-primary" />
                        Projects
                    </div>
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2"></CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple">
                    {data.map((category, categoryIndex) => (
                        <AccordionItem key={categoryIndex} value={`project${categoryIndex}`}>
                            <AccordionTrigger>
                                <h3 className="font-bold text-base">{category.type}</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-2">
                                    {category.list?.map((project, projectIndex) => (
                                        <div key={projectIndex} className="mb-4">
                                            <p>{project}</p>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    );
}