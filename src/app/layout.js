import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammad Farhad",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></Script>
      <Script type="text/javascript" src="../utils/emailjsInit.js"></Script>

      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
