export const filteredTags = (tags: string[]) => {
    const tagCounts = tags.reduce((acc: Record<string, number>, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {})

    const sortedTags = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([name]) => name);

    return sortedTags;
} 