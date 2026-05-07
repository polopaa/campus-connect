import { EmptyState } from "@/components/EmptyState";
import { SkeletonGrid } from "@/components/SkeletonCard";
import { UserCard } from "@/components/UserCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { useProfile } from "@/hooks/use-profile";
import { useRecentlyJoined } from "@/hooks/use-users";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Compass,
  MapPin,
  Network,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

// ─── Abstract Network Visual ──────────────────────────────────────────────────
function AbstractNetworkVisual() {
  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto select-none">
      {/* Soft radial glow behind the whole graphic */}
      <div
        className="absolute inset-0 rounded-full opacity-30 animate-pulse-glow"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.72 0.22 200 / 0.35), transparent 70%)",
        }}
      />

      {/* SVG connection lines + node graph */}
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {/* Connection lines */}
        <line
          x1="150"
          y1="150"
          x2="80"
          y2="80"
          stroke="oklch(0.72 0.22 200 / 0.35)"
          strokeWidth="1.5"
          className="animate-draw-line"
        />
        <line
          x1="150"
          y1="150"
          x2="230"
          y2="90"
          stroke="oklch(0.75 0.25 165 / 0.35)"
          strokeWidth="1.5"
          className="animate-draw-line"
          style={{ animationDelay: "200ms" }}
        />
        <line
          x1="150"
          y1="150"
          x2="70"
          y2="210"
          stroke="oklch(0.72 0.22 200 / 0.3)"
          strokeWidth="1.5"
          className="animate-draw-line"
          style={{ animationDelay: "400ms" }}
        />
        <line
          x1="150"
          y1="150"
          x2="235"
          y2="215"
          stroke="oklch(0.75 0.25 165 / 0.3)"
          strokeWidth="1.5"
          className="animate-draw-line"
          style={{ animationDelay: "300ms" }}
        />
        <line
          x1="150"
          y1="150"
          x2="150"
          y2="48"
          stroke="oklch(0.72 0.22 200 / 0.25)"
          strokeWidth="1"
          className="animate-draw-line"
          style={{ animationDelay: "100ms" }}
        />
        {/* Cross connections */}
        <line
          x1="80"
          y1="80"
          x2="230"
          y2="90"
          stroke="oklch(0.75 0.25 165 / 0.18)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="70"
          y1="210"
          x2="235"
          y2="215"
          stroke="oklch(0.72 0.22 200 / 0.18)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Centre node — main hub */}
      <div
        className="absolute animate-pulse-glow"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-elevated"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.25 200), oklch(0.58 0.28 165))",
          }}
        >
          <Users className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Satellite node — top-left */}
      <div
        className="absolute animate-float-slow"
        style={{ top: "18%", left: "18%" }}
      >
        <NodeBubble label="State" color="200" delay="0ms" />
      </div>

      {/* Satellite node — top-right */}
      <div
        className="absolute animate-float-medium"
        style={{ top: "16%", right: "18%" }}
      >
        <NodeBubble label="Branch" color="165" delay="300ms" />
      </div>

      {/* Satellite node — bottom-left */}
      <div
        className="absolute animate-float-fast"
        style={{ bottom: "18%", left: "14%" }}
      >
        <NodeBubble label="City" color="200" delay="150ms" />
      </div>

      {/* Satellite node — bottom-right */}
      <div
        className="absolute animate-float-slow"
        style={{ bottom: "17%", right: "14%" }}
      >
        <NodeBubble label="Network" color="165" delay="450ms" />
      </div>

      {/* Top centre small node */}
      <div
        className="absolute animate-float-medium"
        style={{ top: "10%", left: "50%", transform: "translateX(-50%)" }}
      >
        <div
          className="w-8 h-8 rounded-full border-2"
          style={{
            background: "oklch(0.96 0.02 200)",
            borderColor: "oklch(0.72 0.22 200 / 0.4)",
          }}
        />
      </div>
    </div>
  );
}

