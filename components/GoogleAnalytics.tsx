"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

export default function GoogleAnalytics({
	GA_MEASUREMENT_ID,
}: {
	GA_MEASUREMENT_ID?: string;
}) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;
		const query = searchParams?.toString();
		const pathWithQuery = query ? `${pathname}?${query}` : pathname;
		window.gtag("config", GA_MEASUREMENT_ID, {
			page_path: pathWithQuery,
		});
	}, [GA_MEASUREMENT_ID, pathname, searchParams]);

	if (!GA_MEASUREMENT_ID) return null;

	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `,
				}}
			/>
		</>
	);
}
