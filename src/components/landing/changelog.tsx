"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, GitPullRequest, ExternalLink, User } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function Changelog() {
  const [pullRequests, setPullRequests] = useState<GitHubPullRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPullRequests = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/tewfiq/vb2025/pulls?state=closed&per_page=10&sort=updated&direction=desc"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch pull requests");
        }

        const data = await response.json();
        // Filter and prioritize merged PRs
        const filteredPRs = data
          .filter((pr: GitHubPullRequest) => {
            // Exclude draft PRs and certain labels
            const excludeLabels = ['draft', 'wip', 'work-in-progress'];
            const hasExcludedLabel = pr.labels.some(label =>
              excludeLabels.includes(label.name.toLowerCase())
            );
            return !hasExcludedLabel;
          })
          .sort((a: GitHubPullRequest, b: GitHubPullRequest) => {
            // Prioritize merged PRs, then sort by date
            if (a.merged_at && !b.merged_at) return -1;
            if (!a.merged_at && b.merged_at) return 1;
            const dateA = new Date(a.merged_at || a.closed_at).getTime();
            const dateB = new Date(b.merged_at || b.closed_at).getTime();
            return dateB - dateA;
          })
          .slice(0, 8);

        setPullRequests(filteredPRs);
      } catch (err) {
        setError("Impossible de charger les dernières contributions");
        console.error("Error fetching GitHub pull requests:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPullRequests();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const truncateDescription = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  if (loading) {
    return (
      <section className="py-12 md:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
              Changelog
            </h2>
            <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
              Dernières contributions et améliorations
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-muted rounded w-1/3"></div>
                  <div className="h-4 bg-muted rounded w-1/4"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded"></div>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 md:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
              Changelog
            </h2>
            <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
              Dernières contributions et améliorations
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground">{error}</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => window.location.reload()}
                >
                  Réessayer
                </Button>
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
            Changelog
          </h2>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
            Dernières mises à jour et améliorations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {pullRequests.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">
                  Aucune contribution disponible pour le moment.
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
                        <div className="flex items-start gap-3">
                          <div className="flex items-center gap-2 flex-1">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <GitPullRequest className="h-4 w-4" />
                              PR #{pr.number}: {pr.title}
                            </CardTitle>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {index === 0 && (
                              <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
                                Latest
                              </Badge>
                            )}
                            <Badge
                              variant={pr.merged_at ? "default" : "secondary"}
                              className={pr.merged_at ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"}
                            >
                              {pr.merged_at ? "Merged" : "Closed"}
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
                          Voir sur GitHub
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  {pr.body && (
                    <CardContent>
                      <div className="prose prose-sm max-w-none text-muted-foreground">
                        <p>{truncateDescription(pr.body.replace(/#+\s*/g, "").replace(/\*/g, "").replace(/\[x\]/g, "✓").replace(/\[ \]/g, "○"))}</p>
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
                Voir toutes les contributions sur GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}