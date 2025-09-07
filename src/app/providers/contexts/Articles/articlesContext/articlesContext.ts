import { createContext } from "react";
import type { IArticlesContext } from "@/entitites";

export const ArticlesContext = createContext<IArticlesContext | null>(null)