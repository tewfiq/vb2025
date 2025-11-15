import { startOfYear, endOfYear, formatISO } from "date-fns";

interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
  };
  author: {
    login: string;
  } | null;
}

interface Activity {
  date: string;
  count: number;
  level: number;
}

const GITHUB_REPO = "tewfiq/vb2025";

export async function GET() {
  try {
    const now = new Date();
    const yearStart = startOfYear(now);

    // Build headers with GitHub token if available
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "vibe-coding-contributions",
    };

    // Add authentication if token is available
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    // Fetch commits from the repository for the current year
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/commits?since=${yearStart.toISOString()}&per_page=1000`,
      {
        headers,
        next: { revalidate: 60 * 60 * 24 }, // Cache for 24 hours
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch repo commits:", response.status, response.statusText);
      return Response.json({ error: "Failed to fetch commits" }, { status: response.status });
    }

    const commits = (await response.json()) as GitHubCommit[];

    // Create a map to count commits per day
    const commitsByDate = new Map<string, number>();

    commits.forEach((commit) => {
      const date = formatISO(new Date(commit.commit.author.date), {
        representation: "date",
      });
      commitsByDate.set(date, (commitsByDate.get(date) || 0) + 1);
    });

    // Get all days in the current year
    const days = Array.from(
      { length: Math.ceil((now.getTime() - yearStart.getTime()) / (1000 * 60 * 60 * 24)) + 1 },
      (_, i) => {
        const date = new Date(yearStart);
        date.setDate(date.getDate() + i);
        return date;
      }
    );

    // Calculate max commits per day to determine levels
    const maxCommits = Math.max(...Array.from(commitsByDate.values()), 1);

    // Generate activity data for each day
    const activities: Activity[] = days.map((day) => {
      const date = formatISO(day, { representation: "date" });
      const count = commitsByDate.get(date) || 0;

      // Calculate level (0-4) based on commit count
      let level = 0;
      if (count > 0) {
        level = Math.min(4, Math.ceil((count / maxCommits) * 4));
      }

      return {
        date,
        count,
        level,
      };
    });

    return Response.json({
      activities,
      totalCommits: commits.length,
      cached: false,
    });
  } catch (error) {
    console.error("Error fetching repo commits:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
