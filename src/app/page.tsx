import { AreaChartOverview } from "@/components/chart/AreaChart";
import PieChartOverview from "@/components/chart/PieChart";

import Pendentes from "@/components/pendente";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid lg:grid-cols-3 gap-4">
        <Pendentes />
        <PieChartOverview />
        <AreaChartOverview/>
      </section>
    
    </main>
  );
}
