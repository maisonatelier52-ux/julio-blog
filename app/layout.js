import { Archivo_Black } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={archivoBlack.variable}>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
