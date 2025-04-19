import * as React from "react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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

function GitHubContributions({ username }: { username: string }) {
    const [contributions, setContributions] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchContributions = async () => {
            try {
                // For client-side requests, you should use environment variables
                // and a server-side API route to protect your token
                // This is a simplified example - in production, use a backend endpoint
                const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
                
                const query = `
                    query {
                        user(login: "${username}") {
                            contributionsCollection {
                                contributionCalendar {
                                    totalContributions
                                    weeks {
                                        contributionDays {
                                            contributionCount
                                            date
                                        }
                                    }
                                }
                            }
                        }
                    }
                `;

                const response = await fetch('https://api.github.com/graphql', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ query }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch GitHub contributions');
                }

                const data = await response.json();
                setContributions(data.data.user.contributionsCollection.contributionCalendar);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchContributions();
    }, [username]);

    if (loading) return <div className="h-32 flex items-center justify-center">Loading contributions...</div>;
    if (error) return <div className="text-red-500">Error loading GitHub contributions: {error}</div>;
    if (!contributions) return <div>No contribution data available</div>;

    return (
        <div className="overflow-x-auto">
            <div className="grid grid-flow-col gap-1 text-xs">
                {contributions.weeks?.map((week: any, weekIndex: number) => (
                    <div key={weekIndex} className="grid grid-flow-row gap-1">
                        {week.contributionDays.map((day: any, dayIndex: number) => (
                            <div
                                key={dayIndex}
                                title={`${day.date}: ${day.contributionCount} contributions`}
                                className={`w-3 h-3 rounded-sm ${getColorForContributions(day.contributionCount)}`}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className="text-xs mt-2 text-right">
                Total contributions: {contributions.totalContributions}
            </div>
        </div>
    );
}

function getColorForContributions(count: number): string {
    if (count === 0) return "bg-gray-100 dark:bg-gray-800";
    if (count < 5) return "bg-green-100 dark:bg-green-900";
    if (count < 10) return "bg-green-300 dark:bg-green-700";
    if (count < 15) return "bg-green-500 dark:bg-green-500";
    return "bg-green-700 dark:bg-green-300";
}

export default function Github({ data = skillsData }: SkillProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full">
                <CardHeader>
                    <CardTitle>GitHub Contributions</CardTitle>
                </CardHeader>
                <CardContent>
                    <GitHubContributions username="prithviraj-chaudhuri" />
                </CardContent>
            </Card>
        </div>
    );
}