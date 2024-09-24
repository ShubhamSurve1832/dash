
'use client' 

import "./globals.css";
import 'react-datepicker/dist/react-datepicker.css'
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
