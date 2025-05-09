
import Navbar from "@/components/fixedComponents/NavBar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>    
       <div className="relative min-h-8 mb-5">
           <Navbar />
       </div>     
        {children}
    
    </>
  
  );
}
