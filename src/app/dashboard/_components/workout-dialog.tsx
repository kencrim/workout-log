"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="p-0 sm:max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                transition: {
                  duration: 0.2,
                },
              }}
              className="flex flex-col"
            >
              <DialogHeader className="border-b p-4">
                <DialogTitle>Add Workout</DialogTitle>
              </DialogHeader>

              <div className="max-h-[80vh] overflow-y-auto p-6">
                <WorkoutForm
                  action={async (formData) => {
                    console.log(formData);
                  }}
                  onSubmitComplete={onClose}
                />
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
