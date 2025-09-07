import { apiInstance } from "@/shared";
import type { ISignUpForm } from "../../models/types";

export const signUp = async (formData: ISignUpForm) => {
    const response = await apiInstance.post('/users',
        { user: formData },);
    return response;
}