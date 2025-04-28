import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const projects = [
	{
		id: 1,
		name: "Nublite",
		description:
			"Nublite is a trading platform to invest with traders and earn. It is a web application that allows users to connect with traders, view their performance, and invest in their strategies. I was responsible for the front-end  admin section development, creating a user-friendly interface and integrating with the back-end API.",
		category: "Web Development",
		status: "Completed",
		start_date: "2025-03-01",
		end_date: "2025-04-01",
		technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
		milestones: [
			{
				title: "UI/UX Design",
				deadline: "2025-03-15",
				status: "Completed",
			},
			{
				title: "Front-end Development",
				deadline: "2025-04-01",
				status: "Completed",
			},
			{
				title: "Back-end Integration",
				deadline: "2025-04-15",
			},
		],
		links: [
			{
				name: "GitHub Repository",
				link: "",
			},
			{
				name: "Live Demo",
				link: "https://www.nublite.com/",
			},
		],
		images: [
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959470/nublite-1_pkhiai.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959470/nublite-2_ydsygb.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959469/nublite-3_ywkebs.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959470/nublite-4_nuug4e.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959469/nublite-5_c5asna.png",
		],
	},

	{
		id: 2,
		name: "Return Missionary Association API",
		description:
			"A RESTful API for managing missionary data, including profiles, assignments, and reports.",
		category: "Web Development",
		status: "In Progress",
		start_date: "2025-02-10",
		end_date: "2025-06-30",
		technologies: ["Node.js", "MongoDB", "Express", "mongoose"],
		milestones: [
			{
				title: "Database Design",
				deadline: "2025-03-01",
				status: "Completed",
			},
			{
				title: "API Endpoints Implementation",
				deadline: "2025-04-01",
				status: "In Progress",
			},
			{
				title: "Backend API Development",
				deadline: "2025-04-15",
				status: "In Progress",
			},
		],
		links: [
			{
				name: "GitHub Repository",
				link: "",
			},
			{
				name: "Live Demo",
				link: "",
			},
		],
		images: [
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959078/rm-api-1_fxhsxa.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959078/rm-api-2_vp06ct.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959078/rm-api-3_lrdcpc.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959077/rm-api-4_cxsb33.png",
		],
	},
	{
		id: 3,
		name: "Weather Forecast App",
		description:
			"A weather app that provides real-time weather updates and forecasts.",
		category: "Web Application",
		status: "Completed",
		start_date: "2025-01-05",
		end_date: "2025-03-15",
		technologies: [
			"ReactJs",
			"OpenWeather API",
			"Tailwind CSS",
			"Tanstack Query",
		],
		milestones: [
			{
				title: "API Integration",
				deadline: "2025-02-15",
				status: "Completed",
			},
			{
				title: "UI/UX Design",
				deadline: "2025-02-20",
				status: "Completed",
			},
			{
				title: "Testing and Debugging",
				deadline: "2025-03-01",
				status: "Completed",
			},
			{
				title: "Deployment",
				deadline: "2025-03-10",
				status: "Completed",
			},
		],
		links: [
			{
				name: "GitHub Repository",
				link: "https://github.com/Doctorzik/weather",
			},
			{
				name: "Live Demo",
				link: "",
			},
		],
		images: [
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743962608/weather_gra4sf.png",
		],
	},
	{
		id: 4,
		name: "Users API",
		description:
			"A RESTful API for managing user data, including profiles and authentication.",
		category: "Api Development",
		status: "Completed",
		start_date: "2025-01-01",
		end_date: "2025-02-01",
		technologies: ["Node.js", "Express", "MongoDB"],
		milestones: [
			{
				title: "API Design",
				deadline: "2025-01-15",
				status: "Completed",
			},
			{
				title: "User Authentication",
				deadline: "2025-01-20",
				status: "Completed",
			},
			{
				title: "API Documentation",
				deadline: "2025-01-25",
				status: "Completed",
			},
			{
				title: "Deployment",
				deadline: "2025-01-30",
				status: "Completed",
			},
		],
		links: [
			{
				name: "GitHub Repository",
				link: "",
			},
			{
				name: "Live Demo",
				link: "",
			},
		],
		images: [
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959055/users-api-1_wabpjp.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959054/users-api-2_nomcpg.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959054/users-api-3_bpged2.png",
		],
	},
	{
		id: 5,
		name: "Employee Directory",
		description:
			"A web application that allows users to view and manage employee information.",
		category: "Web Application",
		status: "Completed",
		start_date: "2025-01-01",
		end_date: "2025-02-01",
		technologies: ["React", "Node.js", "Prisma ORM", "Postgres Database"],
		milestones: [
			{
				title: "UI/UX Design",
				deadline: "2025-04-2",
				status: "Completed",
			},
			{
				title: "Front-end Development",
				deadline: "2025-04-20",
				status: "Completed",
			},
			{
				title: "Back-end Development",
				deadline: "2025-01-25",
				status: "Completed",
			},
			{
				title: "Deployment",
				deadline: "2025-01-30",
				status: "Completed",
			},
		],
		links: [
			{
				name: "GitHub Repository",
				link: "https://github.com/Doctorzik/saintajayi",
			},
			{
				name: "Live Demo",
				link: "",
			},
		],
		images: [
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959055/employee-directory-1_ayqv4d.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959055/employee-directory-2_ayqv4d.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959055/employee-directory-3_ayqv4d.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743959055/employee-directory-4_ayqv4d.png",
		],
	},
	{
		id: 6,
		name: "Countries Information",
		description:
			"A web application that provides information about countries, including population, area, and languages spoken.",
		category: "Web Application",
		status: "Completed",
		start_date: "2025-04-21",
		end_date: "2025-04-28",
		technologies: ["React", "Next.js", "Tailwind CSS", "REST API"],
		milestones: [
			{
				title: "Design UI",
				deadline: "2025-04-21",
				status: "Completed",
			},
			{
				title: "Frontend",
				deadline: "2025-04-22",
				status: "In Progress",
			},
			{
				title: "Deployment",
				deadline: "2025-04-25",
				status: "In Progress",
			},
		],
		links: [
			{
				name: "GitHub Repository",
				link: "https://github.com/Doctorzik/countries",
			},
			{
				name: "Live Demo",
				link: "https://countries-lac-mu.vercel.app/",
			},
		],
		images: [
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745873337/localhost_3000__dark_desktop_aov8rh.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745873337/localhost_3000__light_mobile_me43io.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745873337/localhost_3000__light_mobile_me43io.png",
			"https://res.cloudinary.com/dj57rvnay/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1745873337/localhost_3000__dark_mobile_sq8n9m.png",
		],
	},
];
