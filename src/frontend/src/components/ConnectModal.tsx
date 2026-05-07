import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { UserProfile } from "@/types/user";
import { getYearLabel } from "@/types/user";
import { GraduationCap, Mail, MapPin } from "lucide-react";

interface ConnectModalProps {
  user: UserProfile | null;
  open: boolean;
  onClose: () => void;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function ConnectModal({ user, open, onClose }: ConnectModalProps) {
  if (!user) return null;

  const interests = user.interests
    ? user.interests
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean)
    : [];

  const hasContact = !!user.contact?.trim();

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md" data-ocid="connect.dialog">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold font-display">
            Connect with {user.nickname}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Avatar + Name */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/15 text-primary flex items-center justify-center text-sm font-semibold shrink-0">
              {getInitials(user.nickname)}
            </div>
            <div>
              <p className="font-semibold text-foreground font-display">
                {user.nickname}
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                <MapPin className="w-3 h-3 shrink-0" />
                <span>
                  {user.city}, {user.state}
                </span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Details */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="w-4 h-4 text-primary shrink-0" />
              <span className="font-medium text-foreground">{user.branch}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">
                {getYearLabel(user.year)}
              </span>
            </div>

            {interests.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {interests.map((interest) => (
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
          </div>

          <Separator />

          {/* Contact Info */}
          <div data-ocid="connect.contact_section">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">
                Contact Info
              </span>
            </div>
            {hasContact ? (
              <p
                className="text-sm text-foreground bg-muted/50 border border-border/50 rounded-lg px-3 py-2 break-words"
                data-ocid="connect.contact_info"
              >
                {user.contact}
              </p>
            ) : (
              <p
                className="text-sm text-muted-foreground italic"
                data-ocid="connect.no_contact"
              >
                No contact info available
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
