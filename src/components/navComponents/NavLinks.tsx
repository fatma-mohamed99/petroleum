import { pages } from "@/consts/pages";
import ActiveLink from "./ActiveLink";

function NavLinks() {
    return (
        <>
        {pages.map((path)=>(

            <ActiveLink key={path.title} targetPath={path.target}>{path.title} </ActiveLink>

        ))}

            
        </>
    );
}

export default NavLinks;