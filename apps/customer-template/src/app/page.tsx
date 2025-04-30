import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col gap-6">
      <h1 className="text-3xl font-bold">Welcome to Fresh Naan Bakerys Ordering Site</h1>
      <Button>Order Now</Button>
    </main>
  );
}
