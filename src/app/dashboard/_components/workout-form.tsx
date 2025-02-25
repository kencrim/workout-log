"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/common/form/form-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { FormDateInput } from "@/components/common/form/form-date-input";

const workoutSchema = z.object({
  name: z.string().min(1),
  date: z.date(),
});

export function WorkoutForm({
  action,
}: {
  action: (formData: FormData) => Promise<void>;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof workoutSchema>>({
    resolver: zodResolver(workoutSchema),
    defaultValues: {
      name: "",
      date: new Date(),
    },
  });

  const handleSubmit = async (data: z.infer<typeof workoutSchema>) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("date", data.date.toISOString());
    await action(formData);
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        action={action}
        className="flex max-w-80 flex-col gap-4 rounded-lg border border-slate-200 bg-slate-800 p-4"
      >
        <h1 className="text-xl font-semibold">Add Workout</h1>

        <FormInput label="Name" name="name" control={form.control} />

        <FormDateInput label="Date" name="date" control={form.control} />

        <Button variant="default" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Create"}
        </Button>
      </form>
    </Form>
  );
}
