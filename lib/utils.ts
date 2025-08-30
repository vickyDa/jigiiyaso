import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {TimeLeft} from "@/types/time-left";

const targetDate = new Date('2025-12-31T23:59:59')

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateTimeLeft(date: Date = targetDate): TimeLeft {
  const now = new Date()
  const difference = date.getTime() - now.getTime()

  return {
    days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
    hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
    minutes: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
    seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
  }
}