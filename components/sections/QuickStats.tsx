'use client';

import { animate, motion, useInView } from "framer-motion";
import { Award, Briefcase, Code2, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
	{
		icon: Briefcase,
		value: 4,
		suffix: "+",
		label: "Years Experience",
		color: "text-blue-500",
		bgColor: "bg-blue-500/10",
	},
	{
		icon: Code2,
		value: 5,
		suffix: "+",
		label: "Projects Delivered",
		color: "text-green-500",
		bgColor: "bg-green-500/10",
	},
	{
		icon: Users,
		value: 200,
		suffix: "+",
		label: "Clients Served",
		color: "text-purple-500",
		bgColor: "bg-purple-500/10",
	},
	{
		icon: Award,
		value: 60,
		suffix: "%",
		label: "Performance Boost",
		color: "text-orange-500",
		bgColor: "bg-orange-500/10",
	},
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	useEffect(() => {
		if (!isInView) return;

		const node = ref.current;
		if (!node) return;

		// Animate from 0 to target value with easeIn (slow to fast)
		const controls = animate(0, value, {
			duration: 2.5,
			ease: [0.42, 0, 1, 1], // cubic-bezier easeIn - starts slow, ends fast
			onUpdate(latest) {
				node.textContent = Math.floor(latest).toLocaleString() + suffix;
			},
		});

		return () => controls.stop();
	}, [isInView, value, suffix]);

	return <span ref={ref}>0{suffix}</span>;
}

export default function QuickStats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Impact by Numbers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering scalable solutions with measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`${stat.bgColor} ${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6" />
                </div>

                {/* Value */}
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>

                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-2xl ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6 text-center"
        >
          <div className="p-6 rounded-lg bg-muted/50">
            <p className="text-2xl font-bold mb-2">99.7%</p>
            <p className="text-sm text-muted-foreground">Platform Uptime</p>
          </div>
          <div className="p-6 rounded-lg bg-muted/50">
            <p className="text-2xl font-bold mb-2">40%</p>
            <p className="text-sm text-muted-foreground">Cost Reduction</p>
          </div>
          <div className="p-6 rounded-lg bg-muted/50">
            <p className="text-2xl font-bold mb-2">100K+</p>
            <p className="text-sm text-muted-foreground">Records Processed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
