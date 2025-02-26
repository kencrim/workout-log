"use client";

import { AnimatePresence } from "motion/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { WorkoutForm } from "./workout-form";

import { createWorkoutAction } from "@/app/dashboard/actions";

interface WorkoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WorkoutDialog({ isOpen, onClose }: WorkoutDialogProps) {
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
                <WorkoutForm
                  action={createWorkoutAction}
                  onSubmitComplete={onClose}
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </AnimatePresence>
  );
}
