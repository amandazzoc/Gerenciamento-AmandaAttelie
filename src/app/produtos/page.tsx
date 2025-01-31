import { promises as fs } from "fs";
import { Metadata } from "next";
import path from "path";
import { z } from "zod";
import { columns } from "./components/Table/columns";
import { DataTable } from "./components/Table/data-table";
import { productsSchema } from "./data/schema";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Tabela de produtos usando Tanstack Table.",
};

async function getProducts() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/produtos/data/products.json")
  );

  const products = JSON.parse(data.toString());

  return z.array(productsSchema).parse(products);
}

export default async function Pedidos() {
  const products = await getProducts();
  return (
    <main className="sm:ml-14 p-4">
      <section className="m-4 flex flex-col">
        <div className="h-full flex-1 flex-col md:p-8">
          <DataTable data={products} columns={columns} />
        </div>
      </section>
    </main>
  );
}
