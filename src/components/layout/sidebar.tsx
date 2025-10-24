import {
  Building,
  Settings,
  LogOut,
  Trophy,
  Users,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

function NavLink({ href, icon: Icon, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-l-lg pl-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-white/60",
        className
      )}
    >
      <Icon className="h-5 w-5" />
      {children}
    </Link>
  );
}

interface SidebarProps {
  isAdmin?: boolean;
  children: React.ReactNode;
}

export default async function Sidebar({ isAdmin, children }: SidebarProps & PropsWithChildren) {
  return (
    <>
      <aside className="hidden md:block">
        <div className="flex h-full max-h-screen flex-col gap-4 pl-6 py-12">
          <Link
            href="/dashboard"
            className="flex items-center text-2xl pl-6 font-bold text-center text-orange-500 mb-6 space-x-2"
          >
            <div className="rounded-full h-8 w-8 bg-orange-400">
              <Avatar className="flex justify-center items-center h-8 w-8 text-white">
                <Trophy size={18} />
              </Avatar>
            </div>
            <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
              Leaguefy
            </h1>
          </Link>

          <nav className="flex flex-col flex-1 space-y-8 font-medium pl-4 mt-16">
            <NavLink
              href="/dashboard"
              className="bg-white hover:bg-black/10 hover:text-black"
              icon={LayoutGrid}
            >
              Dashboard
            </NavLink>
            {isAdmin && (
              <NavLink
                href="/organizations"
                className="hover:bg-violet-500/10 hover:text-violet-500"
                icon={Building}
              >
                Organizações
              </NavLink>
            )}
            <NavLink
              href="/tournaments"
              className="hover:bg-orange-500/10 hover:text-orange-500"
              icon={Trophy}
            >
              Torneios
            </NavLink>
            <NavLink
              href="/users"
              className="hover:bg-sky-500/10 hover:text-sky-500"
              icon={Users}
            >
              Usuários
            </NavLink>
          </nav>

          <div className="mt-auto pl-4 space-y-8">
            <NavLink
              href="/settings"
              className="hover:bg-slate-500/10 hover:text-slate-500"
              icon={Settings}
            >
              Configurações
            </NavLink>
            <NavLink
              href="/auth/login"
              className="hover:bg-red-500/10 hover:text-red-500"
              icon={LogOut}
            >
              Sair
            </NavLink>
          </div>
        </div>
      </aside>
      {children}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50
        border-t bg-background shadow-inner
      "
      >
        <div className="grid grid-cols-4 h-16 items-center justify-items-center px-4">
          <Link
            href="/dashboard"
            className="flex flex-col items-center gap-1 text-primary"
          >
            <LayoutGrid className="h-6 w-6" />
            <span className="text-xs font-medium">Início</span>
          </Link>
          <Link
            href="/dashboard/leagues"
            className="flex flex-col items-center gap-1 text-muted-foreground"
          >
            <Trophy className="h-6 w-6" />
            <span className="text-xs font-medium">Torneios</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex flex-col items-center gap-1 text-muted-foreground"
          >
            <Settings className="h-6 w-6" />
            <span className="text-xs font-medium">Ajustes</span>
          </Link>
          <Link
            href="/login"
            className="flex flex-col items-center gap-1 text-muted-foreground"
          >
            <LogOut className="h-6 w-6" />
            <span className="text-xs font-medium">Sair</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
