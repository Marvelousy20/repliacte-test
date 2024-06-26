import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });
import { PredictionProvider } from "@/context/prediction";

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
      <PredictionProvider>
        <body className={`${inter.className} py-4 lg:py-10 max-w-8xl mx-auto`}>
          <MantineProvider>{children}</MantineProvider>
        </body>
      </PredictionProvider>
    </html>
  );
}
