import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function FormatDateTime(selectedDate: Date, selectedTime: string): Date {
  // Extract hours and minutes from the time string
  const timeParts = selectedTime.split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);

  // Create the combined JavaScript Date object
  const FormattedDateTime = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate(),
    hours,
    minutes
  );

  return FormattedDateTime;
}