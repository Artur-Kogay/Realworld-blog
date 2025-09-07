import type { ICustomError } from "./customError";

export interface ISignUpForm {
    username: string,
    email: string,
    password: string,
    repeatPassword: string,
    serverError?: ICustomError,
    checkbox: boolean
}

