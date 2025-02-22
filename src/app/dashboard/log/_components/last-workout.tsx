"use client";
import { api } from "@/trpc/react";

export function LastWorkout() {
  const workouts = api.workout.getLatest.useQuery();
  return <div>LastWorkout: {workouts.data?.name}</div>;
}
