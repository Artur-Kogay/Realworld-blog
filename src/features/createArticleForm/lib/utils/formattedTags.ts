export const formattedTags = (str: string | string[]) => {
    if (Array.isArray(str)) return

    if (!str.trim()) {
        return;
    }

    return str.trim().split(/\s+/).filter(tag => tag);
}