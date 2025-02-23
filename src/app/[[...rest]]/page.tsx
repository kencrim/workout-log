import { SignIn, SignUp } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main className="flex min-h-full w-full items-center justify-center gap-12 px-4 py-16">
      <SignIn />
      <SignUp />
    </main>
  );
}
