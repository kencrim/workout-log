"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/common/form/form-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { FormDateInput } from "@/components/common/form/form-date-input";
import { FormSelect } from "@/components/common/form/form-select";
import { FormSetInput } from "@/components/common/form/form-set-input";
import { Plus, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WorkoutExercisesField } from "./workout-exercises-field";

// Example exercises - in a real app, these would come from the database
const sampleExercises = [
  { id: "1", name: "Squat" },
  { id: "2", name: "Bench Press" },
  { id: "3", name: "Deadlift" },
  { id: "4", name: "Overhead Press" },
];

const setSchema = z.object({
  reps: z.string().optional(),
  weight: z.string().optional(),
});

const exerciseSchema = z.object({
  exerciseId: z.string().min(1, "Please select an exercise"),
  sets: z.array(setSchema).min(1, "Add at least one set"),
});

export const workoutSchema = z.object({
  name: z.string().min(1),
  date: z.date(),
  exercises: z.array(exerciseSchema),
});

type Exercise = {
  id: string;
  name: string;
};

export function WorkoutForm({
  action,
  exercises = sampleExercises,
  onSubmitComplete,
}: {
  action: (formData: FormData) => Promise<void>;
  exercises?: Exercise[];
  onSubmitComplete?: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof workoutSchema>>({
    resolver: zodResolver(workoutSchema),
    defaultValues: {
      name: "",
      date: new Date(),
      exercises: [],
    },
  });

  const { fields, append, remove, update } = useFieldArray({
    control: form.control,
    name: "exercises",
  });

  // Log the form data
  form.watch((value) => {
    console.log(value);
  });

  const handleSubmit = async (data: z.infer<typeof workoutSchema>) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("date", data.date.toISOString());

    // Add exercises data as JSON
    if (data.exercises) {
      formData.append("exercises", JSON.stringify(data.exercises));
    }

    await action(formData);
    setIsSubmitting(false);
    form.reset();
    onSubmitComplete?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        action={action}
        className="flex w-full flex-col gap-4"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput label="Name" name="name" control={form.control} />
          <FormDateInput label="Date" name="date" control={form.control} />
        </div>

        {/* Exercises Section */}
        <div className="mt-2 space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Exercises</h2>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() =>
                append({ exerciseId: "", sets: [{ reps: "", weight: "" }] })
              }
            >
              <Plus className="mr-1 h-4 w-4" /> Add Exercise
            </Button>
          </div>
          <WorkoutExercisesField
            form={form}
            onDelete={() => {}}
            exercises={fields}
          />
        </div>

        <Button
          variant="default"
          type="submit"
          disabled={isSubmitting}
          className="mt-4"
          size="lg"
        >
          {isSubmitting ? "Submitting..." : "Create Workout"}
        </Button>
      </form>
    </Form>
  );
}
