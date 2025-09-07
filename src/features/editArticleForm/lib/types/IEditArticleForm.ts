export type IEditArticleForm = {
    title?: string,
    description?: string,
    body?: string,
    serverError?: {
        message: string
    }
}