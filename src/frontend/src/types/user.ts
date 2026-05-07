export interface UserProfile {
  id: string;
  nickname: string;
  state: string;
  city: string;
  branch: string;
  year: number;
  interests?: string | null;
  contact?: string | null;
  created_at?: string | null;
}

export interface Filters {
  state: string | null;
  city: string | null;
  branch: string | null;
  year: number | null;
}

export const YEAR_LABELS: Record<number, string> = {
  1: "First Year",
  2: "Second Year",
  3: "Third Year",
  4: "Fourth Year",
  5: "Fifth Year",
};

export function getYearLabel(year: number | bigint): string {
  const n = Number(year);
  return YEAR_LABELS[n] ?? `Year ${n}`;
}

export const BRANCHES = [
  "B.Tech CSE",
  "B.Tech ECE",
  "B.Tech Mechanical Engineering",
  "B.Tech Civil Engineering",
  "B.Tech Biotechnology",
  "B.Tech Electrical and Electronics Engineering",
  "BBA",
  "B.Com",
  "B.Sc",
  "BA LLB",
  "BBA LLB",
  "MBA",
  "M.Tech",
  "MCA",
  "PhD",
] as const;

export const INDIA_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
] as const;
