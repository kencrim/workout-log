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
import { useActionState } from "react";
import { Plus, X } from "lucide-react";

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

const workoutSchema = z.object({
  name: z.string().min(1),
  date: z.date(),
  exercises: z.array(exerciseSchema).optional(),
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

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "exercises",
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

  // Function to add a set to an exercise
  const addSet = (exerciseIndex: number) => {
    const exercises = form.getValues("exercises") || [];
    if (exercises && exercises[exerciseIndex]) {
      const updatedExercises = [...exercises];
      const currentExercise = updatedExercises[exerciseIndex] as z.infer<
        typeof exerciseSchema
      >;
      const sets = currentExercise.sets || [];
      currentExercise.sets = [...sets, { reps: "", weight: "" }];
      form.setValue("exercises", updatedExercises);
    }
  };

  // Function to remove a set from an exercise
  const removeSet = (exerciseIndex: number, setIndex: number) => {
    const exercises = form.getValues("exercises") || [];
    if (exercises && exercises[exerciseIndex]) {
      const currentExercise = exercises[exerciseIndex] as z.infer<
        typeof exerciseSchema
      >;
      if (currentExercise.sets && currentExercise.sets.length > 1) {
        const updatedExercises = [...exercises];
        const updatedExercise = updatedExercises[exerciseIndex] as z.infer<
          typeof exerciseSchema
        >;
        updatedExercise.sets.splice(setIndex, 1);
        form.setValue("exercises", updatedExercises);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        action={action}
        className="flex w-full flex-col gap-3"
      >
        <FormInput label="Name" name="name" control={form.control} />

        <FormDateInput label="Date" name="date" control={form.control} />

        {/* Exercises Section */}
        <div className="space-y-3">
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

          {fields.map((field, exerciseIndex) => (
            <div
              key={field.id}
              className="space-y-2 rounded-md border border-border/70 p-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <FormSelect
                    label="Exercise"
                    name={`exercises.${exerciseIndex}.exerciseId`}
                    control={form.control}
                    options={exercises.map((exercise) => ({
                      value: exercise.id,
                      label: exercise.name,
                    }))}
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="ml-2 mt-6"
                  onClick={() => remove(exerciseIndex)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Sets Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Sets</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addSet(exerciseIndex)}
                  >
                    <Plus className="mr-1 h-3 w-3" /> Add Set
                  </Button>
                </div>

                {form
                  .watch(`exercises.${exerciseIndex}.sets`)
                  ?.map((set, setIndex) => (
                    <FormSetInput
                      key={setIndex}
                      exerciseIndex={exerciseIndex}
                      setIndex={setIndex}
                      control={form.control}
                      onRemove={() => removeSet(exerciseIndex, setIndex)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="default"
          type="submit"
          disabled={isSubmitting}
          className="mt-2"
        >
          {isSubmitting ? "Submitting..." : "Create"}
        </Button>
      </form>
    </Form>
  );
}
