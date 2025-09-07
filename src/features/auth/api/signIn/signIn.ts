import { apiInstance } from "@/shared";
import type { ISignInForm } from "../../models/types";

export const signIn = async (formData: ISignInForm, signal?: AbortSignal) => {
    const response = await apiInstance.post('/users/login',
        { user: formData },
        { signal });
    return response;
}