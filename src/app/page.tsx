import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <SignedIn>Welcome back!</SignedIn>
        <SignedOut>Please sign in to continue</SignedOut>
      </div>
    </main>
  );
}
