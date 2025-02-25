import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control, FieldValues } from "react-hook-form";
import { InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
  name: string;
  control: Control<any>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name">;

export function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  control,
  ...props
}: InputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
