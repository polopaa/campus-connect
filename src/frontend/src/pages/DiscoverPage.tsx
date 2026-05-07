import { EmptyState } from "@/components/EmptyState";
import { SkeletonGrid } from "@/components/SkeletonCard";
import { UserCard } from "@/components/UserCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/hooks/use-auth";
import { useProfile } from "@/hooks/use-profile";
import { useUsers, useUsersByState } from "@/hooks/use-users";
import { BRANCHES, INDIA_STATES, YEAR_LABELS } from "@/types/user";
import type { Filters } from "@/types/user";
import { useNavigate } from "@tanstack/react-router";
import { AlertCircle, Compass, Filter, MapPin, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ALL = "__all__";

function FilterBar({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
}) {
  const [cityInput, setCityInput] = useState(filters.city ?? "");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeCount = [
    filters.state,
    filters.city,
    filters.branch,
    filters.year,
  ].filter((v) => v !== null && v !== undefined).length;

  function updateFilter<K extends keyof Filters>(key: K, value: Filters[K]) {
    setFilters({ ...filters, [key]: value });
  }

  function handleCityChange(val: string) {
    setCityInput(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setFilters({ ...filters, city: val.trim() || null });
    }, 400);
  }

  function clearAll() {
    setCityInput("");
    setFilters({ state: null, city: null, branch: null, year: null });
  }

  useEffect(() => {
    if (!filters.city) setCityInput("");
  }, [filters.city]);

  return (
    <div
      className="bg-card border border-border/60 rounded-xl p-4 shadow-subtle"
      data-ocid="discover.filter_panel"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Filters</span>
          {activeCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {activeCount}
            </Badge>
          )}
        </div>
        {activeCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            className="h-7 text-xs gap-1 text-muted-foreground"
            data-ocid="discover.clear_filters_button"
          >
            <X className="w-3 h-3" />
            Clear
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Select
          value={filters.state ?? ALL}
          onValueChange={(v) => updateFilter("state", v === ALL ? null : v)}
        >
          <SelectTrigger
            className="h-9 text-xs"
            data-ocid="discover.state_filter"
          >
            <SelectValue placeholder="State" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] overflow-y-auto">
            <SelectItem value={ALL}>All States</SelectItem>
            {INDIA_STATES.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          placeholder="City"
          value={cityInput}
          onChange={(e) => handleCityChange(e.target.value)}
          className="h-9 text-xs"
          data-ocid="discover.city_filter"
        />

        <Select
          value={filters.branch ?? ALL}
          onValueChange={(v) => updateFilter("branch", v === ALL ? null : v)}
        >
          <SelectTrigger
            className="h-9 text-xs"
            data-ocid="discover.branch_filter"
          >
            <SelectValue placeholder="Branch" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] overflow-y-auto">
            <SelectItem value={ALL}>All Branches</SelectItem>
            {BRANCHES.map((b) => (
              <SelectItem key={b} value={b}>
                {b}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.year !== null ? String(filters.year) : ALL}
          onValueChange={(v) =>
            updateFilter("year", v === ALL ? null : Number(v))
          }
        >
          <SelectTrigger
            className="h-9 text-xs"
            data-ocid="discover.year_filter"
          >
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] overflow-y-auto">
            <SelectItem value={ALL}>All Years</SelectItem>
            {([1, 2, 3, 4, 5] as const).map((y) => (
              <SelectItem key={y} value={String(y)}>
                {YEAR_LABELS[y]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default function DiscoverPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { profile } = useProfile();
  const [filters, setFilters] = useState<Filters>({
    state: null,
    city: null,
    branch: null,
    year: null,
  });
  const { users, isLoading, isError, error } = useUsers(filters);
  const sameStateQuery = useUsersByState(profile?.state ?? null);

  const sameStateUsers = sameStateQuery.data ?? [];
  const showSameState =
    !!profile?.state &&
    sameStateUsers.length > 0 &&
    !filters.state &&
    !filters.branch &&
    !filters.year;

  if (!isAuthenticated) {
    return (
      <div
        className="max-w-6xl mx-auto px-4 py-16 text-center"
        data-ocid="discover.auth_wall"
      >
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Compass className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-xl font-bold font-display text-foreground mb-2">
          Sign in to Discover
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Connect with students from your home state — sign in to get started.
        </p>
        <Button
          type="button"
          onClick={() => navigate({ to: "/login" })}
          className="gap-2"
          data-ocid="discover.signin_button"
        >
          Sign in to Discover
        </Button>
      </div>
    );
  }

  return (
    <div
      className="max-w-6xl mx-auto px-4 py-8 space-y-8"
      data-ocid="discover.page"
    >
      <div>
        <h1 className="text-2xl font-bold font-display text-foreground mb-1">
          Discover Students
        </h1>
        <p className="text-sm text-muted-foreground">
          Find and connect with students from your home state or city
        </p>
      </div>

      <FilterBar filters={filters} setFilters={setFilters} />

      {showSameState && (
        <section data-ocid="discover.same_state_section">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <h2 className="text-base font-semibold font-display text-foreground">
              People from {profile?.state}
            </h2>
            <Badge variant="secondary" className="text-xs">
              {sameStateUsers.length}
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sameStateUsers.slice(0, 6).map((user, i) => (
              <UserCard key={user.id} user={user} index={i} />
            ))}
          </div>
        </section>
      )}

      <section data-ocid="discover.all_users_section">
        {showSameState && (
          <h2 className="text-base font-semibold font-display text-foreground mb-4">
            All Students
          </h2>
        )}

        {isError && (
          <div
            className="flex items-center gap-2 p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg mb-4 text-sm"
            data-ocid="discover.error_state"
          >
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>
              {error instanceof Error
                ? error.message
                : "Failed to load students. Please try again."}
            </span>
          </div>
        )}

        {isLoading ? (
          <SkeletonGrid count={6} />
        ) : users.length === 0 ? (
          <EmptyState
            title="No students found"
            description="Try adjusting your filters or check back later when more students join."
            action={{
              label: "Clear filters",
              onClick: () =>
                setFilters({
                  state: null,
                  city: null,
                  branch: null,
                  year: null,
                }),
            }}
            dataOcid="discover.empty_state"
          />
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="discover.user_list"
          >
            {users.map((user, i) => (
              <UserCard key={user.id} user={user} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
