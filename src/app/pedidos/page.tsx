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
          <div className="h-full flex-1 flex-col md:p-8">
            <DataTable data={tasks} columns={columns} />
          </div>
        </section>
      </main>
    );
}