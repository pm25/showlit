import {
    FaLinkedin,
    FaGoogleScholar,
    FaRegIdBadge,
    FaGithub,
    FaSquareFacebook,
} from "react-icons/fa6";


export const UserInfo = {
    name: "[Your Name]",
    profile_url: "https://github.com/pm25.png",
    headline: "Student @ [Your University]",
    email: "your-email@gmail.com",
    links: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/[your-linkedin]",
            icon: FaLinkedin,
        },
        {
            name: "Google Scholar",
            url: "https://scholar.google.com/citations?user=[your-id]",
            icon: FaGoogleScholar,
        },
        {
            name: "Résumé",
            url: "https://example.com/your-cv.pdf",
            icon: FaRegIdBadge,
        },
        {
            name: "Github",
            url: "https://github.com/[your-github]",
            icon: FaGithub,
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/[your-facebook]",
            icon: FaSquareFacebook,
        },
    ],
    // you can use HTML syntax here (e.g. <br/>, <a>, <strong>, ...)
    biography: `
        Hi! I'm <strong>[Your Name]</strong>, a <em>[Your Title]</em> passionate about <em>[field or topic]</em>. Currently, I work as <em>[current role]</em> at <em>[organization]</em>, where I <em>[briefly describe your work or mission]</em>. 
        With a background in <em>[academic or professional background]</em>, I've developed strong interests in <em>[key interests or specialties]</em> and have contributed to projects like <i>[example project]</i> and <i>[another example]</i>, all focused on <em>[broader goal or impact]</em>.

        <div class="my-2"></div>

        Outside of work, I enjoy <em>[hobbies or personal interests]</em>, which inspire creativity and keep me energized. Thanks for visiting! Feel free to <a href="mailto:[your-email@example.com]" target="_blank" rel="noopener noreferrer">reach out</a> to connect.
    `
}