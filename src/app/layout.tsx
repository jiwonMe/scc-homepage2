import React from "react";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Nonprofit Startup",
  description: "Making Change Happen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col w-full">
        <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}