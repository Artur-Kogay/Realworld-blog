import type { ICustomError } from "./ICustomError";

export interface IUpdateProfileForm {
    username?: string,
    email?: string,
    image?: string | null,
    bio?: string,
    serverError?: ICustomError,
}