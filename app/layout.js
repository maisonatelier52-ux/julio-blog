import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "900"], // regular + bold
  variable: "--font-roboto-condensed",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${robotoCondensed.variable}`}>
      <body className="bg-black text-white antialiased flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}