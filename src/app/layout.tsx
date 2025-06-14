import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import {SpeedInsights} from "@vercel/speed-insights/next"
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${poppins.variable} ${poppins.variable} antialiased`}
        >
        {children}
        <SpeedInsights />
        </body>
        </html>
    );
}
