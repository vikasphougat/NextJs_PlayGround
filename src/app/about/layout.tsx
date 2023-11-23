import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
// import Head from "next/head";
// import Head from "./useMetaApiNotHead";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "about page",
  description: "Generated by create next app",
};
("Good to know: You should not manually add <head> tags such as <title> and <meta> to root layouts. Instead, you should use the Metadata API which automatically handles advanced requirements such as streaming and de-duplicating <head> elements.");

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div> {children}</div>;
}
