import Meeting from "../pages/meeting";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/meeting")({
  component: Meeting,
});
