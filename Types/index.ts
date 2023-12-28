import { IAvailableIcons } from "@/assets/icons";

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
