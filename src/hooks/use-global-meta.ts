import { useEffect } from "react";
import { SITE } from "@/data/SITE";

export function useGlobalMeta() {
  useEffect(() => {
    document.title = SITE.name;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", SITE.description || "");
    }

    const authorMeta = document.querySelector('meta[name="author"]');
    if (authorMeta) {
      authorMeta.setAttribute("content", SITE.author || "");
    }
  }, []);
}
