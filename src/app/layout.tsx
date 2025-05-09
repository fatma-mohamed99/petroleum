
import Footer from "@/components/fixedComponents/Footer";
import "./globals.css";

export const metadata = {
  title: 'Unico petroleum',
  // description: '',
  icons: {
    icon: '/logo.jpg',
  }
}
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlex.className}>

      
        {children}
        <Footer />
      </body>
    </html>
  );
}
