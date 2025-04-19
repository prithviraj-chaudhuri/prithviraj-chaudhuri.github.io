'use client'

import * as React from "react"
import { useState, useEffect } from "react"
import { GitBranch, Calendar, ExternalLink } from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card"


export default function Github({ username }: { username: string }) {
    const [contributions, setContributions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real implementation, you would fetch this data from GitHub API
        const fetchContributions = async () => {
            try {
            setLoading(true);
            
            // Fetch user's events from GitHub API
            const response = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);
            
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }
            
            const events = await response.json();
            
            // Group events by date and count them
            const contributionMap = events.reduce((acc: Record<string, number>, event: any) => {
                const date = event.created_at.split('T')[0];
                if (!acc[date]) {
                acc[date] = 0;
                }
                acc[date]++;
                return acc;
            }, {});
            
            // Convert to array and sort by date (newest first)
            const contributionData = Object.entries(contributionMap)
                .map(([date, count]) => ({ date, count }))
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 5); // Limit to 5 days
            
            setContributions(contributionData);
            } catch (error) {
            console.error("Error fetching GitHub data:", error);
            // Fallback to empty array if error occurs
            setContributions([]);
            } finally {
            setLoading(false);
            }
        };

        fetchContributions();
    }, [username]);

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <GitBranch className="h-5 w-5" />
                        GitHub Contributions
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="flex justify-center py-6 text-sm">Loading activity...</div>
                    ) : (
                        <div className="space-y-4">
                            {contributions.map((contribution, index) => (
                                <div key={index} className="flex items-center gap-4 border-b pb-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                                        <Calendar className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-small">{contribution.date}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {contribution.count} contribution{contribution.count !== 1 ? 's' : ''}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
                <CardFooter className="justify-end">
                    <a 
                        href={`https://github.com/${username}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-sm text-blue-600 hover:underline"
                    >
                        View GitHub Profile <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                </CardFooter>
            </Card>
        </div>
    );
}