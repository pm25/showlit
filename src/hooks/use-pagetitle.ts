import { useEffect } from "react";
import { SITE } from "@/data/site";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} - ${SITE.name}`;
  }, [title]);
}