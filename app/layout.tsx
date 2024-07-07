import type {Metadata} from "next";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"

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
                data-website-id="46062f16-3795-40e6-8cf9-b42669d88054"></Script>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
