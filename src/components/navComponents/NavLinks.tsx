import { pages, suppages } from "@/consts/pages";
import ActiveLink from "./ActiveLink";

function NavLinks() {
    return (
        <div className="flex flex-col items-end gap-4 text-main  ">
            <div className="font-extralight text-secondary font-serif
                   text-desc-md space-x-6  md:space-x-4 text-shadow-main text-shadow-sm  "> {suppages.map((path) => (

                <ActiveLink key={path.title} targetPath={path.target}>{path.title} </ActiveLink>

            ))}  </div>

            <div className="
               lg:text-header-md  md:text-header-sm   text-header-md space-x-6  md:space-x-4 text-shadow-secondary text-shadow-2xs  "> {pages.map((path) => (

                <ActiveLink key={path.title} targetPath={path.target}>{path.title} </ActiveLink>

            ))}  </div>
        </div>
    );
}

export default NavLinks;