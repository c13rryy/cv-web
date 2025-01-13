import { TechData } from "@/Types";

export const createTechDataWithRepetitions = (arr: Array<TechData>) => [...arr, ...arr]