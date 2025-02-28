import { currentUser } from "@clerk/nextjs/server";
import { getWorkouts } from "@/server/queries";
import { BicepsFlexed } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { format } from "date-fns";

export async function WorkoutList() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  // Select all workouts
  const selectedWorkouts = await getWorkouts();

  return (
    <Card className="h-full max-w-lg flex-grow">
      <CardHeader>
        <CardTitle className="text-lg">Today&apos;s Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {selectedWorkouts.length === 0 ? (
          <div className="flex h-32 items-center justify-center text-muted-foreground">
            No workouts found
          </div>
        ) : (
          <div className="space-y-2">
            {selectedWorkouts.map((workout) => (
              <Link href={`#`} key={workout.id} className="block">
                <div className="group flex items-center rounded-lg bg-primary p-2 text-xs hover:bg-primary/80">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20">
                    <BicepsFlexed
                      size={14}
                      className="text-primary-foreground"
                    />
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <span className="font-medium text-primary-foreground">
                      {workout.name}
                    </span>
                    <span className="text-xs text-primary-foreground/80">
                      {format(new Date(workout.date), "MMM d, yyyy")}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
