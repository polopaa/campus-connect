import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type UserId = string;
export type Timestamp = bigint;
export type ProfileResult = {
    __kind__: "ok";
    ok: UserProfile;
} | {
    __kind__: "err";
    err: string;
};
export interface UserProfile {
    id: UserId;
    branch: string;
    contact?: string;
    nickname: string;
    interests?: string;
    city: string;
    createdAt: Timestamp;
    year: bigint;
    state: string;
}
export interface backendInterface {
    createOrUpdateProfile(nickname: string, state: string, city: string, branch: string, year: bigint, interests: string | null, contact: string | null): Promise<ProfileResult>;
    getAllUsers(): Promise<Array<UserProfile>>;
    getMyProfile(): Promise<UserProfile | null>;
    getRecentlyJoined(limit: bigint): Promise<Array<UserProfile>>;
    getUsersByFilters(state: string | null, city: string | null, branch: string | null, year: bigint | null): Promise<Array<UserProfile>>;
    getUsersByState(state: string): Promise<Array<UserProfile>>;
}
