import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Welcome back, {user.firstName}</h1>
      <h3>Here&apos;s your workout schedule for the day</h3>
    </div>
  );
}
