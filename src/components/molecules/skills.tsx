"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";

const skills = [
    {
        name: "React",
        description: "A JavaScript library for building user interfaces, focusing on component-based development.",
        experience: "Intermediate",
        projects: ["Weather Forecast App", "E-commerce Website", "Full-stack Authentication App"],
        key_concepts: ["Hooks", "State Management", "React Router", "Context API", "Component Reusability"]
    },
    {
        name: "Next.js",
        description: "A React framework for production-ready applications with built-in features like SSR, SSG, and API routes.",
        experience: "Intermediate",
        projects: ["E-commerce-Tomato", "Rental Management App"],
        key_concepts: ["Server-side Rendering", "Static Site Generation", "Middleware", "Dynamic Routing"]
    },
    {
        name: "JavaScript",
        description: "A versatile programming language used for both frontend and backend development.",
        experience: "Advanced",
        projects: ["JavaScript Freelancing Projects", "Game Concept", "URL Shortener Microservice"],
        key_concepts: ["ES6+", "Asynchronous Programming", "Event Loop", "DOM Manipulation", "Functional Programming"]
    },
    {
        name: "Node.js",
        description: "A JavaScript runtime for building scalable backend services.",
        experience: "Intermediate",
        projects: ["Full-stack Authentication System", "E-commerce Backend", "REST API Development"],
        key_concepts: ["Express.js", "Middleware", "Authentication", "Database Handling"]
    },
    {
        name: "MongoDB",
        description: "A NoSQL database used for storing JSON-like documents with dynamic schemas.",
        experience: "Intermediate",
        projects: ["E-commerce Database", "User Authentication Systems"],
        key_concepts: ["Mongoose", "Aggregation", "Schema Design", "Indexing"]
    },
    {
        name: "MySQL",
        description: "A relational database management system widely used for structured data storage.",
        experience: "Intermediate",
        projects: ["Number Guessing Game with MySQL & Bash"],
        key_concepts: ["Joins", "Indexes", "Stored Procedures"]
    },
    {
        name: "HTML & CSS",
        description: "Fundamental web technologies for building structured and visually appealing web pages.",
        experience: "Advanced",
        projects: ["Product Card Layout", "E-commerce UI Design"],
        key_concepts: ["Flexbox", "Grid", "Responsive Design", "Tailwind CSS"]
    },
    {
        name: "Tailwind CSS",
        description: "A utility-first CSS framework for quickly styling modern web applications.",
        experience: "Intermediate",
        projects: ["Product Card Layout", "Dashboard Styling"],
        key_concepts: ["Responsive Design", "Dark Mode", "Animations", "Custom Themes"]
    },
    {
        name: "Git & GitHub",
        description: "Version control system and platform for managing collaborative software development.",
        experience: "Intermediate",
        projects: ["All web and backend projects"],
        key_concepts: ["Branching", "Merging", "Pull Requests", "Rebasing"]
    },
    {
        name: "Bash Scripting",
        description: "A scripting language for automating tasks in Unix/Linux environments.",
        experience: "Beginner",
        projects: ["Number Guessing Game"],
        key_concepts: ["File Manipulation", "Scripting Loops", "Automation"]
    },
    {
        name: "C#",
        description: "A high-level language used for software development, especially in Windows applications and games.",
        experience: "Beginner",
        projects: ["Rotate List Right Function"],
        key_concepts: ["LINQ", "OOP", "Data Structures"]
    },

    {
        name: "Technical Support",
        description: "Providing IT support, troubleshooting issues, and setting up network infrastructure.",
        experience: "Advanced",
        projects: ["ICT Technician Internship", "Freelance IT Support"],
        key_concepts: ["Active Directory", "Hardware Troubleshooting", "Networking"]
    },
    {
        name: "Public Speaking",
        description: "Engaging audiences to educate and inspire through effective communication.",
        experience: "Intermediate",
        projects: ["YSA Representative Role", "Tech Awareness Videos", "Stand-up Comedy"],
        key_concepts: ["Storytelling", "Audience Engagement", "Presentation Skills"]
    },
    {
        name: "Content Creation",
        description: "Creating educational and engaging content for social media and online platforms.",
        experience: "Intermediate",
        projects: ["Tech Explainers", "Now You Know Series", "SpaceX Video"],
        key_concepts: ["Scripting", "Video Editing", "SEO for Content"]
    }
];








export default function SkillsSection() {
    const [term, setTerm] = useState("")

    const fullSearchFilter = skills.filter((skill) => Object.values(skill).some(value => String(value).toLowerCase().includes(term.toLowerCase())))

    const [expandedSkill, setExpandedSkill] = useState<number | null>(0);








    return (
        <>
            <div className="lg:max-w-[250px] m-auto">
                <label htmlFor="skills">Full Search Skills</label>
                <Input id="skills" onChange={(e) => setTerm(e.target.value)} value={term} />
            </div>
            <div className="max-w-4xl mx-auto p-6">


                <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
                <div className="grid md:grid-cols-2 gap-4">

                    {fullSearchFilter.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-900 text-white p-4 rounded-2xl shadow-lg cursor-pointer"
                            onClick={() =>
                                setExpandedSkill(expandedSkill === index ? null : index)
                            }
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold">{skill.name}</h3>
                                <span className="text-sm bg-gray-700 px-2 py-1 rounded">
                                    {skill.experience}
                                </span>
                            </div>
                            {expandedSkill === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-3"
                                >
                                    <p className="text-gray-300">{skill.description}</p>
                                    <p className="mt-2 text-sm">
                                        <span className="font-semibold">Key Concepts:</span>{" "}
                                        {skill.key_concepts.join(", ")}
                                    </p>
                                    <p className="mt-2 text-sm">
                                        <span className="font-semibold">Projects:</span>{" "}
                                        {skill.projects.join(", ")}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}
