import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getExperience(startDate: Date) {
  const now = new Date();

  let months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  months %= 12;

  if (years > 0 && months > 0) {
    return `${years} yr${years > 1 ? "s" : ""} ${months} mo${
      months > 1 ? "s" : ""
    }`;
  }

  if (years > 0) {
    return `${years} yr${years > 1 ? "s" : ""}`;
  }

  return `${months} mo${months > 1 ? "s" : ""}`;
}
