import { User, Wrench, LibraryBig, Newspaper, Clapperboard, Music } from "lucide-react";

export const sidebar = {
  userName: `[Your Name]`,
  profileImage: `https://github.com/shadcn.png`,
  sections: [
    {
      title: `About Me`,
      url: `/`,
      icon: User
    },
    {
      title: `Projects`,
      url: `/projects`,
      icon: Wrench
    },
    {
      title: `Publications`,
      url: `/publications`,
      icon: LibraryBig
    },
    {
      title: `Articles`,
      url: `/articles`,
      icon: Newspaper
    },
    {
      title: `Movies`,
      url: `/movies`,
      icon: Clapperboard
    },
    {
      title: `Music`,
      url: `/music`,
      icon: Music
    }
  ]
};