function NodeBubble({
  label,
  color,
  delay,
}: {
  label: string;
  color: string;
  delay: string;
}) {
  return (
    <div
      className="flex flex-col items-center gap-1"
      style={{ animationDelay: delay }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-semibold font-display shadow-card border-2"
        style={{
          background: `oklch(0.96 0.03 ${color})`,
          borderColor: `oklch(0.72 0.22 ${color} / 0.35)`,
          color: `oklch(0.35 0.18 ${color})`,
        }}
      >
        {label[0]}
      </div>
      <span
        className="text-xs font-medium px-2 py-0.5 rounded-full"
        style={{
          background: `oklch(0.93 0.03 ${color} / 0.6)`,
          color: `oklch(0.35 0.18 ${color})`,
        }}
      >
        {label}
      </span>
    </div>
  );
}

const FEATURES = [
  {
    icon: MapPin,
    title: "Find students from your state",
    description:
      "Instantly discover peers from your home state so you always have a familiar face on campus.",
  },
  {
    icon: BookOpen,
    title: "Connect across branches",
    description:
      "Meet students from CSE, ECE, Mechanical, and every branch — build a network beyond your classroom.",
  },
  {
    icon: Network,
    title: "Build your VIT-AP network",
    description:
      "Grow your circle with fellow VIT-AP students who share your interests, city, or background.",
  },
];

export default function HomePage() {
  // All hooks MUST come before any conditional returns
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { profile } = useProfile();
  const recentQuery = useRecentlyJoined(6);
  const recentUsers = recentQuery.data ?? [];

  return (
    <div data-ocid="home.page">
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-border/40"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--background)) 0%, oklch(0.94 0.04 200 / 0.6) 50%, oklch(0.93 0.05 165 / 0.4) 100%)",
        }}
        data-ocid="home.hero_section"
      >
        {/* Subtle background mesh */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, oklch(0.72 0.22 200) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, oklch(0.75 0.25 165) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: text content */}
            <div
              className="flex-1 text-center lg:text-left animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              {isAuthenticated && profile ? (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-5 border border-primary/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  Welcome back, {profile.nickname}!
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-5 border border-primary/20">
                  <Compass className="w-3.5 h-3.5" />
                  Made for VIT-AP students
                </div>
              )}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-5">
                {isAuthenticated && profile ? (
                  <>
                    Discover students{" "}
                    <span
                      className="inline-block"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--accent)))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      from your hometown
                    </span>
                  </>
                ) : (
                  <>
                    Find Your People{" "}
                    <span
                      className="inline-block"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--accent)))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      at VIT-AP
                    </span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Connect with students from your hometown, state, or branch and
                build real campus friendships.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                {isAuthenticated ? (
                  <Link to="/discover">
                    <Button
                      size="lg"
                      className="gap-2 w-full sm:w-auto transition-smooth shadow-elevated hover:shadow-card"
                      data-ocid="home.discover_cta_button"
                    >
                      <Search className="w-4 h-4" />
                      Start Discovering
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Button
                      size="lg"
                      className="gap-2 w-full sm:w-auto transition-smooth shadow-elevated hover:shadow-card"
                      onClick={() => navigate({ to: "/login" })}
                      data-ocid="home.signin_button"
                    >
                      Start Discovering
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Link to="/discover">
                      <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 w-full sm:w-auto transition-smooth"
                        data-ocid="home.browse_button"
                      >
                        Browse Students
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Right: Abstract SVG visual */}
            <div
              className="flex-1 w-full max-w-md lg:max-w-lg flex items-center justify-center animate-fade-in"
              style={{ animationDelay: "200ms" }}
              aria-hidden="true"
            >
              <AbstractNetworkVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section
        className="bg-muted/30 border-b border-border/40 py-14"
        data-ocid="home.features_section"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold font-display text-foreground text-center mb-2">
            Built for VIT-AP
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Everything you need to find your people on campus.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="border-border/60 bg-card shadow-card hover:shadow-elevated transition-smooth group"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <CardContent className="p-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(var(--primary) / 0.12), oklch(var(--accent) / 0.10))",
                      }}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold font-display text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recently Joined */}
      <section
        className="bg-background py-14"
        data-ocid="home.recently_joined_section"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold font-display text-foreground">
              Recently Joined
            </h2>
            {isAuthenticated && (
              <Link to="/discover">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-primary"
                  data-ocid="home.view_all_link"
                >
                  View all
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            )}
          </div>

          {recentQuery.isLoading ? (
            <SkeletonGrid count={6} />
          ) : recentUsers.length === 0 ? (
            <EmptyState
              title="No students yet"
              description="Be the first to join! Create your profile to appear here."
              dataOcid="home.recently_joined.empty_state"
              action={
                !isAuthenticated
                  ? {
                      label: "Join Now",
                      onClick: () => navigate({ to: "/login" }),
                    }
                  : undefined
              }
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentUsers.map((user, i) => (
                <UserCard key={user.id} user={user} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="relative overflow-hidden border-t border-border/40 py-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--primary) / 0.05) 0%, oklch(var(--accent) / 0.07) 100%)",
        }}
        data-ocid="home.cta_section"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="absolute top-0 right-1/4 w-64 h-64 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, oklch(0.72 0.22 200) 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="max-w-2xl mx-auto px-4 text-center relative">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{
              background:
                "linear-gradient(135deg, oklch(var(--primary) / 0.15), oklch(var(--accent) / 0.12))",
            }}
          >
            <Users className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-3">
            Find your people
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            VIT-AP students from across India are already here. Your batchmates
            from back home might already be waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/discover">
              <Button
                size="lg"
                className="gap-2 w-full sm:w-auto transition-smooth shadow-elevated"
                data-ocid="home.bottom_discover_button"
              >
                <Compass className="w-4 h-4" />
                Start Discovering
              </Button>
            </Link>
            {!isAuthenticated && (
              <Button
                variant="outline"
                size="lg"
                className="gap-2 w-full sm:w-auto transition-smooth"
                onClick={() => navigate({ to: "/login" })}
                data-ocid="home.bottom_signin_button"
              >
                Sign In to Connect
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
