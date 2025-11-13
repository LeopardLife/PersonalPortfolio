'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import {
	CheckCircle2,
	Clock,
	Github,
	Loader2,
	Mail,
	MapPin,
	MessageSquare,
	Phone,
	Send,
} from "lucide-react";
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
		<section id="contact" className="py-20 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
			<div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
			<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						viewport={{ once: true }}
						transition={{
							delay: 0.2,
							type: "spring",
							stiffness: 200,
						}}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
					>
						<Send className="w-4 h-4 text-primary" />
						<span className="text-sm font-semibold text-primary">
							Get In Touch
						</span>
					</motion.div>

					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Let's Build Something{" "}
						<span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
							Amazing
						</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						Whether you have a project in mind, need technical
						expertise, or just want to say hello, I'm always excited
						to connect with fellow developers and potential clients.
					</p>
				</motion.div>

				{/* Why Contact Me Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="grid md:grid-cols-2 gap-6 mb-12"
				>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<Card className="border-2 hover:border-primary/50 transition-all h-full">
							<CardContent className="p-6 flex items-start gap-4">
								<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
									<MessageSquare className="w-6 h-6 text-blue-500" />
								</div>
								<div>
									<h3 className="font-bold text-lg mb-2">
										Project Discussion
									</h3>
									<p className="text-muted-foreground text-sm">
										Have an exciting project? Let's discuss
										how I can help bring your ideas to life
										with modern technology.
									</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
					>
						<Card className="border-2 hover:border-primary/50 transition-all h-full">
							<CardContent className="p-6 flex items-start gap-4">
								<div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
									<Clock className="w-6 h-6 text-green-500" />
								</div>
								<div>
									<h3 className="font-bold text-lg mb-2">
										Quick Response
									</h3>
									<p className="text-muted-foreground text-sm">
										I typically respond within 24 hours.
										Your time is valuable, and I respect
										that.
									</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>

				{/* Main Content Grid */}
				<div className="grid lg:grid-cols-5 gap-8">
					{/* Contact Information - 2 columns */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="lg:col-span-2"
					>
						<Card className="glass border-2 h-full">
							<CardContent className="pt-6">
								<h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
									<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
										<Mail className="h-5 w-5 text-white" />
									</div>
									Contact Information
								</h3>

								<div className="space-y-6">
									{/* Email */}
									<motion.a
										href="mailto:thuandevelop@gmail.com"
										whileHover={{ x: 4 }}
										className="flex items-start gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all group"
									>
										<div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
											<Mail className="h-6 w-6 text-blue-500" />
										</div>
										<div>
											<p className="text-sm text-muted-foreground mb-1">
												Email
											</p>
											<p className="font-semibold text-foreground">
												thuandevelop@gmail.com
											</p>
										</div>
									</motion.a>

									{/* GitHub */}
									<motion.a
										href="https://github.com/thuanpham113"
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ x: 4 }}
										className="flex items-start gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all group"
									>
										<div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
											<Github className="h-6 w-6 text-purple-500" />
										</div>
										<div>
											<p className="text-sm text-muted-foreground mb-1">
												GitHub
											</p>
											<p className="font-semibold text-foreground">
												github.com/thuanpham113
											</p>
										</div>
									</motion.a>

									{/* Phone */}
									<motion.a
										href="tel:+84909275913"
										whileHover={{ x: 4 }}
										className="flex items-start gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:border-green-500/50 transition-all group"
									>
										<div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
											<Phone className="h-6 w-6 text-green-500" />
										</div>
										<div>
											<p className="text-sm text-muted-foreground mb-1">
												Phone
											</p>
											<p className="font-semibold text-foreground">
												(+84) 0909275913
											</p>
										</div>
									</motion.a>

									{/* Location */}
									<div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
										<div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
											<MapPin className="h-6 w-6 text-red-500" />
										</div>
										<div>
											<p className="text-sm text-muted-foreground mb-1">
												Location
											</p>
											<p className="font-semibold text-foreground">
												Ho Chi Minh City, Vietnam
											</p>
										</div>
									</div>
								</div>

								{/* Trust Signals */}
								<div className="mt-8 pt-6 border-t border-border">
									<h4 className="font-semibold mb-4">
										What to Expect
									</h4>
									<div className="space-y-3">
										<div className="flex items-start gap-3">
											<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
											<p className="text-sm text-muted-foreground">
												Professional and friendly
												communication
											</p>
										</div>
										<div className="flex items-start gap-3">
											<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
											<p className="text-sm text-muted-foreground">
												Clear project timelines and
												deliverables
											</p>
										</div>
										<div className="flex items-start gap-3">
											<CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
											<p className="text-sm text-muted-foreground">
												Transparent pricing and honest
												feedback
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Contact Form - 3 columns */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="lg:col-span-3"
					>
						<Card className="glass border-2 h-full">
							<CardContent className="pt-6">
								<h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
									<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
										<Send className="h-5 w-5 text-white" />
									</div>
									Send a Message
								</h3>

								<form
									onSubmit={handleSubmit(onSubmit)}
									className="space-y-6"
								>
									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<label className="text-sm font-medium mb-2 block">
												Your Name{" "}
												<span className="text-red-500">
													*
												</span>
											</label>
											<Input
												placeholder="John Doe"
												{...register("name", {
													required:
														"Name is required",
													minLength: {
														value: 2,
														message:
															"Name must be at least 2 characters",
													},
												})}
												className={`${
													errors.name
														? "border-red-500"
														: ""
												} h-12`}
											/>
											{errors.name && (
												<p className="text-sm text-red-500 mt-1">
													{
														errors.name
															.message as string
													}
												</p>
											)}
										</div>
										<div>
											<label className="text-sm font-medium mb-2 block">
												Your Email{" "}
												<span className="text-red-500">
													*
												</span>
											</label>
											<Input
												type="email"
												placeholder="john@example.com"
												{...register("email", {
													required:
														"Email is required",
													pattern: {
														value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
														message:
															"Invalid email address",
													},
												})}
												className={`${
													errors.email
														? "border-red-500"
														: ""
												} h-12`}
											/>
											{errors.email && (
												<p className="text-sm text-red-500 mt-1">
													{
														errors.email
															.message as string
													}
												</p>
											)}
										</div>
									</div>

									<div>
										<label className="text-sm font-medium mb-2 block">
											Subject{" "}
											<span className="text-muted-foreground text-xs">
												(Optional)
											</span>
										</label>
										<Input
											placeholder="Project inquiry, collaboration, etc."
											{...register("subject")}
											className="h-12"
										/>
									</div>

									<div>
										<label className="text-sm font-medium mb-2 block">
											Your Message{" "}
											<span className="text-red-500">
												*
											</span>
										</label>
										<Textarea
											placeholder="Tell me about your project, ideas, or just say hello! I'm all ears 👂"
											className={`min-h-[180px] resize-none ${
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
										<p className="text-xs text-muted-foreground mt-2">
											Feel free to include project
											details, budget, timelines, or any
											questions you have.
										</p>
									</div>

									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<Button
											type="submit"
											className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90"
											disabled={isSubmitting}
										>
											{isSubmitting ? (
												<>
													<Loader2 className="mr-2 h-5 w-5 animate-spin" />
													Sending your message...
												</>
											) : (
												<>
													<Send className="mr-2 h-5 w-5" />
													Send Message
												</>
											)}
										</Button>
									</motion.div>

									<p className="text-center text-sm text-muted-foreground">
										By sending a message, you agree to be
										contacted via email or phone.
									</p>
								</form>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
