
'use client'

import "./globals.css";
import "./media.css";
import 'react-datepicker/dist/react-datepicker.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter, usePathname } from 'next/navigation';
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";



export default function RootLayout({ children }) {
  const noHeaderRoutes = ['/chat', '/login'];
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        {!noHeaderRoutes.includes(pathname) && <Header />}
        {children}
        <ToastContainer style={{ zIndex: 9999 }} />
        {!noHeaderRoutes.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
