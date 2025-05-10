import { StaticImageData } from "next/image";

export interface Project {
  id:string;
  title: string;
  image: StaticImageData;
  shortDesc: string;
  duration: string;
  location: string;
  longDesc: string;
  points: string[];
}
