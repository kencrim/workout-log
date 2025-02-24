import { createWorkout } from "@/server/queries";

export function WorkoutForm() {
  return (
    <div>
      <form
        action={async (formData) => {
          "use server";
          const name = formData.get("name") as string;
          const date = formData.get("date") as string;
          if (!name || !date) {
            throw new Error("Invalid form data");
          }
          await createWorkout({ name, date });
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="bg-zinc-600" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" className="bg-zinc-600" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
