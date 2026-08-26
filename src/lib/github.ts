export interface RepoMetadata {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  updatedAt: string | null;
  stars: number | null;
}

function parseRepoPath(githubUrl: string): string | null {
  try {
    const url = new URL(githubUrl);
    const [owner, repo] = url.pathname.replace(/^\//, "").split("/");
    if (!owner || !repo) return null;
    return `${owner}/${repo}`;
  } catch {
    return null;
  }
}

// Server-side only. Never throws — a failed or rate-limited GitHub API call
// falls back to `null` per repo so rendering is never blocked by GitHub's
// availability.
export async function getRepoMetadata(
  githubUrls: string[]
): Promise<(RepoMetadata | null)[]> {
  return Promise.all(
    githubUrls.map(async (githubUrl) => {
      const path = parseRepoPath(githubUrl);
      if (!path) return null;

      try {
        const response = await fetch(`https://api.github.com/repos/${path}`, {
          headers: { Accept: "application/vnd.github+json" },
          next: { revalidate: 3600 },
        });

        if (!response.ok) return null;

        const data = (await response.json()) as {
          name: string;
          html_url: string;
          description: string | null;
          language: string | null;
          updated_at: string | null;
          stargazers_count: number | null;
        };

        return {
          name: data.name,
          url: data.html_url,
          description: data.description,
          language: data.language,
          updatedAt: data.updated_at,
          stars: data.stargazers_count,
        };
      } catch {
        return null;
      }
    })
  );
}
