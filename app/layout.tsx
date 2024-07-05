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
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
