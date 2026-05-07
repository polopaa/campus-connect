import { supabase } from "@/lib/supabase";
import type { Filters, UserProfile } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

export function useUsers(filters: Filters) {
  const query = useQuery<UserProfile[]>({
    queryKey: ["users", filters],
    queryFn: async () => {
      const { data: authData } = await supabase.auth.getUser();
      const currentUserId = authData?.user?.id ?? null;
      let q = supabase.from("users").select("*");
      if (currentUserId) q = q.neq("id", currentUserId);
      if (filters.state) q = q.eq("state", filters.state);
      if (filters.city) q = q.ilike("city", `%${filters.city}%`);
      if (filters.branch) q = q.eq("branch", filters.branch);
      if (filters.year !== null) q = q.eq("year", filters.year);
      const { data, error } = await q.order("created_at", { ascending: false });
      if (error) {
        console.error("[useUsers] Supabase error:", error);
        throw new Error(error.message);
      }
      return (data ?? []) as UserProfile[];
    },
  });

  return {
    users: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useRecentlyJoined(limit = 6) {
  return useQuery<UserProfile[]>({
    queryKey: ["recentlyJoined", limit],
    queryFn: async () => {
      const { data: authData } = await supabase.auth.getUser();
      const currentUserId = authData?.user?.id ?? null;
      let q = supabase.from("users").select("*");
      if (currentUserId) q = q.neq("id", currentUserId);
      const { data, error } = await q
        .order("created_at", { ascending: false })
        .limit(limit);
      if (error) {
        console.error("[useRecentlyJoined] Supabase error:", error);
        throw new Error(error.message);
      }
      return (data ?? []) as UserProfile[];
    },
  });
}

export function useUsersByState(state: string | null) {
  return useQuery<UserProfile[]>({
    queryKey: ["usersByState", state],
    queryFn: async () => {
      if (!state) return [];
      const { data: authData } = await supabase.auth.getUser();
      const currentUserId = authData?.user?.id ?? null;
      let q = supabase.from("users").select("*").eq("state", state);
      if (currentUserId) q = q.neq("id", currentUserId);
      const { data, error } = await q.order("created_at", { ascending: false });
      if (error) {
        console.error("[useUsersByState] Supabase error:", error);
        throw new Error(error.message);
      }
      return (data ?? []) as UserProfile[];
    },
    enabled: !!state,
  });
}
