import type { ICustomError } from "./customError";

export interface ISignInForm {
    email: string,
    password: string,
    serverError?: ICustomError,
}