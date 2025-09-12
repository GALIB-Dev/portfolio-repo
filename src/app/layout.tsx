import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOHAMMAD AL GALIB",
  description: "STUDENT | TECH ENTHUSIAST | BANGLADESH",
};
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`(function(){try{var ls=localStorage.getItem('theme');var mql=window.matchMedia('(prefers-color-scheme: dark)');var theme=ls?ls:(mql.matches?'dark':'light');var root=document.documentElement;if(theme==='dark')root.classList.add('dark');else root.classList.remove('dark');}catch(e){}})();`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-theme=""
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
