import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";
import { useNavigate } from "@tanstack/react-router";
import { GraduationCap, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const { isAuthenticated, login, signup, loginError } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [signupSuccess, setSignupSuccess] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/discover" });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    setSignupSuccess(false);
    if (!email.trim() || !password.trim()) {
      setLocalError("Please enter your email and password.");
      return;
    }
    setIsLoading(true);
    try {
      if (tab === "signin") {
        await login(email, password);
      } else {
        await signup(email, password);
        setSignupSuccess(true);
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      if (err instanceof Error) setLocalError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const displayError = localError ?? loginError;

  return (
    <div
      className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12"
      data-ocid="login.page"
    >
      {/* Background accent blobs */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="w-full max-w-sm relative"
      >
        {/* Logo + wordmark */}
        <div className="flex flex-col items-center mb-8 gap-3">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-elevated">
            <GraduationCap
              className="w-7 h-7 text-primary-foreground"
              strokeWidth={2}
            />
          </div>
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">
              CampusConnect
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Find students from your home state or city
            </p>
          </div>
        </div>

        {/* Auth card */}
        <Card className="border border-border shadow-card bg-card">
          <CardContent className="pt-8 pb-7 px-7">
            {/* Tab toggle */}
            <div className="flex rounded-lg bg-muted p-1 mb-6" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={tab === "signin"}
                onClick={() => {
                  setTab("signin");
                  setLocalError(null);
                  setSignupSuccess(false);
                }}
                className={`flex-1 rounded-md py-1.5 text-sm font-medium transition-colors ${
                  tab === "signin"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-ocid="login.signin_tab"
              >
                Sign In
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === "signup"}
                onClick={() => {
                  setTab("signup");
                  setLocalError(null);
                  setSignupSuccess(false);
                }}
                className={`flex-1 rounded-md py-1.5 text-sm font-medium transition-colors ${
                  tab === "signup"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-ocid="login.signup_tab"
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@college.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  data-ocid="login.email_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete={
                    tab === "signin" ? "current-password" : "new-password"
                  }
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  data-ocid="login.password_input"
                />
              </div>

              {displayError && (
                <p
                  className="text-sm text-destructive"
                  data-ocid="login.error_state"
                >
                  {displayError}
                </p>
              )}

              {signupSuccess && (
                <p
                  className="text-sm text-green-600 dark:text-green-400"
                  data-ocid="login.success_state"
                >
                  Account created! Check your email to confirm, then sign in.
                </p>
              )}

              <Button
                type="submit"
                className="w-full h-11 text-sm font-semibold gap-2 transition-smooth"
                disabled={isLoading}
                data-ocid="login.submit_button"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {tab === "signin" ? "Signing in…" : "Creating account…"}
                  </>
                ) : tab === "signin" ? (
                  "Sign In"
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          By signing in you agree to our community guidelines.
        </p>
      </motion.div>
    </div>
  );
}
