export const formattedTags = (str: string) => {
    if(!str.trim()) {
        return;
    }

    return str.trim().split(/\s+/).filter(tag => tag);
}