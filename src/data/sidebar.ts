import { LuUser, LuWrench, LuLibraryBig, LuNewspaper, LuClapperboard, LuMusic } from "react-icons/lu";

export const sidebar = {
  userName: `[Your Name]`,
  profileImage: `https://github.com/shadcn.png`,
  sections: [
    {
      title: `About Me`,
      url: ``,
      icon: LuUser
    },
    {
      title: `Projects`,
      url: `projects`,
      icon: LuWrench
    },
    {
      title: `Publications`,
      url: `publications`,
      icon: LuLibraryBig
    },
    {
      title: `Articles`,
      url: `articles`,
      icon: LuNewspaper
    },
    {
      title: `Movies`,
      url: `movies`,
      icon: LuClapperboard
    },
    {
      title: `Music`,
      url: `music`,
      icon: LuMusic
    }
  ]
};