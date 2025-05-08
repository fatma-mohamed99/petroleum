
import Navbar from "@/components/fixedComponents/NavBar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
           <div className="relative min-h-12 mb-10">
           <Navbar />
            </div> 

        
    
        {children}
    
    </>
  
  );
}
