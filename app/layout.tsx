import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E2C Chatbot",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-lvh">
          <Header />
          <div className="flex h-full">
            <Sidebar />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
