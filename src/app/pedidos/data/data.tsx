import { ArrowDown, ArrowRight, ArrowUp, CheckCircle, CircleOff, StopCircle, Timer, TimerReset } from "lucide-react";

export const labels = [
  {
    value: "croche",
    label: "Crochê",
  },
  {
    value: "amigurumi",
    label: "Amigurumi",
  },
  {
    value: "nordado",
    label: "Bordado",
  },
  {
    value: "outro",
    label: "Outro"
  }
];

export const statuses = [
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "pending",
    label: "Pending",
    icon: TimerReset,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CircleOff,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
  },
];