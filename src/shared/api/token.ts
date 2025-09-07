const ACCESS_TOKEN_KEY = 'token';

export const saveToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export const getToken = (): string | null => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export const removeToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
}