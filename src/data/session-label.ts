import type { CollectionEntry } from "astro:content";

type SessionPartnerStatus = Pick<
  CollectionEntry<"sessions">["data"],
  "hosted" | "supervised" | "partnerRequired"
>;

export function getSessionPartnerLabel(session: SessionPartnerStatus): string {
  if (session.hosted) return "Hosted · partner guaranteed";
  if (session.supervised) return "Supervised · no partner needed";
  return session.partnerRequired ? "Bring a partner" : "No partner needed";
}
