import {
	SiGooglecloud,
	SiGraphql,
	SiMagento,
	SiMongodb,
	SiMysql,
	SiNestjs,
	SiNextdotjs,
	SiPostgresql,
	SiReact,
	SiSpring,
	SiThreedotjs,
	SiTypescript,
	SiVuedotjs,
} from "react-icons/si";

export type Project = {
	id: string;
	title: string;
	slug: string;
	description: string;
	longDescription: string;
	image: string;
	tags: string[];
	category:
		| "E-commerce"
		| "3D Visualization"
		| "Enterprise"
		| "Healthcare"
		| "Platform"
		| "Education";
	technologies: {
		frontend: string[];
		backend: string[];
		database: string[];
		other: string[];
	};
	icons: any[];
	metrics: {
		impact: string;
		performance: string;
		scale?: string;
		uptime?: string;
	};
	features: string[];
	challenges: string[];
	results: string[];
	duration: string;
	role: string;
	company: string;
	year: string;
	featured: boolean;
	githubUrl?: string;
	liveUrl?: string;
};

export const projects: Project[] = [
	{
		id: "1",
		title: "JOH Platform",
		slug: "joh-platform",
		description:
			"AI-powered English assessment platform with automated PTE practice tests and comprehensive skill training.",
		longDescription:
			"Architected and developed a comprehensive English language assessment platform featuring automated PTE practice tests and skill-based training modules. Built as a full-stack freelance project comprising three interconnected systems: student-facing frontend, backend API with AI-powered scoring, and administrative panel for content management.",
		image: "/assets/projects/joh-platform.jpg",
		tags: [
			"Next.js 15",
			"React 19",
			"NestJS",
			"MongoDB",
			"AI/ML",
			"Education",
			"TypeScript",
		],
		category: "Education",
		technologies: {
			frontend: [
				"Next.js 15",
				"React 19",
				"TypeScript",
				"Tailwind CSS",
				"shadcn/ui",
				"React Query",
			],
			backend: ["NestJS", "Node.js", "Mongoose", "Swagger"],
			database: ["MongoDB"],
			other: [
				"Google Cloud Storage",
				"SpeechSuper API",
				"ChatGPT/Gemini",
				"NextAuth.js",
				"MediaRecorder API",
			],
		},
		icons: [
			SiNextdotjs,
			SiReact,
			SiNestjs,
			SiMongodb,
			SiGooglecloud,
			SiTypescript,
		],
		metrics: {
			impact: "4 Skills Assessment",
			performance: "Real-time AI Scoring",
			scale: "Scalable Question Bank",
		},
		features: [
			"Mock PTE test simulation with 4 skills (Reading, Listening, Writing, Speaking)",
			"Auto-submit timers and real-time audio recording with MediaRecorder API",
			"AI-powered scoring using SpeechSuper API and LLM (ChatGPT/Gemini)",
			"React Query for efficient data fetching and caching",
			"NextAuth.js JWT-based authentication with auto token refresh",
			"Custom AudioRecorder with preparation countdown and duration controls",
			"Admin panel for question management with advanced filtering",
			"Google Cloud Storage for audio/media asset management",
			"Comprehensive API documentation with Swagger",
			"Domain-driven architecture with MockTestContext and GlobalModalContext",
		],
		challenges: [
			"Implementing real-time audio recording with auto-start/stop functionality",
			"Integrating multiple AI services (SpeechSuper, ChatGPT, Gemini) for scoring",
			"Managing complex test state across Reading, Listening, Writing, Speaking",
			"Optimizing API response times with React Query caching strategies",
			"Building scalable admin interface for large question banks",
			"Handling audio file uploads and streaming from Google Cloud Storage",
		],
		results: [
			"Reduced API response times through strategic React Query invalidation patterns",
			"Implemented real-time audio recording with seamless preparation/recording transitions",
			"Developed AI scoring pipeline processing essays and speaking responses",
			"Created scalable admin interface managing question banks with efficient filtering",
			"Established secure authentication flow with automatic token refresh",
			"Optimized media delivery for smooth audio playback in practice sessions",
		],
		duration: "May 2025 - Present",
		role: "Fullstack Developer (Freelance)",
		company: "JOH Education",
		year: "2025",
		featured: true,
	},
	{
		id: "2",
		title: "Synode.ai",
		slug: "synode-ai",
		description:
			"3D Assembly Guide Platform serving manufacturing clients across North America with interactive step-by-step instructions.",
		longDescription:
			"Architected flagship 3D product assembly guide system serving manufacturing clients across North America. Built sophisticated 3D model rendering capable of handling complex geometries with thousands of vertices while maintaining 60fps performance. Implemented mesh simplification and progressive loading techniques.",
		image: "/assets/projects/synode.jpg",
		tags: [
			"Nuxt.js",
			"Three.js",
			"NestJS",
			"Vue.js",
			"GCP",
			"3D Graphics",
			"PWA",
		],
		category: "3D Visualization",
		technologies: {
			frontend: ["Nuxt.js", "Vue.js", "Vuetify", "Three.js"],
			backend: ["NestJS", "Node.js"],
			database: ["PostgreSQL", "MongoDB"],
			other: ["Google Cloud Platform", "Text-to-Speech API", "WebGL"],
		},
		icons: [SiVuedotjs, SiThreedotjs, SiNestjs, SiGooglecloud],
		metrics: {
			impact: "200+ facilities",
			performance: "60% faster load time",
			scale: "50MB+ 3D models",
			uptime: "99.5%",
		},
		features: [
			"Real-time 3D model rendering with up to 50MB file sizes",
			"Interactive step-by-step assembly instructions",
			"Text-to-speech integration for accessibility",
			"Customizable lighting, camera angles, and animation speeds",
			"Progressive loading and mesh simplification",
			"Multi-language support",
			"Responsive design for desktop and tablet",
		],
		challenges: [
			"Optimizing 3D model loading for large files (50MB+)",
			"Maintaining 60fps performance with complex geometries",
			"Cross-browser WebGL compatibility",
			"Real-time synchronization between multiple users",
		],
		results: [
			"Reduced initial load time by 60% through optimization",
			"Serving manufacturing clients across North America",
			"Improved assembly time efficiency by 40%",
			"Enhanced accessibility with text-to-speech features",
		],
		duration: "September 2021 - April 2024",
		role: "Fullstack Developer",
		company: "Plogg Co. Ltd",
		year: "2021-2024",
		featured: true,
		liveUrl: "https://synode.ai",
	},
	{
		id: "3",
		title: "Bipedortho",
		slug: "bipedortho",
		description:
			"Medical e-commerce platform with 3D product visualization serving 200+ hospitals across Canada.",
		longDescription:
			"Designed and implemented comprehensive e-commerce platform serving more than 200 hospitals and medical facilities throughout Canada. Developed high-performance frontend featuring 3D product visualization allowing customers to examine medical equipment from multiple angles before purchase.",
		image: "/assets/projects/bipedortho.jpg",
		tags: [
			"Nuxt.js",
			"Three.js",
			"NestJS",
			"E-commerce",
			"Healthcare",
			"GCP",
		],
		category: "Healthcare",
		technologies: {
			frontend: ["Nuxt.js", "Vue.js", "Vuetify", "Three.js"],
			backend: ["NestJS", "Node.js"],
			database: ["MySQL", "PostgreSQL"],
			other: [
				"Google Cloud Platform",
				"Payment Gateway",
				"Email Service",
			],
		},
		icons: [SiVuedotjs, SiThreedotjs, SiNestjs, SiGooglecloud],
		metrics: {
			impact: "200+ hospitals",
			performance: "99.7% uptime",
			scale: "Thousands of daily transactions",
		},
		features: [
			"3D product visualization for medical equipment",
			"Multi-angle product examination before purchase",
			"Secure payment processing",
			"Order tracking and management",
			"Hospital-specific pricing and catalogs",
			"Automated inventory management",
			"Real-time order notifications",
		],
		challenges: [
			"Handling thousands of daily transactions reliably",
			"Managing complex hospital procurement workflows",
			"Ensuring 99.7%+ platform uptime",
			"Optimizing 3D rendering for medical equipment models",
			"Implementing hospital-specific pricing logic",
		],
		results: [
			"Achieved 99.7% uptime over 12-month period",
			"Serving 200+ medical facilities across Canada",
			"Processing thousands of transactions monthly",
			"Reduced procurement cycle time by 35%",
			"Improved customer satisfaction scores by 40%",
		],
		duration: "September 2021 - April 2024",
		role: "Fullstack Developer",
		company: "Plogg Co. Ltd",
		year: "2021-2024",
		featured: true,
	},
	{
		id: "4",
		title: "Boostech",
		slug: "boostech",
		description:
			"Enterprise procurement system with advanced material management and automated quotation workflows.",
		longDescription:
			"Architected complete material management and procurement platform from initial concept through production deployment. Led database design by creating detailed entity-relationship diagrams and defining schemas for warehouse management, procurement requests, and material requisition workflows.",
		image: "/assets/projects/boostech.jpg",
		tags: ["Next.js", "Spring Boot", "PostgreSQL", "Enterprise", "Java"],
		category: "Enterprise",
		technologies: {
			frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
			backend: ["Java Spring Boot", "Spring Framework"],
			database: ["PostgreSQL"],
			other: ["Docker", "Redis", "Microservices"],
		},
		icons: [SiNextdotjs, SiSpring, SiPostgresql],
		metrics: {
			impact: "100K+ records",
			performance: "60% query optimization",
			scale: "Multi-location inventory",
		},
		features: [
			"Material management and warehouse tracking",
			"Automated quotation workflows",
			"Multi-location inventory management",
			"Approval hierarchies and workflows",
			"Buyer-seller matching system",
			"Real-time inventory updates",
			"Advanced search and filtering",
			"Comprehensive reporting and analytics",
		],
		challenges: [
			"Optimizing queries for 100K+ material records",
			"Designing scalable database architecture",
			"Implementing complex approval hierarchies",
			"Real-time inventory synchronization across locations",
			"Load testing with large datasets",
		],
		results: [
			"Reduced average query time from 850ms to 340ms (60% improvement)",
			"Handled 100K+ records efficiently",
			"Reduced procurement cycle time by 30%",
			"Improved team velocity by 25% through documentation",
			"Successfully deployed to production with zero downtime",
		],
		duration: "June 2024 - March 2025",
		role: "Fullstack Developer",
		company: "Boostech",
		year: "2024-2025",
		featured: true,
	},
	{
		id: "5",
		title: "Kidsplaza",
		slug: "kidsplaza",
		description:
			"E-commerce modernization with API migration from Magento 2 to NestJS microservices.",
		longDescription:
			"Led critical API migration initiative to modernize e-commerce infrastructure serving thousands of daily users. Analyzed existing Magento 2 architecture, identified performance bottlenecks, and architected replacement services using NestJS to reduce server load and improve response times by 35%.",
		image: "/assets/projects/kidsplaza.jpg",
		tags: ["Next.js", "NestJS", "GraphQL", "Migration", "E-commerce"],
		category: "E-commerce",
		technologies: {
			frontend: ["Next.js", "React", "TypeScript"],
			backend: ["NestJS", "Node.js", "GraphQL"],
			database: ["MySQL", "PostgreSQL", "MongoDB"],
			other: ["Magento 2", "Microservices", "API Gateway"],
		},
		icons: [SiNextdotjs, SiNestjs, SiGraphql, SiMagento],
		metrics: {
			impact: "Thousands of users",
			performance: "35% faster APIs",
			scale: "3 legacy databases",
		},
		features: [
			"API migration from Magento 2 to NestJS",
			"Extended GraphQL gateway with 12+ new resolvers",
			"Promotional campaign management",
			"Customer engagement features",
			"Automated data validation workflows",
			"Backward compatibility with legacy systems",
			"Zero-downtime deployment strategy",
		],
		challenges: [
			"Migrating from monolithic Magento 2 to microservices",
			"Maintaining backward compatibility during migration",
			"Data integrity across 3 separate legacy databases",
			"Zero-downtime deployment requirements",
			"Complex data relationship mapping",
		],
		results: [
			"Improved API response times by 35%",
			"Successfully migrated critical customer modules",
			"Zero downtime during deployment",
			"Extended GraphQL with 12 new endpoints",
			"Prevented data synchronization errors through automation",
			"Reduced server load during peak traffic",
		],
		duration: "March 2025 - August 2025",
		role: "Fullstack Developer",
		company: "Kidsplaza",
		year: "2025",
		featured: true,
	},
	{
		id: "6",
		title: "Rely Platform",
		slug: "rely-platform",
		description:
			"Microservices platform supporting Plogg.ca operations with efficient database schemas.",
		longDescription:
			"Developed microservices for the Rely platform supporting Plogg.ca operations. Designed efficient MongoDB and MySQL database schemas that optimized data retrieval patterns. Created RESTful services following industry best practices for error handling, authentication, and rate limiting.",
		image: "/assets/projects/rely.jpg",
		tags: ["Microservices", "MongoDB", "MySQL", "NestJS", "REST API"],
		category: "Platform",
		technologies: {
			frontend: ["Vue.js", "Nuxt.js"],
			backend: ["NestJS", "Node.js"],
			database: ["MongoDB", "MySQL"],
			other: ["Redis", "Docker", "Google Cloud Platform"],
		},
		icons: [SiNestjs, SiMongodb, SiMysql, SiGooglecloud],
		metrics: {
			impact: "Multi-service architecture",
			performance: "Optimized retrieval",
			scale: "Horizontal scaling",
		},
		features: [
			"RESTful API design",
			"Microservices architecture",
			"Optimized database schemas",
			"Error handling and logging",
			"Authentication and authorization",
			"Rate limiting and throttling",
			"API documentation",
		],
		challenges: [
			"Designing efficient database schemas",
			"Optimizing data retrieval patterns",
			"Implementing proper error handling",
			"Service-to-service communication",
		],
		results: [
			"Built scalable microservices architecture",
			"Optimized database queries",
			"Implemented industry-standard security practices",
			"Supported Plogg.ca operations efficiently",
		],
		duration: "September 2021 - April 2024",
		role: "Fullstack Developer",
		company: "Plogg Co. Ltd",
		year: "2021-2024",
		featured: false,
	},
];

export const categories = [
	"All",
	"E-commerce",
	"3D Visualization",
	"Enterprise",
	"Healthcare",
	"Platform",
	"Education",
] as const;

export const technologies = [
	"All",
	"Next.js",
	"Nuxt.js",
	"Vue.js",
	"React",
	"NestJS",
	"Spring Boot",
	"Three.js",
	"PostgreSQL",
	"MongoDB",
	"MySQL",
	"GraphQL",
	"TypeScript",
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
	return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
	if (category === "All") return projects;
	return projects.filter((p) => p.category === category);
}

export function getProjectsByTechnology(technology: string): Project[] {
	if (technology === "All") return projects;
	return projects.filter(
		(p) =>
			p.tags.includes(technology) ||
			Object.values(p.technologies).flat().includes(technology)
	);
}
