import Link from "next/link";
import { Kurale, Baloo_Bhaina_2 } from "@next/font/google";

import "../styles/globals.css";

const berkshireSwash = Kurale({
  weight: "400",
  variable: "--serif-font",
  display: "swap",
});

const inter = Baloo_Bhaina_2({
  variable: "--sans-font",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${berkshireSwash.variable} ${inter.variable} bg-stone-50 text-stone-700`}>
      <body className="min-h-screen flex flex-col items-center mx-4 sm:mx-8 lg:mx-10">
        <div className="w-full max-w-3xl py-4">
          <div className="flex justify-between">
            <div className="font-serif text-lg">salamfirst</div>
            <nav style={{ display: "flex", gap: "1rem" }}>
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </div>
        </div>
        <div className="w-full max-w-3xl flex-1 prose lg:prose-lg prose-headings:text-stone-800">{children}</div>
      </body>
    </html>
  );
}
