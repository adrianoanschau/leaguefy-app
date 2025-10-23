import { Users, Swords, BarChart3 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header (Navegação) */}
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Leaguefy
          </Link>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Cadastre-se</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <main className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              A Plataforma Definitiva para suas Ligas e Torneios
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground">
              Deixe as planilhas para trás. Gerencie inscrições, crie chaves e
              acompanhe resultados em tempo real.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button size="lg" asChild>
                <Link href="/signup">Comece Agora (É Grátis)</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Ver Recursos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 3. Features Section (Recursos) */}
        <section
          id="features"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-muted/30 rounded-lg"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ferramentas poderosas para organizadores de todos os tamanhos.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {/* Recurso 1 */}
            <Card>
              <CardHeader className="items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="pt-4">Inscrições Simplificadas</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Crie páginas de inscrição personalizadas e gerencie
                  participantes ou equipes com facilidade.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Recurso 2 */}
            <Card>
              <CardHeader className="items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Swords className="h-8 w-8" />
                </div>
                <CardTitle className="pt-4">Geração de Chaves</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Suporte para eliminação simples, dupla, pontos corridos e
                  mais. Gere chaves automaticamente.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Recurso 3 */}
            <Card>
              <CardHeader className="items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <CardTitle className="pt-4">Resultados em Tempo Real</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Atualize os placares e deixe que os participantes acompanhem
                  as classificações e próximos jogos ao vivo.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 4. Final CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Pronto para elevar seu torneio?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comece a organizar sua primeira competição em minutos.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/signup">Crie sua liga agora</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Footer (Rodapé) */}
      <footer className="border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Leaguefy. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
