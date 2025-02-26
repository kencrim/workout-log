"use client";

import { useState } from "react";
import { Dumbbell, Utensils } from "lucide-react";
import { AddButton } from "./add-button";
import { WorkoutDialog } from "@/app/dashboard/_components/workout-dialog";

export function AddButtonExample() {
  const [isWorkoutDialogOpen, setIsWorkoutDialogOpen] = useState(false);

  const options = [
    {
      label: "Add Workout",
      onClick: () => {
        console.log("Add workout clicked");
        setIsWorkoutDialogOpen(true);
      },
      icon: <Dumbbell className="mr-2 h-4 w-4" />,
    },
    {
      label: "Add Meal",
      onClick: () => {
        console.log("Add meal clicked");
        // Navigate to add meal page or open modal
      },
      icon: <Utensils className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <>
      <AddButton options={options} />
      <WorkoutDialog
        isOpen={isWorkoutDialogOpen}
        onClose={() => setIsWorkoutDialogOpen(false)}
      />
    </>
  );
}
