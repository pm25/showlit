export const SITE = {
    name: "Showlit",
    repoUrl: "https://github.com/pm25/showlit",
    //   description: "A short description",
    //   author: "Your Name",

    get repoName() {
        return (
            this.repoUrl
                .replace(/\.git$/, "")
                .split("/")
                .pop() ?? ""
        );
    },

    get base() {
        return `/${this.repoName}/`;
    },
};
