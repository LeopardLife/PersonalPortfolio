'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Github, Loader2, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = async (data: any) => {
		setIsSubmitting(true);
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (response.ok) {
				toast({
					title: "Message sent! 🎉",
					description:
						"Thank you for reaching out. I'll get back to you soon.",
				});
				reset();
			} else {
				throw new Error(result.error || "Failed to send message");
			}
		} catch (error) {
			console.error("Contact form error:", error);
			toast({
				title: "Error",
				description: "Something went wrong. Please try again later.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-bold mb-12 text-center">
						Let's Connect!
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						<Card>
							<CardContent className="pt-6">
								<h3 className="text-xl font-semibold mb-6">
									Contact Information
								</h3>
								<div className="space-y-4">
									<a
										href="mailto:thuandevelop@gmail.com"
										className="flex items-center space-x-3 text-muted-foreground hover:text-foreground"
									>
										<Mail className="h-5 w-5" />
										<span>thuandevelop@gmail.com</span>
									</a>
									<a
										href="https://github.com/thuanpham113"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-3 text-muted-foreground hover:text-foreground"
									>
										<Github className="h-5 w-5" />
										<span>github.com/thuanpham113</span>
									</a>
									<div className="flex items-center space-x-3 text-muted-foreground">
										<Phone className="h-5 w-5" />
										<span>(+84) 0909275913</span>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardContent className="pt-6">
								<form
									onSubmit={handleSubmit(onSubmit)}
									className="space-y-4"
								>
									<div>
										<Input
											placeholder="Your Name"
											{...register("name", {
												required: "Name is required",
												minLength: {
													value: 2,
													message:
														"Name must be at least 2 characters",
												},
											})}
											className={
												errors.name
													? "border-red-500"
													: ""
											}
										/>
										{errors.name && (
											<p className="text-sm text-red-500 mt-1">
												{errors.name.message as string}
											</p>
										)}
									</div>
									<div>
										<Input
											type="email"
											placeholder="Your Email"
											{...register("email", {
												required: "Email is required",
												pattern: {
													value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
													message:
														"Invalid email address",
												},
											})}
											className={
												errors.email
													? "border-red-500"
													: ""
											}
										/>
										{errors.email && (
											<p className="text-sm text-red-500 mt-1">
												{errors.email.message as string}
											</p>
										)}
									</div>
									<div>
										<Textarea
											placeholder="Your Message"
											className={`min-h-[150px] ${
												errors.message
													? "border-red-500"
													: ""
											}`}
											{...register("message", {
												required: "Message is required",
												minLength: {
													value: 10,
													message:
														"Message must be at least 10 characters",
												},
											})}
										/>
										{errors.message && (
											<p className="text-sm text-red-500 mt-1">
												{
													errors.message
														.message as string
												}
											</p>
										)}
									</div>
									<Button
										type="submit"
										className="w-full"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<>
												<Loader2 className="mr-2 h-4 w-4 animate-spin" />
												Sending...
											</>
										) : (
											"Send Message"
										)}
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
