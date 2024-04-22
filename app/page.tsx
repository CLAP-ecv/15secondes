import { PrismaClient } from "@prisma/client";

export default async function Home() {

  const prisma = new PrismaClient()
  const tests = await prisma.test.findMany();
  return (
    <main className="flex flex-col items-center justify-between">
      <pre>{JSON.stringify(tests, null, 2)}</pre>
    </main>
  );
}
