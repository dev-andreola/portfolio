import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Fira_Code, Roboto } from "next/font/google";
import "./globals.css";

const fontCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["300", "400", "500", "600", "700"],
});

const fontRoboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Vítor Andreola | vt-code",
  description: "Portifólio pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen w-screen overflow-x-hidden bg-muted antialiased",
          fontRoboto.variable,
          fontCode.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div className="flex min-h-[100dvh] flex-col justify-between">
            <Navbar />
            <div className="pt-[62px]">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
