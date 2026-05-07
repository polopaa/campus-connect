import { ConnectModal } from "@/components/ConnectModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { UserProfile } from "@/types/user";
import { getYearLabel } from "@/types/user";
import { GraduationCap, MapPin, UserPlus } from "lucide-react";
import { useState } from "react";

interface UserCardProps {
  user: UserProfile;
  index?: number;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const AVATAR_COLORS = [
  "bg-primary/15 text-primary",
  "bg-accent/15 text-accent",
  "bg-chart-3/20 text-chart-3",
  "bg-chart-4/20 text-chart-4",
  "bg-chart-5/20 text-chart-5",
];

export function UserCard({ user, index = 0 }: UserCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const colorClass = AVATAR_COLORS[index % AVATAR_COLORS.length];
  const interests = user.interests
    ? user.interests
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean)
    : [];

  return (
    <>
      <Card
        className="shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-smooth border-border/60 bg-card group rounded-xl"
        data-ocid={`user.item.${index + 1}`}
      >
        <CardContent className="p-6">
          {/* Avatar + name row */}
          <div className="flex items-start gap-3 mb-4">
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${colorClass}`}
            >
              {getInitials(user.nickname)}
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="font-semibold text-card-foreground truncate font-display leading-tight">
                {user.nickname}
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <MapPin className="w-3 h-3 shrink-0" />
                <span className="truncate">
                  {user.city}, {user.state}
                </span>
              </div>
            </div>
          </div>

          {/* Branch + year */}
          <div className="space-y-1.5 mb-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <GraduationCap className="w-3.5 h-3.5 shrink-0 text-primary" />
              <span className="font-medium text-foreground truncate">
                {user.branch}
              </span>
            </div>
            <p className="text-xs text-muted-foreground pl-[1.125rem]">
              {getYearLabel(user.year)}
            </p>
          </div>

          {/* Interest tags */}
          {interests.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {interests.slice(0, 4).map((interest) => (
                <Badge
                  key={interest}
                  variant="secondary"
                  className="text-xs px-2 py-0.5 font-normal"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          )}

          <Button
            type="button"
            size="sm"
            className="w-full gap-1.5 group-hover:shadow-subtle transition-smooth"
            onClick={() => setModalOpen(true)}
            data-ocid={`user.connect_button.${index + 1}`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            Connect
          </Button>
        </CardContent>
      </Card>

      <ConnectModal
        user={user}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
