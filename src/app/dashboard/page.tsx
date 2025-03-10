import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { WorkoutList } from "./_components/workout-list";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  // Format current date TODO: move to utils, and unify date across app
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="flex flex-shrink border-b-2 border-b-primary pr-6 text-lg font-semibold">
          Welcome back,
          <span className="ml-1 text-primary">{user.firstName}</span>
        </h1>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{formattedDate}</span>
          <Link href="/dashboard/log">
            <Button size="sm" variant="ghost" className="text-primary">
              <Calendar className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex w-full gap-4 p-8">
        <Suspense fallback={<div>Loading...</div>}>
          <WorkoutList />
        </Suspense>
      </div>
    </div>
  );
}
