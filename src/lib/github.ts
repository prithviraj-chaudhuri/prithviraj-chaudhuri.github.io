interface Contribution {
    date: string;
    count: number;
}

interface GitHubEvent {
    created_at: string;
}

export async function getGithubContributions(username: string): Promise<Contribution[]> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events?per_page=100`, {
            next: { revalidate: 3600 } // Revalidate data every hour
        });

        if (!response.ok) {
            console.error(`GitHub API error for user ${username}: ${response.status} ${response.statusText}`);
            return [];
        }

        const events: GitHubEvent[] = await response.json();

        // Group events by date and count them
        const contributionMap = events.reduce((acc: Record<string, number>, event) => {
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

        return contributionData;
    } catch (error) {
        console.error(`Error fetching GitHub data for user ${username}:`, error);
        return [];
    }
}