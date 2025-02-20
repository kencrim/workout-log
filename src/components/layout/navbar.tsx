import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full justify-between border-b p-4 font-semibold">
      <Link href="/">Workout Logger</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}
