import type { ICustomError } from "./ICustomError";

export interface ICreateArticleForm {
    title: string,
    description: string,
    body: string,
    tagList: string | string[],
    serverError?: ICustomError
}