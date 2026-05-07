import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Compass, Home, LogIn, LogOut, User } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home", icon: Home, public: true },
  { to: "/discover", label: "Discover", icon: Compass, public: false },
  { to: "/profile", label: "Profile", icon: User, public: false },
];

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const visibleLinks = NAV_LINKS.filter((l) => l.public || isAuthenticated);

  return (
    <>
      {/* Desktop sticky top navbar */}
      <header
        className="hidden sm:block sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/50"
        data-ocid="navbar"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0 group"
            data-ocid="navbar.logo_link"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-subtle group-hover:shadow-card transition-smooth">
              <Compass className="w-4.5 h-4.5 text-primary-foreground" />
            </div>
            <span className="font-bold text-[15px] font-display text-foreground tracking-tight group-hover:text-primary transition-smooth">
              CampusConnect
            </span>
          </Link>

          {/* Center nav links */}
          <nav
            className="flex items-center gap-0.5"
            aria-label="Main navigation"
          >
            {visibleLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPath === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-smooth group ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                  data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 transition-smooth ${
                      isActive ? "text-primary" : "group-hover:text-foreground"
                    }`}
                  />
                  {link.label}
                  {/* Active underline indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Auth controls */}
          <div className="flex items-center gap-2 shrink-0">
            {isAuthenticated ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="gap-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-smooth text-sm"
                data-ocid="navbar.logout_button"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign out
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={() => navigate({ to: "/login" })}
                className="gap-1.5 rounded-full px-5 text-sm font-medium shadow-subtle hover:shadow-card transition-smooth"
                data-ocid="navbar.login_button"
              >
                <LogIn className="w-3.5 h-3.5" />
                Sign in
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav
        className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border/50"
        aria-label="Mobile navigation"
        data-ocid="mobile_nav"
      >
        <div className="flex items-stretch pb-safe">
          {visibleLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentPath === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-smooth"
                data-ocid={`mobile_nav.${link.label.toLowerCase()}_link`}
              >
                <span
                  className={`flex items-center justify-center w-10 h-6 rounded-full transition-smooth ${
                    isActive ? "bg-primary/15" : ""
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-smooth ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </span>
                <span
                  className={`text-[10px] font-semibold tracking-wide transition-smooth ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile top bar (logo + auth) */}
      <header
        className="sm:hidden sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/50"
        data-ocid="mobile_header"
      >
        <div className="px-4 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="mobile_header.logo_link"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-subtle">
              <Compass className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-[15px] font-display text-foreground tracking-tight">
              CampusConnect
            </span>
          </Link>
          {isAuthenticated ? (
            <button
              type="button"
              onClick={logout}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive transition-smooth p-1.5 rounded-md hover:bg-destructive/10"
              data-ocid="mobile_header.logout_button"
            >
              <LogOut className="w-4 h-4" />
            </button>
          ) : (
            <Button
              size="sm"
              onClick={() => navigate({ to: "/login" })}
              className="gap-1 rounded-full px-4 text-xs font-medium"
              data-ocid="mobile_header.login_button"
            >
              <LogIn className="w-3 h-3" />
              Sign in
            </Button>
          )}
        </div>
      </header>
    </>
  );
}
