import Link from "next/link";

export default async function PostPage({}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to
      </Link>
      <h2>Not found</h2>
    </main>
  );
}
