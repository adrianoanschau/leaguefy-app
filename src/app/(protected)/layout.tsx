import { redirect } from "next/navigation";

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
        {children}
      </Sidebar>
    </div>
  );
}
