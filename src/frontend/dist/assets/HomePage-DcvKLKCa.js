import { c as createLucideIcon, u as useAuth, a as useNavigate, j as jsxRuntimeExports, C as Compass, L as Link, B as Button, b as Card, d as CardContent, S as SkeletonGrid } from "./index-BFj2ryNh.js";
import { u as useRecentlyJoined, M as MapPin, E as EmptyState, U as UserCard, a as Users } from "./use-users-VvWa0MBB.js";
import { u as useProfile } from "./use-profile-B1FXijso.js";
import "./index-BRrEL8fa.js";
import "./graduation-cap-CLqTf9sT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
];
const Network = createLucideIcon("network", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
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
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
function AbstractNetworkVisual() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-square max-w-sm mx-auto select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 rounded-full opacity-30 animate-pulse-glow",
        style: {
          background: "radial-gradient(ellipse at 50% 50%, oklch(0.72 0.22 200 / 0.35), transparent 70%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        viewBox: "0 0 300 300",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "absolute inset-0 w-full h-full",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "150",
              y1: "150",
              x2: "80",
              y2: "80",
              stroke: "oklch(0.72 0.22 200 / 0.35)",
              strokeWidth: "1.5",
              className: "animate-draw-line"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "150",
              y1: "150",
              x2: "230",
              y2: "90",
              stroke: "oklch(0.75 0.25 165 / 0.35)",
              strokeWidth: "1.5",
              className: "animate-draw-line",
              style: { animationDelay: "200ms" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "150",
              y1: "150",
              x2: "70",
              y2: "210",
              stroke: "oklch(0.72 0.22 200 / 0.3)",
              strokeWidth: "1.5",
              className: "animate-draw-line",
              style: { animationDelay: "400ms" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "150",
              y1: "150",
              x2: "235",
              y2: "215",
              stroke: "oklch(0.75 0.25 165 / 0.3)",
              strokeWidth: "1.5",
              className: "animate-draw-line",
              style: { animationDelay: "300ms" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "150",
              y1: "150",
              x2: "150",
              y2: "48",
              stroke: "oklch(0.72 0.22 200 / 0.25)",
              strokeWidth: "1",
              className: "animate-draw-line",
              style: { animationDelay: "100ms" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "80",
              y1: "80",
              x2: "230",
              y2: "90",
              stroke: "oklch(0.75 0.25 165 / 0.18)",
              strokeWidth: "1",
              strokeDasharray: "4 4"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "70",
              y1: "210",
              x2: "235",
              y2: "215",
              stroke: "oklch(0.72 0.22 200 / 0.18)",
              strokeWidth: "1",
              strokeDasharray: "4 4"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute animate-pulse-glow",
        style: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-16 h-16 rounded-full flex items-center justify-center shadow-elevated",
            style: {
              background: "linear-gradient(135deg, oklch(0.55 0.25 200), oklch(0.58 0.28 165))"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-7 h-7 text-white" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute animate-float-slow",
        style: { top: "18%", left: "18%" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(NodeBubble, { label: "State", color: "200", delay: "0ms" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute animate-float-medium",
        style: { top: "16%", right: "18%" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(NodeBubble, { label: "Branch", color: "165", delay: "300ms" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute animate-float-fast",
        style: { bottom: "18%", left: "14%" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(NodeBubble, { label: "City", color: "200", delay: "150ms" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute animate-float-slow",
        style: { bottom: "17%", right: "14%" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(NodeBubble, { label: "Network", color: "165", delay: "450ms" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute animate-float-medium",
        style: { top: "10%", left: "50%", transform: "translateX(-50%)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-8 h-8 rounded-full border-2",
            style: {
              background: "oklch(0.96 0.02 200)",
              borderColor: "oklch(0.72 0.22 200 / 0.4)"
            }
          }
        )
      }
    )
  ] });
}
function NodeBubble({
  label,
  color,
  delay
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center gap-1",
      style: { animationDelay: delay },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-12 h-12 rounded-full flex items-center justify-center text-xs font-semibold font-display shadow-card border-2",
            style: {
              background: `oklch(0.96 0.03 ${color})`,
              borderColor: `oklch(0.72 0.22 ${color} / 0.35)`,
              color: `oklch(0.35 0.18 ${color})`
            },
            children: label[0]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-xs font-medium px-2 py-0.5 rounded-full",
            style: {
              background: `oklch(0.93 0.03 ${color} / 0.6)`,
              color: `oklch(0.35 0.18 ${color})`
            },
            children: label
          }
        )
      ]
    }
  );
}
const FEATURES = [
  {
    icon: MapPin,
    title: "Find students from your state",
    description: "Instantly discover peers from your home state so you always have a familiar face on campus."
  },
  {
    icon: BookOpen,
    title: "Connect across branches",
    description: "Meet students from CSE, ECE, Mechanical, and every branch — build a network beyond your classroom."
  },
  {
    icon: Network,
    title: "Build your VIT-AP network",
    description: "Grow your circle with fellow VIT-AP students who share your interests, city, or background."
  }
];
function HomePage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { profile } = useProfile();
  const recentQuery = useRecentlyJoined(6);
  const recentUsers = recentQuery.data ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden border-b border-border/40",
        style: {
          background: "linear-gradient(135deg, oklch(var(--background)) 0%, oklch(0.94 0.04 200 / 0.6) 50%, oklch(0.93 0.05 165 / 0.4) 100%)"
        },
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20",
                    style: {
                      background: "radial-gradient(circle, oklch(0.72 0.22 200) 0%, transparent 70%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-15",
                    style: {
                      background: "radial-gradient(circle, oklch(0.75 0.25 165) 0%, transparent 70%)"
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 py-16 sm:py-24 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-12 lg:gap-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex-1 text-center lg:text-left animate-fade-up",
                style: { animationDelay: "0ms" },
                children: [
                  isAuthenticated && profile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-5 border border-primary/20", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
                    "Welcome back, ",
                    profile.nickname,
                    "!"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-5 border border-primary/20", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-3.5 h-3.5" }),
                    "Made for VIT-AP students"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-5", children: isAuthenticated && profile ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    "Discover students",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-block",
                        style: {
                          background: "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--accent)))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        },
                        children: "from your hometown"
                      }
                    )
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    "Find Your People",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-block",
                        style: {
                          background: "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--accent)))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        },
                        children: "at VIT-AP"
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed", children: "Connect with students from your hometown, state, or branch and build real campus friendships." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-3 justify-center lg:justify-start", children: isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/discover", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "gap-2 w-full sm:w-auto transition-smooth shadow-elevated hover:shadow-card",
                      "data-ocid": "home.discover_cta_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4" }),
                        "Start Discovering",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                      ]
                    }
                  ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "lg",
                        className: "gap-2 w-full sm:w-auto transition-smooth shadow-elevated hover:shadow-card",
                        onClick: () => navigate({ to: "/login" }),
                        "data-ocid": "home.signin_button",
                        children: [
                          "Start Discovering",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/discover", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "outline",
                        size: "lg",
                        className: "gap-2 w-full sm:w-auto transition-smooth",
                        "data-ocid": "home.browse_button",
                        children: "Browse Students"
                      }
                    ) })
                  ] }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-1 w-full max-w-md lg:max-w-lg flex items-center justify-center animate-fade-in",
                style: { animationDelay: "200ms" },
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(AbstractNetworkVisual, {})
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-b border-border/40 py-14",
        "data-ocid": "home.features_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground text-center mb-2", children: "Built for VIT-AP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center mb-8", children: "Everything you need to find your people on campus." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                className: "border-border/60 bg-card shadow-card hover:shadow-elevated transition-smooth group",
                style: { animationDelay: `${idx * 80}ms` },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth",
                      style: {
                        background: "linear-gradient(135deg, oklch(var(--primary) / 0.12), oklch(var(--accent) / 0.10))"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold font-display text-foreground mb-2", children: feature.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: feature.description })
                ] })
              },
              feature.title
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-14",
        "data-ocid": "home.recently_joined_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Recently Joined" }),
            isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/discover", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "gap-1 text-primary",
                "data-ocid": "home.view_all_link",
                children: [
                  "View all",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                ]
              }
            ) })
          ] }),
          recentQuery.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonGrid, { count: 6 }) : recentUsers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            EmptyState,
            {
              title: "No students yet",
              description: "Be the first to join! Create your profile to appear here.",
              dataOcid: "home.recently_joined.empty_state",
              action: !isAuthenticated ? {
                label: "Join Now",
                onClick: () => navigate({ to: "/login" })
              } : void 0
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: recentUsers.map((user, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(UserCard, { user, index: i }, user.id)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden border-t border-border/40 py-16",
        style: {
          background: "linear-gradient(135deg, oklch(var(--primary) / 0.05) 0%, oklch(var(--accent) / 0.07) 100%)"
        },
        "data-ocid": "home.cta_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 overflow-hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 right-1/4 w-64 h-64 rounded-full opacity-10",
                  style: {
                    background: "radial-gradient(circle, oklch(0.72 0.22 200) 0%, transparent 70%)"
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 text-center relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5",
                style: {
                  background: "linear-gradient(135deg, oklch(var(--primary) / 0.15), oklch(var(--accent) / 0.12))"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-7 h-7 text-primary" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold font-display text-foreground mb-3", children: "Find your people" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-md mx-auto", children: "VIT-AP students from across India are already here. Your batchmates from back home might already be waiting." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/discover", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "lg",
                  className: "gap-2 w-full sm:w-auto transition-smooth shadow-elevated",
                  "data-ocid": "home.bottom_discover_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-4 h-4" }),
                    "Start Discovering"
                  ]
                }
              ) }),
              !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "lg",
                  className: "gap-2 w-full sm:w-auto transition-smooth",
                  onClick: () => navigate({ to: "/login" }),
                  "data-ocid": "home.bottom_signin_button",
                  children: "Sign In to Connect"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  HomePage as default
};
