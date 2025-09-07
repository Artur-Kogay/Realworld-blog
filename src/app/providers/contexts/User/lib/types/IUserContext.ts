import type { SetStateAction } from "react";
import type { IUser } from "@/entitites";

export interface IUserContext {
    user: IUser | null,
    setUser: React.Dispatch<SetStateAction<IUser | null>>
}