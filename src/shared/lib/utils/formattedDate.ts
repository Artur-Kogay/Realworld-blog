import { formatDate } from "date-fns"

export const formattedDate = (date: string | Date) => {
    return formatDate(new Date(date), 'dd MMMM yyyy')
} 