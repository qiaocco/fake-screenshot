import type {Metadata} from "next";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import Script from "next/script";

export const metadata: Metadata = {
    title: "Fake Screenshot",
    description: "a fake screenshot generator",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        {children}
        <Script defer src="https://cloud.umami.is/script.js"
                data-website-id="d4a7f87d-cea3-40b2-aa7f-e44b95d13a5a"></Script>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
