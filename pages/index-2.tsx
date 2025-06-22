import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">My Finance Dashboard</h1>
      <Link href="/dashboard">
        <a className="px-4 py-2 bg-blue-600 text-white rounded">Go to Dashboard</a>
      </Link>
    </main>
  );
}