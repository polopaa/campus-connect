import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/use-auth";
import { useProfile } from "@/hooks/use-profile";
import { BRANCHES, INDIA_STATES, YEAR_LABELS } from "@/types/user";
import { CheckCircle, Lock, Save, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const { isAuthenticated } = useAuth();
  const {
    profile,
    isLoading,
    createOrUpdateProfile,
    isSaving,
    saveError,
    saveSuccess,
  } = useProfile();

  const [form, setForm] = useState({
    nickname: "",
    state: "",
    city: "",
    branch: "",
    year: "1",
    interests: "",
    contact: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (profile) {
      setForm({
        nickname: profile.nickname,
        state: profile.state,
        city: profile.city,
        branch: profile.branch,
        year: String(profile.year),
        interests: profile.interests ?? "",
        contact: profile.contact ?? "",
      });
    }
  }, [profile]);

  if (!isAuthenticated) {
    return (
      <div
        className="max-w-2xl mx-auto px-4 py-16 text-center"
        data-ocid="profile.auth_wall"
      >
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Lock className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-xl font-bold font-display text-foreground mb-2">
          Please login to view your profile
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Create your profile to help others find and connect with you.
        </p>
        <Button asChild className="gap-2" data-ocid="profile.login_link">
          <a href="/login">Go to Login</a>
        </Button>
      </div>
    );
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.nickname.trim()) errs.nickname = "Nickname is required";
    if (!form.state) errs.state = "State is required";
    if (!form.city.trim()) errs.city = "City is required";
    if (!form.branch) errs.branch = "Branch/Major is required";
    if (!form.year) errs.year = "Year is required";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    await createOrUpdateProfile({
      nickname: form.nickname.trim(),
      state: form.state,
      city: form.city.trim(),
      branch: form.branch,
      year: Number(form.year),
      interests: form.interests.trim() || null,
      contact: form.contact.trim() || null,
    });
  }

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="h-8 bg-muted rounded w-48 mb-6 animate-pulse" />
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 bg-muted rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8" data-ocid="profile.page">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <User className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-bold font-display text-foreground">
            {profile ? "Edit Profile" : "Create Profile"}
          </h1>
          <p className="text-sm text-muted-foreground">
            Help others find and connect with you
          </p>
        </div>
      </div>

      {saveSuccess && (
        <div
          className="flex items-center gap-2 p-3 bg-accent/10 text-accent border border-accent/20 rounded-lg mb-6 text-sm"
          data-ocid="profile.success_state"
        >
          <CheckCircle className="w-4 h-4 shrink-0" />
          Profile saved!
        </div>
      )}
      {saveError && (
        <div
          className="p-3 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg mb-6 text-sm"
          data-ocid="profile.error_state"
        >
          {saveError}
        </div>
      )}

      <Card className="shadow-card border-border/60">
        <CardHeader className="pb-4">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Your Information
          </h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="nickname">Nickname *</Label>
              <Input
                id="nickname"
                placeholder="e.g. Alex P."
                value={form.nickname}
                onChange={(e) =>
                  setForm((f) => ({ ...f, nickname: e.target.value }))
                }
                data-ocid="profile.nickname_input"
              />
              {errors.nickname && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="profile.nickname.field_error"
                >
                  {errors.nickname}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="state">State *</Label>
                <Select
                  value={form.state}
                  onValueChange={(v) => setForm((f) => ({ ...f, state: v }))}
                >
                  <SelectTrigger id="state" data-ocid="profile.state_select">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent
                    className="max-h-[200px] overflow-y-auto"
                    position="popper"
                    sideOffset={4}
                  >
                    {INDIA_STATES.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.state && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="profile.state.field_error"
                  >
                    {errors.state}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  placeholder="e.g. Austin"
                  value={form.city}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, city: e.target.value }))
                  }
                  data-ocid="profile.city_input"
                />
                {errors.city && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="profile.city.field_error"
                  >
                    {errors.city}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="branch">Branch / Major *</Label>
                <Select
                  value={form.branch}
                  onValueChange={(v) => setForm((f) => ({ ...f, branch: v }))}
                >
                  <SelectTrigger id="branch" data-ocid="profile.branch_select">
                    <SelectValue placeholder="Select branch" />
                  </SelectTrigger>
                  <SelectContent
                    className="max-h-[200px] overflow-y-auto"
                    position="popper"
                    sideOffset={4}
                  >
                    {BRANCHES.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.branch && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="profile.branch.field_error"
                  >
                    {errors.branch}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="year">Year *</Label>
                <Select
                  value={form.year}
                  onValueChange={(v) => setForm((f) => ({ ...f, year: v }))}
                >
                  <SelectTrigger id="year" data-ocid="profile.year_select">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent
                    className="max-h-[200px] overflow-y-auto"
                    position="popper"
                    sideOffset={4}
                  >
                    {(Object.entries(YEAR_LABELS) as [string, string][]).map(
                      ([y, label]) => (
                        <SelectItem key={y} value={y}>
                          {label}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
                {errors.year && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="profile.year.field_error"
                  >
                    {errors.year}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="interests">
                Interests{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </Label>
              <Textarea
                id="interests"
                placeholder="e.g. Tech, AI, Coding, Startups"
                value={form.interests}
                onChange={(e) =>
                  setForm((f) => ({ ...f, interests: e.target.value }))
                }
                rows={2}
                data-ocid="profile.interests_input"
              />
              <p className="text-xs text-muted-foreground">
                Separate with commas
              </p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="contact">
                Contact{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </Label>
              <Textarea
                id="contact"
                placeholder="e.g. @yourhandle on Instagram, LinkedIn URL…"
                value={form.contact}
                onChange={(e) =>
                  setForm((f) => ({ ...f, contact: e.target.value }))
                }
                rows={2}
                data-ocid="profile.contact_input"
              />
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Lock className="w-3 h-3" />
                Visible to others only if you choose to share it
              </p>
            </div>

            <Button
              type="submit"
              className="w-full gap-2 h-11"
              disabled={isSaving}
              data-ocid="profile.submit_button"
            >
              {isSaving ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                  Saving…
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Profile
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
