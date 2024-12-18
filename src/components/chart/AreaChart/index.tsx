"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip,ChartTooltipContent} from "@/components/ui/chart";

const chartData = [
  { mes: "Julho", croche: 186, amigurumi: 100 },
  { mes: "Agosto", croche: 305, amigurumi: 200 },
  { mes: "Setembro", croche: 237, amigurumi: 120 },
  { mes: "Outubro", croche: 73, amigurumi: 190 },
  { mes: "Novembro", croche: 209, amigurumi: 130 },
  { mes: "Dezembro", croche: 214, amigurumi: 140 },
];

const chartConfig = {
  croche: {
    label: "Crochê",
    color: "#5A177E",
  },
  amigurumi: {
    label: "Amigurumi",
    color: "#f8cffc",
  },
} satisfies ChartConfig;

export function AreaChartOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Faturamento</CardTitle>
        <CardDescription>Faturamento total nos últimos 6 meses</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="mes"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)} // Apenas primeiros 3 caracteres do mês
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="percentage"
                />
              }
            />
            <Area
              dataKey="croche"
              type="natural"
              fill="#5A177E"
              fillOpacity={0.4}
              stroke="#5A177E"
              stackId="a"
            />
            <Area
              dataKey="amigurumi"
              type="natural"
              fill="#f8cffc"
              fillOpacity={0.4}
              stroke="#f8cffc"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Julho - Dezembro 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
