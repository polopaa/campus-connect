import { c as createLucideIcon, j as jsxRuntimeExports, f as cn, u as useAuth, r as reactExports, B as Button, U as User, b as Card, i as CardHeader, d as CardContent } from "./index-BFj2ryNh.js";
import { I as Input } from "./input-dLY9GWRr.js";
import { L as Label } from "./label-CzM6GJg4.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D5m7GEK2.js";
import { u as useProfile, I as INDIA_STATES, B as BRANCHES, Y as YEAR_LABELS } from "./use-profile-B1FXijso.js";
import "./index-BRrEL8fa.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$1);
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
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = createLucideIcon("save", __iconNode);
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
function ProfilePage() {
  const { isAuthenticated } = useAuth();
  const {
    profile,
    isLoading,
    createOrUpdateProfile,
    isSaving,
    saveError,
    saveSuccess
  } = useProfile();
  const [form, setForm] = reactExports.useState({
    nickname: "",
    state: "",
    city: "",
    branch: "",
    year: "1",
    interests: "",
    contact: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  reactExports.useEffect(() => {
    if (profile) {
      setForm({
        nickname: profile.nickname,
        state: profile.state,
        city: profile.city,
        branch: profile.branch,
        year: String(profile.year),
        interests: profile.interests ?? "",
        contact: profile.contact ?? ""
      });
    }
  }, [profile]);
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-2xl mx-auto px-4 py-16 text-center",
        "data-ocid": "profile.auth_wall",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-7 h-7 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground mb-2", children: "Please login to view your profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Create your profile to help others find and connect with you." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "gap-2", "data-ocid": "profile.login_link", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/login", children: "Go to Login" }) })
        ]
      }
    );
  }
  function validate() {
    const errs = {};
    if (!form.nickname.trim()) errs.nickname = "Nickname is required";
    if (!form.state) errs.state = "State is required";
    if (!form.city.trim()) errs.city = "City is required";
    if (!form.branch) errs.branch = "Branch/Major is required";
    if (!form.year) errs.year = "Year is required";
    return errs;
  }
  async function handleSubmit(e) {
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
      contact: form.contact.trim() || null
    });
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 bg-muted rounded w-48 mb-6 animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 bg-muted rounded animate-pulse" }, i)) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-8", "data-ocid": "profile.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold font-display text-foreground", children: profile ? "Edit Profile" : "Create Profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Help others find and connect with you" })
      ] })
    ] }),
    saveSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2 p-3 bg-accent/10 text-accent border border-accent/20 rounded-lg mb-6 text-sm",
        "data-ocid": "profile.success_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 shrink-0" }),
          "Profile saved!"
        ]
      }
    ),
    saveError && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "p-3 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg mb-6 text-sm",
        "data-ocid": "profile.error_state",
        children: saveError
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-medium text-muted-foreground uppercase tracking-wide", children: "Your Information" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "nickname", children: "Nickname *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "nickname",
              placeholder: "e.g. Alex P.",
              value: form.nickname,
              onChange: (e) => setForm((f) => ({ ...f, nickname: e.target.value })),
              "data-ocid": "profile.nickname_input"
            }
          ),
          errors.nickname && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs text-destructive",
              "data-ocid": "profile.nickname.field_error",
              children: errors.nickname
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "state", children: "State *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.state,
                onValueChange: (v) => setForm((f) => ({ ...f, state: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "state", "data-ocid": "profile.state_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select state" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectContent,
                    {
                      className: "max-h-[200px] overflow-y-auto",
                      position: "popper",
                      sideOffset: 4,
                      children: INDIA_STATES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s))
                    }
                  )
                ]
              }
            ),
            errors.state && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-destructive",
                "data-ocid": "profile.state.field_error",
                children: errors.state
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "city", children: "City *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "city",
                placeholder: "e.g. Austin",
                value: form.city,
                onChange: (e) => setForm((f) => ({ ...f, city: e.target.value })),
                "data-ocid": "profile.city_input"
              }
            ),
            errors.city && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-destructive",
                "data-ocid": "profile.city.field_error",
                children: errors.city
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "branch", children: "Branch / Major *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.branch,
                onValueChange: (v) => setForm((f) => ({ ...f, branch: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "branch", "data-ocid": "profile.branch_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select branch" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectContent,
                    {
                      className: "max-h-[200px] overflow-y-auto",
                      position: "popper",
                      sideOffset: 4,
                      children: BRANCHES.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b, children: b }, b))
                    }
                  )
                ]
              }
            ),
            errors.branch && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-destructive",
                "data-ocid": "profile.branch.field_error",
                children: errors.branch
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "year", children: "Year *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.year,
                onValueChange: (v) => setForm((f) => ({ ...f, year: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "year", "data-ocid": "profile.year_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select year" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectContent,
                    {
                      className: "max-h-[200px] overflow-y-auto",
                      position: "popper",
                      sideOffset: 4,
                      children: Object.entries(YEAR_LABELS).map(
                        ([y, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: y, children: label }, y)
                      )
                    }
                  )
                ]
              }
            ),
            errors.year && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-destructive",
                "data-ocid": "profile.year.field_error",
                children: errors.year
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "interests", children: [
            "Interests",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "interests",
              placeholder: "e.g. Tech, AI, Coding, Startups",
              value: form.interests,
              onChange: (e) => setForm((f) => ({ ...f, interests: e.target.value })),
              rows: 2,
              "data-ocid": "profile.interests_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Separate with commas" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "contact", children: [
            "Contact",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "contact",
              placeholder: "e.g. @yourhandle on Instagram, LinkedIn URL…",
              value: form.contact,
              onChange: (e) => setForm((f) => ({ ...f, contact: e.target.value })),
              rows: 2,
              "data-ocid": "profile.contact_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3" }),
            "Visible to others only if you choose to share it"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            className: "w-full gap-2 h-11",
            disabled: isSaving,
            "data-ocid": "profile.submit_button",
            children: isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" }),
              "Saving…"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
              "Save Profile"
            ] })
          }
        )
      ] }) })
    ] })
  ] });
}
export {
  ProfilePage as default
};
