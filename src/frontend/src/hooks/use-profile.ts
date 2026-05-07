import { supabase } from "@/lib/supabase";
import type { UserProfile } from "@/types/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./use-auth";

export function useProfile() {
  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  const userId = user?.id ?? null;

  const profileQuery = useQuery<UserProfile | null>({
    queryKey: ["myProfile", userId],
    queryFn: async () => {
      if (!userId) return null;
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userId)
        .maybeSingle();
      if (error) {
        console.error("[useProfile] Supabase error:", error);
        throw new Error(error.message);
      }
      return data as UserProfile | null;
    },
    enabled: !!userId && !!isAuthenticated,
  });

  const mutation = useMutation({
    mutationFn: async (input: {
      nickname: string;
      state: string;
      city: string;
      branch: string;
      year: number;
      interests: string | null;
      contact: string | null;
    }) => {
      if (!userId) throw new Error("Not authenticated");
      const payload = {
        id: userId,
        nickname: input.nickname,
        state: input.state,
        city: input.city,
        branch: input.branch,
        year: input.year,
        interests: input.interests,
        contact: input.contact,
      };
      const { data, error } = await supabase
        .from("users")
        .upsert(payload, { onConflict: "id" })
        .select()
        .single();
      if (error) {
        console.error("[useProfile.save] Supabase error:", error);
        throw new Error(error.message);
      }
      return data as UserProfile;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProfile", userId] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return {
    profile: profileQuery.data ?? null,
    isLoading: profileQuery.isLoading,
    isError: profileQuery.isError,
    createOrUpdateProfile: mutation.mutateAsync,
    isSaving: mutation.isPending,
    saveError: mutation.error?.message ?? null,
    saveSuccess: mutation.isSuccess,
  };
}
