import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    }
];

export const experiences = [
    {
        title: "Currently seeking for a software engineering jobs!",
        company_name: "software engineering | full-stack | entry level",
        date: "Summer 2024 - Present",
        points: [
            "Currently hunting for a entry level software engineering related jobs!",
            "I graduated 6 month full-time software bootcamp called App Academy.",
        ],
    },
    {
        title: "Software Engineering Bootcamp",
        company_name: "App Academy",
        date: "Fall 2023 - Spring 2024",
        points: [
            "Acquired a solid foundation in programming languages, frameworks, and tools commonly used in the industry. This includes front-end and back-end technologies, databases, version control, and more.",
            "The intensive curriculum and real-world projects enhanced my problem-solving skills, enabling me to tackle complex coding challenges and develop efficient, scalable solutions",
            "The immersive learning environment and hands-on experience prepared me to adapt to new technologies and methodologies quickly, boosting my confidence in handling diverse projects and staying relevant in a rapidly evolving field."

        ],
    },
    {
        title: "College",
        company_name: "Rochester Institute of Technology",
        date: "Graduated Spring 2023",
        points: [
            "Bachelor of Science in New Media Interactive Development."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Rochester Institute of Technology",
        date: "Jan 2023 - May 2023",
        points: [
            "Designed a website that can be modified and used without problems over time, and that can be easily modified even if users do not have the knowledge required to update the website.",
            "Developed the website’s visual presentation and user interface using HTML and CSS, adhering to the client’s specifications.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Rochester Institute of Technology",
        date: "Aug 2022 - Dec 2022",
        points: [
            "Teaming with two web developers to create the indirect experiences of the character in the game website for users before playing the game.",
            "Designed and developed a game character experience section on the website, allowing users to explore the game world in advance.",
            "Implemented a 3D world within the website, using three.js to create a visually appealing and engaging environment that captures the imagination of the protagonist’s perspective."
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Habitica clone project',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
        live: 'https://github.com/adrianhajdin/pricewise',
    },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];
