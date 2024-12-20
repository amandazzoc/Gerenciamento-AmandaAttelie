import path from "path";
import { promises as fs } from "fs";
import { taskSchema } from "./data/schema";
import { z } from "zod";
import { Metadata } from "next";
import Image from "next/image";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/pedidos/data/tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}


export default async function Pedidos(){
  const tasks = await getTasks();
    return (
      <main className="sm:ml-14 p-4">
        <section className="m-4 flex flex-col">
          <h1 className="mb-4 font-bold text-lg sm:text-xl">Pedidos</h1>
          <div className="md:hidden">
            <Image
              src="/imgs/table.png"
              width={1280}
              height={998}
              alt="Playground"
              className="block dark:hidden"
            />
            <Image
              src="/examples/tasks-dark.png"
              width={1280}
              height={998}
              alt="Playground"
              className="hidden dark:block"
            />
          </div>
          <div className="hidden h-full flex-1 flex-col  p-8 md:flex">
            <DataTable data={tasks} columns={columns} />
          </div>
        </section>
      </main>
    );
}