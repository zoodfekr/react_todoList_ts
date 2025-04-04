import moment from "jalali-moment";

export const convertToJalali = (date: string | Date, format: string = "jYYYY/jMM/jDD") => {
    return moment(date).locale("fa").format(format);
};
