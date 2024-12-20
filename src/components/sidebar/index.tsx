import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Image from "next/image"
import Link from "next/link";
import { Home, LogOut, Menu, Package, PanelBottom, Settings2, ShoppingBag, Users } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";


export function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-primary">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-primary sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href="/"
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
            >
              <Image
                src="/imgs/logo-solo-claroli.jpg"
                alt="Logo Amanda Attelie"
                width={70}
                height={70}
                className="rounded-full"
              />
              <span className="sr-only">Logo</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-secondary hover:bg-primary-foreground"
                >
                  <Home className="h-5 w-6" />
                  <span className="sr-only">Início</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/pedidos"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-secondary hover:bg-primary-foreground"
                >
                  <ShoppingBag className="h-5 w-6" />
                  <span className="sr-only">Pedidos</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Pedidos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/produtos"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-secondary hover:bg-primary-foreground"
                >
                  <Package className="h-5 w-6" />
                  <span className="sr-only">Produtos</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Produtos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/clientes"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-secondary hover:bg-primary-foreground"
                >
                  <Users className="h-5 w-6" />
                  <span className="sr-only">Clientes</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Clientes</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/configuracoes"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-secondary hover:bg-primary-foreground"
                >
                  <Settings2 className="h-5 w-6" />
                  <span className="sr-only">Configurações</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Configurações</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/login"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground hover:bg-primary-foreground"
                >
                  <LogOut className="h-5 w-6 text-red-600" />
                  <span className="sr-only">Sair</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14 ">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between px-4 border-b bg-primary gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="sm:hidden bg-primary ml-auto hover:bg-primary-foreground rounded-full"
              >
                <Menu className="w-5 h-5" color="#5A177E" />
                <span className="sr-only">Abrir / Fechar Menu</span>{" "}
                {/* O sr-only faz o texto ficar escondido e serve apenas para ser lido em acessibilidade */}
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="sm:max-w-x w-60 flex flex-col"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>

              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="h-12 w-12 rounded-full"
                  prefetch={false}
                >
                  <Image
                    src="/imgs/logo-solo-claroli.jpg"
                    alt="Logo Amanda Attelie"
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                  <span className="sr-only">Logo</span>
                </Link>

                <Link
                  href="/"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-secondary"
                  prefetch={false}
                >
                  <Home className="h-5 w-5 transition-all " />
                  Inicio
                </Link>

                <Link
                  href="/pedidos"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-secondary"
                  prefetch={false}
                >
                  <ShoppingBag className="h-5 w-5 transition-all " />
                  Pedidos
                </Link>

                <Link
                  href="/produtos"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-secondary"
                  prefetch={false}
                >
                  <Package className="h-5 w-5 transition-all " />
                  Produtos
                </Link>

                <Link
                  href="/clientes"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-secondary"
                  prefetch={false}
                >
                  <Users className="h-5 w-5 transition-all " />
                  Clientes
                </Link>

                <Link
                  href="/configuracoes"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-secondary"
                  prefetch={false}
                >
                  <Settings2 className="h-5 w-5 transition-all " />
                  Configurações
                </Link>
              </nav>
              <nav className="mt-auto grid gap-6 text-lg font-medium">
                <Link
                  href="/login"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <LogOut className="h-5 w-5 transition-all text-red-600 hover:text-red-800" />
                  <p className="text-red-600">Sair</p>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Image
            src="/imgs/logo-solo-claroli.jpg"
            alt="Logo Amanda Attelie"
            width={50}
            height={50}
            className="rounded-full absolute left-1/2 transform -translate-x-1/2"
          />
        </header>
      </div>
    </div>
  );
}
