import { Poppins } from "next/font/google"
import "./globals.css"
import "./styles.css"
import './animations.css'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ScrollWatcher from "./Components/ScrollWatcher"
const inter = Poppins({ subsets: ["latin"] ,weight: "400"});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children } : {children : React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header/>
        <ScrollWatcher/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
