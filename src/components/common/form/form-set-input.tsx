import { Button } from "@/components/ui/button";
import { FormInput } from "./form-input";
import { Control } from "react-hook-form";
import { X } from "lucide-react";

export function FormSetInput({
  exerciseIndex,
  setIndex,
  control,
  onRemove,
}: {
  exerciseIndex: number;
  setIndex: number;
  control: Control<any>;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1">
        <FormInput
          label="Reps"
          name={`exercises.${exerciseIndex}.sets.${setIndex}.reps`}
          type="number"
          control={control}
        />
      </div>
      <div className="flex-1">
        <FormInput
          label="Weight"
          name={`exercises.${exerciseIndex}.sets.${setIndex}.weight`}
          type="number"
          step="0.5"
          control={control}
        />
      </div>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={onRemove}
        className="mt-6"
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
}
