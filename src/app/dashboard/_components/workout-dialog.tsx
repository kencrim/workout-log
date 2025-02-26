"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { WorkoutForm } from "./workout-form";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorkoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WorkoutDialog({ isOpen, onClose }: WorkoutDialogProps) {
  // Mock action for the form - replace with actual server action
  const handleFormSubmit = async (formData: FormData) => {
    console.log("Form submitted:", Object.fromEntries(formData.entries()));
    // Here you would typically call a server action to save the workout
    // await createWorkout(formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent
            side="left"
            className="w-[400px] max-w-[90vw] rounded-r-xl border-r p-0 sm:max-w-[400px]"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b p-4">
                <SheetHeader className="text-left">
                  <SheetTitle>Add Workout</SheetTitle>
                </SheetHeader>
              </div>

              <div className="flex-1 overflow-auto p-6">
                <WorkoutForm action={handleFormSubmit} />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </AnimatePresence>
  );
}
