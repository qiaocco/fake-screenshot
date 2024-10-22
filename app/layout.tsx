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
        <Script defer src="https://umami.qiaocc.me/script.js"
                data-website-id="7c2c9f7e-8a72-4384-9473-9e1fffe979ad"></Script>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
