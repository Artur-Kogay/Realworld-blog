import { apiInstance } from "@/shared";
import type { ISignInForm } from "../../models/types";

export const signIn = async (formData: ISignInForm) => {
    const response = await apiInstance.post('/users/login',
        { user: formData },)
    return response;
}