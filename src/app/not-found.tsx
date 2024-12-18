import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-center font-bold mt-9 txt-6xl text-secondary">
        Página 404 não encontrada!
      </h1>
      <p>Essa página que tentou acessar não existe</p>
      <Button
        variant="secondary"
        className="bg-primary hover:bg-primary-foreground mt-5"
      >
        <Link href="/" className=" text-secondary font-bold">
          Voltar para Home
        </Link>
      </Button>
    </div>
  );
}
