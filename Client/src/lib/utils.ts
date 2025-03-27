import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getEnv = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
};

export function getInitials(username: string) {
  const words = username.trim().split(" ");
  if (words.length === 1) {
    // If there's only one word, return the first letter
    return words[0][0].toUpperCase();
  } else {
    // If there are multiple words, return the first letter of the first two words
    return (words[0][0] + words[1][0]).toUpperCase();
  }
}
