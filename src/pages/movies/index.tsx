import { FaFilm } from "react-icons/fa6";

import { usePageTitle } from "@/hooks/use-pagetitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { movies } from "@/data/movies";

export default function MoviesPage() {
  usePageTitle("Movies");

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <div className="w-full max-w-6xl space-y-10">
        <div className="space-y-4">
          <div className="flex flex-row justify-center items-center gap-4 text-4xl font-semibold">
            <FaFilm />
            Movies
          </div>

          <p className="text-center text-lg text-muted-foreground leading-relaxed italic opacity-80">
            Some of my favorite movies
          </p>
        </div>

        <div className="grid w-full gap-4 px-2 sm:px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <Card key={movie.title} className="rounded-md overflow-hidden gap-0 py-0 w-full">
              <img
                src={movie.posterImage}
                alt={movie.title}
                className="aspect-2/3 w-full object-cover"
                loading="lazy"
              />
              <div className="py-6">
                <CardHeader>
                  <CardTitle>{movie.title}</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-sm text-muted-foreground">{movie.note}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
