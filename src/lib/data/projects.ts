export type Project = {
  id: string;
  name: string;
  description: string;
  status: "active" | "paused" | "completed";
};

export const projects: Project[] = [
  {
    id: "sprintboard-launch",
    name: "SprintBoard Launch",
    description: "Prepare SprintBoard for its first release.",
    status: "active",
  },
  {
    id: "website-redesign",
    name: "Website Redesign",
    description: "Refresh the marketing website and content.",
    status: "paused",
  },
  {
    id: "client-portal",
    name: "Client Portal",
    description: "Deliver the first client-facing workspace.",
    status: "completed",
  },
];
