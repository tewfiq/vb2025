"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, GitBranch, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  prerelease: boolean;
}

export default function Changelog() {
  const [releases, setReleases] = useState<GitHubRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/tewfiq/vb2025/releases?per_page=6"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch releases");
        }

        const data = await response.json();
        // Filter out prereleases and sort by published date
        const stableReleases = data
          .filter((release: GitHubRelease) => !release.prerelease)
          .slice(0, 5);

        setReleases(stableReleases);
      } catch (err) {
        setError("Impossible de charger les dernières mises à jour");
        console.error("Error fetching GitHub releases:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
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
              Dernières mises à jour et améliorations
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
              Dernières mises à jour et améliorations
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
          {releases.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">
                  Aucune mise à jour disponible pour le moment.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {releases.map((release, index) => (
                <Card key={release.id} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <GitBranch className="h-4 w-4" />
                            {release.name || release.tag_name}
                          </CardTitle>
                          {index === 0 && (
                            <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                              Latest
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="flex items-center gap-2 text-sm">
                          <CalendarDays className="h-3 w-3" />
                          {formatDate(release.published_at)}
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={release.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Voir sur GitHub
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  {release.body && (
                    <CardContent>
                      <div className="prose prose-sm max-w-none text-muted-foreground">
                        <p>{truncateDescription(release.body.replace(/#+\s*/g, "").replace(/\*/g, ""))}</p>
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
                href="https://github.com/tewfiq/vb2025/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Voir tous les changements sur GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}