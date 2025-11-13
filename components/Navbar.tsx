'use client';

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Projects", href: "/projects" },
	{ name: "Experience", href: "/experience" },
	{ name: "Skills", href: "/skills" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [isDark, setIsDark] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const isDarkMode = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		setIsDark(isDarkMode);
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleTheme = () => {
		setIsDark(!isDark);
		document.documentElement.classList.toggle("dark");
	};

	const isActive = (href: string) => {
		return pathname === href;
	};

	return (
		<nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link
						href="/"
						className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
					>
						Phạm Nguyễn Thuận
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
									isActive(item.href)
										? "bg-primary text-primary-foreground"
										: "text-foreground/80 hover:text-foreground hover:bg-muted"
								}`}
							>
								{item.name}
							</Link>
						))}
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							className="ml-4"
							aria-label="Toggle theme"
						>
							{isDark ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)}
						</Button>
					</div>

					{/* Mobile Navigation */}
					<div className="flex md:hidden items-center gap-2">
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							aria-label="Toggle theme"
						>
							{isDark ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)}
						</Button>

						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									aria-label="Open menu"
								>
									<Menu className="h-6 w-6" />
								</Button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="w-[300px] sm:w-[400px]"
							>
								<div className="flex flex-col space-y-4 mt-8">
									<div className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
										Navigation
									</div>
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											onClick={() => setIsOpen(false)}
											className={`px-4 py-3 rounded-md text-base font-medium transition-all ${
												isActive(item.href)
													? "bg-primary text-primary-foreground"
													: "text-foreground/80 hover:text-foreground hover:bg-muted"
											}`}
										>
											{item.name}
										</Link>
									))}
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
}