import { createContext } from "react";
import type { IUserContext } from "../lib/types";


export const UserContext = createContext<IUserContext | null>(null)