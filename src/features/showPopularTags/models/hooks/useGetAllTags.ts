import { getAllTags } from "@/entitites"
import { useLoading } from "@/shared";
import { useEffect, useState } from "react";

export const useGetAllTags = () => {

    const [tags, setTags] = useState<string[]>([]);
    const { isLoading, startLoading, stopLoading } = useLoading()

    useEffect(() => {
        const fetchTags = async () => {
            startLoading();
            try {
                const result = await getAllTags();
                setTags(result.data?.tags);
            } catch (err) {
                console.error("Error getting tags", err);
            } finally {
                stopLoading();
            }
        };

        fetchTags();

    }, []);

    return { tags, isLoading }
}