"use server";

import { createWorkout } from "@/server/queries";

export async function createWorkoutAction(formData: FormData) {
  const name = formData.get("name") as string;
  const date = formData.get("date") as string;
  if (!name || !date) {
    throw new Error("Invalid form data");
  }
  await createWorkout({ name, date });
}
