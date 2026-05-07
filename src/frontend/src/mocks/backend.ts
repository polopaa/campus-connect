import type { backendInterface, UserProfile, ProfileResult } from "../backend";

const sampleUsers: UserProfile[] = [
  {
    id: "user-1",
    nickname: "Arjun Sharma",
    state: "Maharashtra",
    city: "Mumbai",
    branch: "Computer Science",
    year: BigInt(2),
    interests: "Coding, Chess, Hiking",
    contact: undefined,
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 24 * 2),
  },
  {
    id: "user-2",
    nickname: "Priya Patel",
    state: "Gujarat",
    city: "Ahmedabad",
    branch: "Mechanical Engineering",
    year: BigInt(3),
    interests: "Photography, Music, Badminton",
    contact: undefined,
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 24 * 5),
  },
  {
    id: "user-3",
    nickname: "Rahul Verma",
    state: "Maharashtra",
    city: "Pune",
    branch: "Electronics",
    year: BigInt(1),
    interests: "Gaming, Movies",
    contact: undefined,
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 24 * 1),
  },
  {
    id: "user-4",
    nickname: "Sneha Iyer",
    state: "Karnataka",
    city: "Bengaluru",
    branch: "Computer Science",
    year: BigInt(4),
    interests: "Reading, Dance, Cooking",
    contact: undefined,
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 3),
  },
  {
    id: "user-5",
    nickname: "Vikram Nair",
    state: "Kerala",
    city: "Kochi",
    branch: "Civil Engineering",
    year: BigInt(2),
    interests: "Football, Travel",
    contact: undefined,
    createdAt: BigInt(Date.now() - 1000 * 60 * 60 * 24 * 7),
  },
  {
    id: "user-6",
    nickname: "Anjali Mehta",
    state: "Rajasthan",
    city: "Jaipur",
    branch: "MBA",
    year: BigInt(1),
    interests: "Entrepreneurship, Yoga",
    contact: undefined,
    createdAt: BigInt(Date.now() - 1000 * 60 * 30),
  },
];

const currentUser: UserProfile = {
  id: "current-user",
  nickname: "Demo User",
  state: "Maharashtra",
  city: "Mumbai",
  branch: "Computer Science",
  year: BigInt(2),
  interests: "Coding, Travel",
  contact: undefined,
  createdAt: BigInt(Date.now()),
};

export const mockBackend: backendInterface = {
  createOrUpdateProfile: async (
    nickname,
    state,
    city,
    branch,
    year,
    interests,
    contact
  ): Promise<ProfileResult> => ({
    __kind__: "ok",
    ok: { ...currentUser, nickname, state, city, branch, year, interests: interests ?? undefined, contact: contact ?? undefined },
  }),

  getAllUsers: async (): Promise<UserProfile[]> => sampleUsers,

  getMyProfile: async (): Promise<UserProfile | null> => currentUser,

  getRecentlyJoined: async (limit: bigint): Promise<UserProfile[]> =>
    sampleUsers
      .sort((a, b) => Number(b.createdAt - a.createdAt))
      .slice(0, Number(limit)),

  getUsersByFilters: async (state, city, branch, year): Promise<UserProfile[]> => {
    return sampleUsers.filter((u) => {
      if (state && u.state !== state) return false;
      if (city && u.city.toLowerCase() !== city.toLowerCase()) return false;
      if (branch && u.branch !== branch) return false;
      if (year && u.year !== year) return false;
      return true;
    });
  },

  getUsersByState: async (state: string): Promise<UserProfile[]> =>
    sampleUsers.filter((u) => u.state === state),
};
