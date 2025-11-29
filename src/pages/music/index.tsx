import { FaMusic } from "react-icons/fa6";

import { useTheme } from "@/components/theme-provider";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { spotify } from "@/data/spotify";

export default function MusicPage() {
  usePageTitle("Music");

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <div className="w-full max-w-4xl space-y-10">
        <div className="space-y-4">
          <div className="flex flex-row justify-center items-center gap-4 text-4xl font-semibold">
            <FaMusic />
            Music
          </div>

          <p className="text-center text-lg text-muted-foreground leading-relaxed italic opacity-80">
            Some of my favorite songs and playlists
          </p>
        </div>

        <SpotifyEmbed />
      </div>
    </div>
  );
}

const SpotifyEmbed = () => {
  const { theme } = useTheme();

  const spotifyTheme: "0" | "1" = (() => {
    if (theme === "dark") return "0";
    if (theme === "light") return "1";
    // fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "0" : "1";
  })();

  return (
    <iframe
      style={{ borderRadius: "2px" }}
      src={`https://open.spotify.com/embed/playlist/${spotify.playlistId}?theme=${spotifyTheme}`}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify Playlist"
      className="w-full h-[62vh]"
    ></iframe>
  );
};
