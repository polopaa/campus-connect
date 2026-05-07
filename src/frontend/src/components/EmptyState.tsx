import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import type { ReactNode } from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  dataOcid?: string;
}

export function EmptyState({
  title = "No students found",
  description = "Try adjusting your filters or check back later.",
  icon,
  action,
  dataOcid = "empty_state",
}: EmptyStateProps) {
  return (
    <div
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
      data-ocid={dataOcid}
    >
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        {icon ?? <Users className="w-7 h-7 text-muted-foreground" />}
      </div>
      <h3 className="text-lg font-semibold font-display text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground max-w-xs mb-6">
        {description}
      </p>
      {action && (
        <Button variant="outline" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
