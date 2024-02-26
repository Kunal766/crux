import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { MoreHorizontal } from "lucide-react";

const data = [
    {
        name: "Jan",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Feb",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Mar",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Apr",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "May",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
]

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

type CardProps = React.ComponentProps<typeof Card>

export default function Chart_Bar({ className, ...props }: CardProps) {
    return (
        <Card className={cn(className)} {...props}>
            <CardHeader>
                <div className='flex flex-row justify-between'><div className='flex flex-row gap-2 font-bold'><span>7d</span><span>14d</span><span>30d</span></div><MoreHorizontal /></div>
            </CardHeader>
            <CardContent className="p-0 flex justify-center items-center">

                <BarChart data={data} width={150} height={190}>
                    <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={8}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#888888"
                        fontSize={8}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Bar

                        dataKey="total"
                        radius={[4, 4, 4, 4]}                    >
                        {data.map((_, index) => (
                            <Cell cursor="pointer" key={`cell-${index}`} fill={colors[index % 6]} />
                        ))}</Bar>
                </BarChart></CardContent>
        </Card>

    )
}