import { Github, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { login, oauthSignIn } from "./actions";

// Esta página recebe 'searchParams' para exibir mensagens de erro
export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const googleSignIn = oauthSignIn.bind(null, "google");
  const githubSignIn = oauthSignIn.bind(null, "github");

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-muted/40 p-4
                    bg-gradient-to-br from-slate-300 via-gray-100 to-slate-100"
    >
      <Card className="w-full max-w-md shadow-xl backdrop-blur-xl bg-white/20 border-4 border-white/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Leaguefy
          </CardTitle>
          <CardDescription className="pt-2">
            Acesse sua conta para gerenciar suas ligas
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-6">
          {/* Botões OAuth */}
          <div className="grid grid-cols-2 gap-4">
            <form action={googleSignIn}>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Google
              </Button>
            </form>
            <form action={githubSignIn}>
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </form>
          </div>

          {/* Separador "OU" */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>

          {/* Formulário de E-mail e Senha */}
          <form action={login} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email" // 'name' é crucial para Server Actions
                type="email"
                placeholder="nome@exemplo.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password" // 'name' é crucial
                type="password"
                required
              />
            </div>

            {/* Exibição de Erro */}
            {searchParams.message && (
              <p className="text-sm font-medium text-destructive">
                {searchParams.message}
              </p>
            )}

            <Button type="submit" className="w-full font-bold">
              Login
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center text-sm">
          <p>
            Não tem uma conta?{" "}
            <a
              href="/signup"
              className="font-medium text-primary hover:underline"
            >
              Cadastre-se
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
