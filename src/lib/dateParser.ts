import dayjs from "dayjs"
import "dayjs/locale/fr"

dayjs.locale("fr");

/**
 * 
 * @param rawDate 
 */
export const dateParser = (rawDate: Date) => {
    const date = dayjs(rawDate)
    return date.format("DD/MM/YYYY à HH[h]mm");
}