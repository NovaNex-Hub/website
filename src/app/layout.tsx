import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Providers } from "./providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovaNex",
  description: "Rentable NFT Market place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-screen">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="relative flex flex-col min-h-screen w-screen">
              <NavBar />
              <div className="flex-grow flex-1">{children}</div>
              
            </main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}