"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function ActiveLink({
  targetPath,
  children,
  onClickFun = undefined
}: {
  targetPath: string;
  children: ReactNode;
  onClickFun?: () => void
}) {
  const currentPath = usePathname();
  const isActiveLink = currentPath === targetPath;

  return (
    <Link
      href={targetPath}
      onClick={onClickFun}
      className={`
        px-1 py-1 text-nowrap
        p-4  
       border-b-2 border-transparent hover:border-secondary 
      transition-all 
      duration-300
        z-30   
       
        font-bold   
        
         ${isActiveLink &&
        "font-bold  border-b-2  border-Text  scale-y-110   "
        } `}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
