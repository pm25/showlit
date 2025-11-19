import { useEffect } from "react";
import { SITE } from "@/data/SITE";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} - ${SITE.name}`;
  }, [title]);
}