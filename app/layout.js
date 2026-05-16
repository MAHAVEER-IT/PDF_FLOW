import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PDF Flow",
  description: "Premium file conversion for PDF, DOCX, PPT, XLSX, and images.",
  icons: {
    icon: "/icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PDF Flow",
    description: "Premium file conversion for PDF, DOCX, PPT, XLSX, and images.",
    type: "website",
    siteName: "PDF Flow",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Flow",
    description: "Premium file conversion for PDF, DOCX, PPT, XLSX, and images.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
