import { Navbar } from "@/components/Navbar";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pb-16 sm:pb-0">{children}</main>
      <footer className="hidden sm:block bg-card border-t border-border/40 py-5 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()}. This is an student made website}
        </div>
      </footer>
    </div>
  );
}
