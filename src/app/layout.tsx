
import Footer from "@/components/fixedComponents/Footer";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
