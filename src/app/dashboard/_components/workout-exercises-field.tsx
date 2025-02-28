import { FormSelect } from "@/components/common/form/form-select";
import { AccordionContent } from "@/components/ui/accordion";

import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useFieldArray } from "react-hook-form";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { workoutSchema } from "./workout-form";
import { FormSetInput } from "@/components/common/form/form-set-input";
import { useState } from "react";

// Example exercises - in a real app, these would come from the database
const sampleExercises = [
  { id: "1", name: "Squat" },
  { id: "2", name: "Bench Press" },
  { id: "3", name: "Deadlift" },
  { id: "4", name: "Overhead Press" },
];

export function WorkoutExercisesField({
  form,
  onDelete,
  exercises,
}: {
  form: UseFormReturn<z.infer<typeof workoutSchema>>;
  onDelete: (exerciseIndex: number) => void;
  exercises: z.infer<typeof workoutSchema>["exercises"];
}) {
  const [openExercises, setOpenExercises] = useState<string[]>([]);

  return (
    <Accordion
      type="multiple"
      value={openExercises}
      onValueChange={setOpenExercises}
    >
      {exercises?.map((exercise, exerciseIndex) => (
        <AccordionItem
          // TODO: This dum, need a real key
          key={exerciseIndex}
          value={exerciseIndex.toString()}
          className="rounded-md border border-border/70 px-2 py-1"
        >
          <div className="flex items-center justify-between">
            <AccordionTrigger>
              <div className="flex-1">Hello</div>
            </AccordionTrigger>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => onDelete(exerciseIndex)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <AccordionContent>
            <FormSelect
              label="Exercise"
              name={`exercises.${exerciseIndex}.exerciseId`}
              control={form.control}
              options={sampleExercises.map((exercise) => ({
                value: exercise.id,
                label: exercise.name,
              }))}
            />
            {/* Sets Section */}
            <ExerciseSetSection
              exerciseIndex={exerciseIndex}
              form={form}
              onAdd={() => {}}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function ExerciseSetSection({
  exerciseIndex,
  form,
}: {
  exerciseIndex: number;
  form: UseFormReturn<z.infer<typeof workoutSchema>>;
  onAdd: () => void;
}) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: `exercises.${exerciseIndex}.sets`,
  });

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Sets</h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({})}
        >
          <Plus className="mr-1 h-3 w-3" /> Add Set
        </Button>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {fields.map((set, setIndex) => (
          <FormSetInput
            key={setIndex}
            exerciseIndex={exerciseIndex}
            setIndex={setIndex}
            control={form.control}
            onRemove={() => remove(setIndex)}
          />
        ))}
      </div>
    </div>
  );
}
