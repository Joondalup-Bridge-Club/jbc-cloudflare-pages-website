import type { CollectionEntry } from "astro:content";

type ClubEvent = CollectionEntry<"events">["data"];

const clubTimeZone = "Australia/Perth";

function getClubDate(now: Date): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: clubTimeZone,
    year: "numeric",
  }).formatToParts(now);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function getUpcomingEvents(events: CollectionEntry<"events">[], now = new Date()): ClubEvent[] {
  const today = getClubDate(now);
  return events
    .map(({ data }) => data)
    .filter((event) => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date) || (a.time ?? "").localeCompare(b.time ?? "") || a.title.localeCompare(b.title));
}

export function formatEventDate(date: string): string {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    timeZone: clubTimeZone,
    weekday: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00Z`));
}

export function formatEventTime(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  return new Intl.DateTimeFormat("en-AU", {
    hour: "numeric",
    hour12: true,
    minute: "2-digit",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(2020, 0, 1, hours, minutes)));
}
