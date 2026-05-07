import { c as createLucideIcon, u as useAuth, a as useNavigate, r as reactExports, j as jsxRuntimeExports, C as Compass, B as Button, S as SkeletonGrid } from "./index-BFj2ryNh.js";
import { b as useUsers, c as useUsersByState, M as MapPin, B as Badge, U as UserCard, E as EmptyState, X } from "./use-users-VvWa0MBB.js";
import { I as Input } from "./input-dLY9GWRr.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D5m7GEK2.js";
import { u as useProfile, I as INDIA_STATES, B as BRANCHES, Y as YEAR_LABELS } from "./use-profile-B1FXijso.js";
import "./index-BRrEL8fa.js";
import "./graduation-cap-CLqTf9sT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode);
const ALL = "__all__";
function FilterBar({
  filters,
  setFilters
}) {
  const [cityInput, setCityInput] = reactExports.useState(filters.city ?? "");
  const debounceRef = reactExports.useRef(null);
  const activeCount = [
    filters.state,
    filters.city,
    filters.branch,
    filters.year
  ].filter((v) => v !== null && v !== void 0).length;
  function updateFilter(key, value) {
    setFilters({ ...filters, [key]: value });
  }
  function handleCityChange(val) {
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
  reactExports.useEffect(() => {
    if (!filters.city) setCityInput("");
  }, [filters.city]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border/60 rounded-xl p-4 shadow-subtle",
      "data-ocid": "discover.filter_panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: "Filters" }),
            activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: activeCount })
          ] }),
          activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: clearAll,
              className: "h-7 text-xs gap-1 text-muted-foreground",
              "data-ocid": "discover.clear_filters_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
                "Clear"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: filters.state ?? ALL,
              onValueChange: (v) => updateFilter("state", v === ALL ? null : v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-9 text-xs",
                    "data-ocid": "discover.state_filter",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "State" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "max-h-[200px] overflow-y-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ALL, children: "All States" }),
                  INDIA_STATES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s))
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "City",
              value: cityInput,
              onChange: (e) => handleCityChange(e.target.value),
              className: "h-9 text-xs",
              "data-ocid": "discover.city_filter"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: filters.branch ?? ALL,
              onValueChange: (v) => updateFilter("branch", v === ALL ? null : v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-9 text-xs",
                    "data-ocid": "discover.branch_filter",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Branch" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "max-h-[200px] overflow-y-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ALL, children: "All Branches" }),
                  BRANCHES.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b, children: b }, b))
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: filters.year !== null ? String(filters.year) : ALL,
              onValueChange: (v) => updateFilter("year", v === ALL ? null : Number(v)),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-9 text-xs",
                    "data-ocid": "discover.year_filter",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Year" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "max-h-[200px] overflow-y-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ALL, children: "All Years" }),
                  [1, 2, 3, 4, 5].map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(y), children: YEAR_LABELS[y] }, y))
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function DiscoverPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { profile } = useProfile();
  const [filters, setFilters] = reactExports.useState({
    state: null,
    city: null,
    branch: null,
    year: null
  });
  const { users, isLoading, isError, error } = useUsers(filters);
  const sameStateQuery = useUsersByState((profile == null ? void 0 : profile.state) ?? null);
  const sameStateUsers = sameStateQuery.data ?? [];
  const showSameState = !!(profile == null ? void 0 : profile.state) && sameStateUsers.length > 0 && !filters.state && !filters.branch && !filters.year;
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-6xl mx-auto px-4 py-16 text-center",
        "data-ocid": "discover.auth_wall",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-7 h-7 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground mb-2", children: "Sign in to Discover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Connect with students from your home state — sign in to get started." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              onClick: () => navigate({ to: "/login" }),
              className: "gap-2",
              "data-ocid": "discover.signin_button",
              children: "Sign in to Discover"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto px-4 py-8 space-y-8",
      "data-ocid": "discover.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-foreground mb-1", children: "Discover Students" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Find and connect with students from your home state or city" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterBar, { filters, setFilters }),
        showSameState && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "discover.same_state_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base font-semibold font-display text-foreground", children: [
              "People from ",
              profile == null ? void 0 : profile.state
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: sameStateUsers.length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: sameStateUsers.slice(0, 6).map((user, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(UserCard, { user, index: i }, user.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "discover.all_users_section", children: [
          showSameState && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold font-display text-foreground mb-4", children: "All Students" }),
          isError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg mb-4 text-sm",
              "data-ocid": "discover.error_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: error instanceof Error ? error.message : "Failed to load students. Please try again." })
              ]
            }
          ),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonGrid, { count: 6 }) : users.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            EmptyState,
            {
              title: "No students found",
              description: "Try adjusting your filters or check back later when more students join.",
              action: {
                label: "Clear filters",
                onClick: () => setFilters({
                  state: null,
                  city: null,
                  branch: null,
                  year: null
                })
              },
              dataOcid: "discover.empty_state"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
              "data-ocid": "discover.user_list",
              children: users.map((user, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(UserCard, { user, index: i }, user.id))
            }
          )
        ] })
      ]
    }
  );
}
export {
  DiscoverPage as default
};
