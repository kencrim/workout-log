import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex w-full justify-between border-b p-4 font-semibold">
      <div className="flex items-center gap-2">
        <Link
          className="text-xl font-semibold text-primary hover:text-primary/80"
          href="/"
        >
          Vita
        </Link>
        |
        <h2 className="text-lg font-medium">
          fitness tracking, minus the 🐂💩
        </h2>
      </div>
      <div className="flex gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
