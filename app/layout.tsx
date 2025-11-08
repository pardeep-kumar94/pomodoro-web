import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FirebaseAnalytics from "./components/FirebaseAnalytics";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MindAnchor - Stay Focused, Accomplish More",
  description: "Boost your productivity with the Pomodoro technique and intelligent task management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
