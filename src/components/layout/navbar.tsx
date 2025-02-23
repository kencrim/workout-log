import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex w-full justify-between border-b p-4 font-semibold">
      <Link href="/">Workout Logger</Link>
      <div className="flex gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
