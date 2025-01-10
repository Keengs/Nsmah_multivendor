// Next.js
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

//Global css
import "./globals.css";
import { ThemeProvider } from "next-themes";

//Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Metadata
export const metadata: Metadata = {
  title: "Nsmah Market",
  description: "One souq, Infinit Choices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
