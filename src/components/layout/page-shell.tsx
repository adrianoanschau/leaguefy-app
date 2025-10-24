import { Header } from "@/components/layout/header";

interface PageShellProps {
  title: string;
  children: React.ReactNode;
}

export async function PageShell({
    title,
  children,
}: PageShellProps) {
  return (
    <main className="flex flex-col md:pr-4 md:py-2 lg:pr-8 lg:py-4">
        <div className="pb-24 md:pb-0">
        <div className="bg-background min-h-[calc(100svh_-_2rem)] rounded-3xl shadow-2xl overflow-hidden">
            <Header title={title} />
            <div className="p-6 md:p-8 space-y-8">
            <section>{children}</section>
            </div>
        </div>
        </div>
    </main>
  );
}
