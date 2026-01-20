"use client";

const isBrowser = typeof window !== "undefined";

export const trackEvent = (
	action: string,
	params: Record<string, string | number | boolean | undefined> = {},
) => {
	if (!isBrowser || typeof window.gtag !== "function") return;
	window.gtag("event", action, params);
};

export const trackPageView = (path: string) => {
	if (!isBrowser || typeof window.gtag !== "function") return;
	window.gtag("event", "page_view", { page_path: path });
};
