"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useEffect, useState } from "react";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from "@/components/kibo-ui/contribution-graph";
import { cn } from "@/lib/utils";
import { eachDayOfInterval, formatISO, startOfYear, endOfYear } from "date-fns";

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

const GITHUB_REPO = "tewfiq/vb2025";
const GITHUB_REPO_URL = `https://github.com/${GITHUB_REPO}`;

async function fetchRepoCommits(): Promise<Activity[]> {
  try {
    const now = new Date();
    const yearStart = startOfYear(now);

    // Fetch commits from the repository for the current year
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/commits?since=${yearStart.toISOString()}&per_page=1000`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "vibe-coding-contributions",
        },
        next: { revalidate: 60 * 60 * 24 }, // Cache for 24 hours
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch repo commits:", response.status);
      return [];
    }

    const commits = await response.json() as GitHubCommit[];

    // Create a map to count commits per day
    const commitsByDate = new Map<string, number>();

    commits.forEach((commit) => {
      const date = formatISO(new Date(commit.commit.author.date), { representation: "date" });
      commitsByDate.set(date, (commitsByDate.get(date) || 0) + 1);
    });

    // Get all days in the current year
    const days = eachDayOfInterval({
      start: yearStart,
      end: endOfYear(now),
    });

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

    return activities;
  } catch (err) {
    console.error("Error fetching repo commits:", err);
    return [];
  }
}

export default function GitHubContributions() {
  const [data, setData] = useState<Activity[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const t = useTranslation();

  useEffect(() => {
    const loadContributions = async () => {
      try {
        const activities = await fetchRepoCommits();
        setData(activities);

        // Calculate total commits for the year
        const totalCommits = activities.reduce((sum, activity) => sum + activity.count, 0);
        setTotal(totalCommits);
      } catch (error) {
        console.error('Failed to load contributions:', error);
        setData([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    };

    loadContributions();
  }, []);

  if (loading) {
    return (
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
              {t.githubContributions.title}
            </h2>
            <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
              {t.githubContributions.subtitle}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">{t.githubContributions.loading}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (data.length === 0) {
    return (
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
              {t.githubContributions.title}
            </h2>
            <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
              {t.githubContributions.subtitle}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">{t.githubContributions.noData}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
            {t.githubContributions.title}
          </h2>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
            {t.githubContributions.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <CardTitle className="text-lg">{GITHUB_REPO}</CardTitle>
                  <CardDescription>
                    {t.githubContributions.totalCount
                      .replace("{{count}}", String(total))
                      .replace("{{year}}", String(new Date().getFullYear()))}
                  </CardDescription>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={`${GITHUB_REPO_URL}/commits`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 flex-shrink-0 ml-4"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {t.githubContributions.viewProfile}
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ContributionGraph data={data}>
                <ContributionGraphCalendar>
                  {({ activity, dayIndex, weekIndex }) => (
                    <ContributionGraphBlock
                      activity={activity}
                      className={cn(
                        'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
                        'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
                        'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
                        'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
                        'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
                      )}
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                    />
                  )}
                </ContributionGraphCalendar>
                <ContributionGraphFooter>
                  <ContributionGraphTotalCount />
                  <ContributionGraphLegend />
                </ContributionGraphFooter>
              </ContributionGraph>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
