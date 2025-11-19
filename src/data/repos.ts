import AllRepoDataImport from "@/data/generated/repos.json";

interface RepoData {
    name: string;
    display_name?: string;
    html_url: string;
    preview_image?: string;
    description: string | null;
    topics: string[] | null;
    language: string | null;
    stargazers_count: number | null;
    homepage: string | null;
    created_at: string;
    pushed_at: string;
}

type AllRepoDataMap = Record<string, RepoData>;
export const AllRepoData: AllRepoDataMap = AllRepoDataImport as AllRepoDataMap;

export const featuredRepos = [
    "showlit",
    "pm25.github.io",
    "SimplePlus-BeamerTheme",
    "SimpleDarkBlue-BeamerTheme",
    "Semi-Supervised-Regression",
    "showlit",
] as (keyof typeof AllRepoData)[];

export const FeaturedRepoData = featuredRepos.map((key) => {
  const repo = AllRepoData[key];
  if (!repo) {
    console.warn(`⚠️ Missing repo data for: ${key}`);
  }
  return repo;
});