import { redirect } from "next/navigation";

import { Header } from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { createClient } from "@/lib/supabase/server";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[240px_1fr] bg-muted">
      <Sidebar>
        <main className="flex flex-col md:pr-4 md:py-2 lg:pr-8 lg:py-4">
          <div className="pb-24 md:pb-0">
            <div className="bg-background min-h-[calc(100svh_-_2rem)] rounded-3xl shadow-2xl overflow-hidden">
              <Header />
              <div className="p-6 md:p-8 space-y-8">
                <section>{children}</section>
              </div>
            </div>
          </div>
        </main>
      </Sidebar>
    </div>
  );
}
