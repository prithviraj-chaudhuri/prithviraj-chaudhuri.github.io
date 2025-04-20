import * as React from "react";
import { GitBranch, Calendar, ExternalLink } from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { getGithubContributions } from "@/lib/github";
import Link from "next/link";

export default async function Github({ username }: { username: string }) {
    const contributions = await getGithubContributions(username);

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
                    {contributions.length > 0 ? (
                        <div className="space-y-4">
                            {contributions.map((contribution, index) => (
                                <div key={index} className="flex items-center gap-4 border-b pb-3 last:border-b-0 last:pb-0">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                                        <Calendar className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">{contribution.date}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {contribution.count} contribution{contribution.count !== 1 ? 's' : ''}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Display a message if no contributions are found or an error occurred
                        <div className="flex justify-center py-6 text-sm text-muted-foreground">
                            No recent activity found or unable to fetch data.
                        </div>
                    )}
                </CardContent>
                <CardFooter className="justify-end">
                    <Link
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-blue-600 hover:underline"
                    >
                        View GitHub Profile <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}