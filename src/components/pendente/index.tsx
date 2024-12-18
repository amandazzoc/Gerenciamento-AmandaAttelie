import { Clock, Clock1, DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ClientCard from "@/components/ClientCard"

export default function Pendentes() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Pedidos Pendentes
          </CardTitle>
          <Clock className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>Pedidos que estão na fase de produção</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <ClientCard
          name="Tainá Passos"
          image="/imgs/top-quadrado.png"
          description="Top Quadrado"
          price="R$ 50"
        />
        <ClientCard
          name="Julia Morais"
          image="/imgs/top-julia.jpg"
          description="Cropped Lia"
          price="R$ 70"
        />
        <ClientCard
          name="Leandra"
          image="/imgs/jogo-americano.jpg"
          description="Jogo Americano"
          price="R$ 230"
        />
      </CardContent>
    </Card>
  );
}
