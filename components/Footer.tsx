'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 md:px-6 py-8 md:py-12 mx-auto">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className="text-sm font-medium leading-none">
                            &copy; {currentYear} Phạm Nguyễn Thuận
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Built with Next.js, Tailwind CSS, and 3D Magic
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="https://github.com/thuanpham113"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-muted transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link
                            href="mailto:thuandevelop@gmail.com"
                            className="p-2 rounded-full hover:bg-muted transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
