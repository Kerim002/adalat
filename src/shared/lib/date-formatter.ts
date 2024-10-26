import { format } from "date-fns";

export const dateFormatter = (date?: string, time?: boolean) => {
  if (!date) {
    return "";
  }

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "";
  }

  return format(parsedDate, `dd.MM.yyyy ${time && "hh:mm"}`);
};
