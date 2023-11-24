import type { Metadata } from "next";
import { poppins } from "@/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "Gweiland",
	description: "Gweiland take away project by Sai Krishna Das",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
