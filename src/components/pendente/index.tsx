import { Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ClientCard from "../clientCard";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "../../app/pedidos/data/schema";

async function getData() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/pedidos/data/tasks.json")
  );

  const order = JSON.parse(data.toString());

  return z.array(taskSchema).parse(order);
}

export default async function Pendentes() {

  const orders = await getData()

  const pendingOrders = orders.filter(
    (order) => order.status === "in progress"
  );

  return (
    <Card>
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
        {pendingOrders.length > 0 ? (
          pendingOrders.map((order) => (
            <ClientCard
            key={order.id} 
            name={order.cliente}
            description={order.title}
            price={`R$ ${order.price}`}
        />
          ))
        ) : (
          <p className="text-gray-500">Nenhum pedido pendente</p>
        )}
      </CardContent>
    </Card>
  );
}
