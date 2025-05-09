
import Footer from "@/components/fixedComponents/Footer";
import "./globals.css";

export const metadata = {
  title: 'Unico petroleum',
  // description: '',
  icons: {
    icon: '/logo.jpg',
  }
}

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
        <Footer />
      </body>
    </html>
  );
}
