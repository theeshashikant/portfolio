import { Code2, Github, Linkedin, Mail, Palette, Phone, Terminal, Twitter, Zap } from "lucide-react"

export const portfolioData = {
    personal: {
        name: "Vaibhav Saini",
        title: "Frontend Developer & UI/UX Enthusiast",
        description: "I create stunning, pixel-perfect, modern web interfaces that blend aesthetics with functionality.",
        email: "hello@example.com",
        phone: "+91 98765 43210",
        location: "New Delhi, India",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
        resume: "/resume.pdf",
        profileImage: "/vaibhav.jpg",
    },
    hero: {
        badge: "Available for new projects",
    },
    about: {
        title: "About Me",
        bio: "I'm a passionate Frontend Developer based in India. I specialize in building modern web applications using React, Next.js, and Tailwind CSS. I love creating clean, minimal, and user-friendly interfaces that provide an exceptional user experience.",
        stats: [
            { label: "Years Experience", value: "4+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Happy Clients", value: "30+" },
        ],
        features: [
            {
                icon: Palette,
                title: "UI/UX Design",
                description: "Creating beautiful, intuitive interfaces with a focus on user experience.",
            },
            {
                icon: Code2,
                title: "Frontend Development",
                description: "Building responsive, accessible, and performant web applications.",
            },
            {
                icon: Zap,
                title: "Performance Optimization",
                description: "Ensuring fast load times and smooth interactions.",
            },
            {
                icon: Terminal,
                title: "Clean Code",
                description: "Writing maintainable, scalable, and well-documented code.",
            },
        ],
    },
    skills: [
        { name: "HTML5", category: "Frontend" },
        { name: "CSS3", category: "Frontend" },
        { name: "JavaScript (ES6+)", category: "Language" },
        { name: "TypeScript", category: "Language" },
        { name: "React", category: "Framework" },
        { name: "Next.js", category: "Framework" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "ShadCN UI", category: "UI Library" },
        { name: "Framer Motion", category: "Animation" },
        { name: "Git & GitHub", category: "Version Control" },
        { name: "Figma", category: "Design" },
        { name: "Node.js", category: "Backend" },
    ],
    projects: [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.",
            tags: ["Next.js", "Tailwind CSS", "Recharts"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            title: "Task Management App",
            description: "A collaborative task management tool with drag-and-drop functionality and team features.",
            tags: ["React", "Redux", "Node.js"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            title: "Portfolio Website",
            description: "A modern, minimalist portfolio website built with Next.js and Tailwind CSS.",
            tags: ["Next.js", "Framer Motion", "ShadCN"],
            demoLink: "#",
            codeLink: "#",
        },
    ],
    experience: [
        {
            company: "Tech Solutions Inc.",
            role: "Senior Frontend Developer",
            period: "2023 - Present",
            description: "Leading the frontend team in building scalable web applications. Implemented a new design system that improved development speed by 40%.",
        },
        {
            company: "Creative Agency",
            role: "Frontend Developer",
            period: "2021 - 2023",
            description: "Collaborated with designers to create award-winning websites for high-profile clients. Specialized in complex animations and interactive experiences.",
        },
        {
            company: "StartUp Hub",
            role: "Junior Web Developer",
            period: "2020 - 2021",
            description: "Assisted in the development of a SaaS platform. Gained expertise in React and state management libraries.",
        },
    ],
    codingProfiles: {
        github: {
            username: "vaibhavsaini",
            url: "https://github.com",
            stats: {
                commits: "1,250+",
                repos: "45",
                stars: "120+",
            }
        },
        leetcode: {
            username: "vaibhavsaini",
            url: "https://leetcode.com",
            stats: {
                solved: "350+",
                ranking: "Top 15%",
                easy: 120,
                medium: 180,
                hard: 50,
            }
        }
    },
    testimonials: [
        {
            quote: "Vaibhav is a fantastic developer who truly cares about the user experience. Highly recommended!",
            author: "Jane Doe",
            role: "CEO, TechStart",
        }
    ]
}
