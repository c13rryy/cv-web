import { IAvailableIcons } from "@/assets/icons";
import { StaticImageData } from "next/image";

export interface DataArray {
  text: string;
}

export interface LinksData {
  icon?: IAvailableIcons;
  value?: string;
  href: string;
}

export interface TechData {
  icon: IAvailableIcons;
  title: string;
}

export interface FeatureProps {
  name: string;
  description: string;
  img: string | StaticImageData;
}

export interface Achivment {
  title: string;
  description: string;
}
