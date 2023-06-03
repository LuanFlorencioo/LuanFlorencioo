import { Inter, Lexend } from "next/font/google";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fontLexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
})

const fonts: string = `${fontInter.variable} ${fontLexend.variable}`;

export default fonts;
