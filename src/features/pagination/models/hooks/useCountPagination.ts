import { useMemo } from "react"

export const useCountPagination = (totalPages: number) => {
    return useMemo(() => {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
    }, [totalPages])
}