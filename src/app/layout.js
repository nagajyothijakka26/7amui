import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Menu } from "@/components/menu/Menu";
import { Footer } from "@/components/footer";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
      <Menu/>
      {children}
      <Footer/>
      </body>
    
    </html>
  );
}
