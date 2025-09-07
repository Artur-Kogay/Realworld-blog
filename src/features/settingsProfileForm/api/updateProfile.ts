import { apiInstance } from "@/shared"
import type { IUpdateProfileForm } from "../models";

export const updateProfile = async (formData: IUpdateProfileForm, signal?: AbortSignal) => {
    const response = await apiInstance.put('/user', formData, { signal })
    return response;
}