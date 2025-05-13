import { pages, suppages } from "@/consts/pages";
import ActiveLink from "./ActiveLink";

function NavLinks() {
    return (
        <div className="flex flex-col items-end gap-4 text-white  ">
            <div className="font-extralight  mono font-serif
                   text-desc-md space-x-6  md:space-x-4 "> {suppages.map((path) => (

                <ActiveLink key={path.title} targetPath={path.target}>{path.title} </ActiveLink>

            ))}  </div>

            <div className="font-medium  
                    md:text-title-md text-title-md space-x-6  md:space-x-4  "> {pages.map((path) => (

                <ActiveLink key={path.title} targetPath={path.target}>{path.title} </ActiveLink>

            ))}  </div>
        </div>
    );
}

export default NavLinks;