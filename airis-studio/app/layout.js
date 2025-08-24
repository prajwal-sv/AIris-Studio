import { Geist, Geist_Mono,Inter} from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const inter =  Inter({subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600', '700']})

export const metadata = {
  title: "AIris-Studio",
  description: "AIris Studio is a cutting-edge photo editing platform powered by advanced artificial intelligence, designed to transform your images with effortless precision and artistic flair. Inspired by the human iris—the gateway to vision—and AI technology, AIris Studio brings clarity, creativity, and control to every pixel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${inter.className}`}>


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
