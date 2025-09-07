import { apiInstance } from "@/shared"
import type { IUpdateProfileForm } from "../models";

export const updateProfile = async (formData: IUpdateProfileForm) => {
    const response = await apiInstance.put('/user', formData)
    return response;
}