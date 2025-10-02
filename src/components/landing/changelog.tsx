"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, GitPullRequest, ExternalLink, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { useEffect, useState } from "react";

interface GitHubPullRequest {
  id: number;
  number: number;
  title: string;
  body: string;
  html_url: string;
  merged_at: string | null;
  closed_at: string;
  state: string;
  user: {
    login: string;
    avatar_url: string;
  };
  labels: Array<{
    name: string;
    color: string;
  }>;
}

async function fetchPullRequests(): Promise<GitHubPullRequest[]> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/tewfiq/vb2025/pulls?state=closed&per_page=10&sort=updated&direction=desc",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "vibe-coding-changelog",
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch pull requests:", response.status);
      return [];
    }

    const data = await response.json();

    // Filter and prioritize merged PRs
    const filteredPRs = data
      .filter((pr: GitHubPullRequest) => {
        // Only include merged PRs and exclude draft PRs
        if (!pr.merged_at) return false;

        const excludeLabels = ['draft', 'wip', 'work-in-progress'];
        const hasExcludedLabel = pr.labels.some(label =>
          excludeLabels.includes(label.name.toLowerCase())
        );
        return !hasExcludedLabel;
      })
      .sort((a: GitHubPullRequest, b: GitHubPullRequest) => {
        // Sort by merge date descending
        const dateA = new Date(a.merged_at || a.closed_at).getTime();
        const dateB = new Date(b.merged_at || b.closed_at).getTime();
        return dateB - dateA;
      })
      .slice(0, 3);

    return filteredPRs;
  } catch (err) {
    console.error("Error fetching GitHub pull requests:", err);
    return [];
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const truncateDescription = (text: string, maxLength: number = 200) => {
  if (text.length <= maxLength) return text;

  // Find the last complete sentence within the limit
  const truncated = text.substring(0, maxLength);
  const lastSentence = truncated.lastIndexOf('. ');
  const lastWord = truncated.lastIndexOf(' ');

  // If we find a sentence end, use that; otherwise use last word
  if (lastSentence > maxLength * 0.7) {
    return truncated.substring(0, lastSentence + 1);
  } else if (lastWord > maxLength * 0.8) {
    return truncated.substring(0, lastWord) + "...";
  }

  return truncated + "...";
};

const extractSummary = (text: string): string => {
  if (!text) return '';

  // Look for Summary section
  const summaryMatch = text.match(/## Summary\s*\n(.*?)(?=\n##|\n---|\n\n##|$)/is);
  if (summaryMatch) {
    return summaryMatch[1].trim();
  }

  // Fallback: look for summary in different formats
  const summaryAltMatch = text.match(/Summary:?\s*\n(.*?)(?=\n[A-Z]|\n##|\n---|\n\n|$)/is);
  if (summaryAltMatch) {
    return summaryAltMatch[1].trim();
  }

  // If no summary section found, take first paragraph
  const firstParagraph = text.split('\n\n')[0];
  return firstParagraph || '';
};

const parseMarkdownBasic = (text: string) => {
  // Convert basic markdown to readable text while preserving structure
  return text
    // Convert headers to bold text
    .replace(/#+\s*(.+)/g, '$1')
    // Convert bold/italic markers
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    // Convert checkboxes to symbols
    .replace(/\[x\]/gi, '✓')
    .replace(/\[ \]/g, '○')
    // Convert bullet points
    .replace(/^[*-]\s+/gm, '• ')
    // Clean up extra whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
};

export default function Changelog() {
  const [pullRequests, setPullRequests] = useState<GitHubPullRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const t = useTranslation();

  useEffect(() => {
    const loadPullRequests = async () => {
      try {
        const prs = await fetchPullRequests();
        setPullRequests(prs);
      } catch (error) {
        console.error('Failed to load pull requests:', error);
        setPullRequests([]);
      } finally {
        setLoading(false);
      }
    };

    loadPullRequests();
  }, []);

  if (loading) {
    return (
      <section className="py-12 md:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
              {t.changelog.title}
            </h2>
            <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
              {t.changelog.subtitle}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">Loading...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
            {t.changelog.title}
          </h2>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
            {t.changelog.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {pullRequests.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">
                  {t.changelog.noContributions}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {pullRequests.map((pr, index) => (
                <Card key={pr.id} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                          <div className="flex items-start gap-2 flex-1 min-w-0">
                            <GitPullRequest className="h-4 w-4 flex-shrink-0 mt-1" />
                            <CardTitle className="text-lg break-words leading-tight">
                              PR #{pr.number}: {pr.title}
                            </CardTitle>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {index === 0 && (
                              <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
                                {t.changelog.badges.latest}
                              </Badge>
                            )}
                            <Badge
                              variant="default"
                              className="bg-green-600 hover:bg-green-700"
                            >
                              {t.changelog.badges.merged}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <CardDescription className="flex items-center gap-2">
                            <CalendarDays className="h-3 w-3" />
                            {formatDate(pr.merged_at || pr.closed_at)}
                          </CardDescription>
                          <CardDescription className="flex items-center gap-2">
                            <User className="h-3 w-3" />
                            {pr.user.login}
                          </CardDescription>
                        </div>
                        {pr.labels.length > 0 && (
                          <div className="flex gap-1 flex-wrap">
                            {pr.labels.slice(0, 3).map((label) => (
                              <Badge
                                key={label.name}
                                variant="outline"
                                className="text-xs"
                                style={{
                                  borderColor: `#${label.color}`,
                                  color: `#${label.color}`
                                }}
                              >
                                {label.name}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={pr.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 flex-shrink-0 ml-4"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {t.changelog.viewOnGitHub}
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  {pr.body && (
                    <CardContent>
                      <div className="prose prose-sm max-w-none">
                        <div className="text-muted-foreground leading-relaxed line-clamp-3">
                          {(() => {
                            const summary = extractSummary(pr.body);
                            if (!summary) return null;

                            const parsed = parseMarkdownBasic(summary);
                            const truncated = truncateDescription(parsed, 200);
                            return <p>{truncated}</p>;
                          })()}
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a
                href="https://github.com/tewfiq/vb2025/pulls?q=is%3Apr+is%3Aclosed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                {t.changelog.viewAllContributions}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}