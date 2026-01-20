import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

const GA_MEASUREMENT_ID =
	process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-MD5VW1NBQM";

export const metadata: Metadata = {
	title: "Phạm Nguyễn Thuận - Fullstack Developer",
	description:
		"Fullstack Developer specializing in 3D Web Applications with Next.js, React, and Three.js",
};

import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
				<Providers>
					<Navbar />
					{children}
					<Footer />
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
