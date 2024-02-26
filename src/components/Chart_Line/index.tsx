import './style.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { MoreHorizontal } from 'lucide-react';


const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

type CardProps = React.ComponentProps<typeof Card>


export default function Chart_Line({ className }: CardProps) {
    return (
        <Card className={cn(className)} >
            <CardHeader>
                <div className='flex flex-row justify-between'><div className='flex flex-row gap-2 font-bold'><span>7d</span><span>14d</span><span>30d</span></div><MoreHorizontal /></div>
            </CardHeader>
            <CardContent>

                <LineChart className='mx-[-20px]'
                    width={211}
                    height={190}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid horizontal={false} />

                    <XAxis dataKey="name"
                        stroke="#888888"
                        fontSize={8}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`} />
                    <YAxis
                        stroke="#888888"
                        fontSize={8}
                        tickLine={false}
                        axisLine={false} />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={5} dot={false} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={5} dot={false} />
                </LineChart>
            </CardContent>
        </Card>

    );

}
