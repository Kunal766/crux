import { PieChart, Pie, Cell } from 'recharts';
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { MoreHorizontal } from 'lucide-react';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
type CardProps = React.ComponentProps<typeof Card>

export default function Chart_Pie({ className }: CardProps) {
    return (
        <Card className={cn(className)} >

            <CardHeader>
                <div className='flex flex-row justify-between'><div className='flex flex-row gap-2 font-bold'><span>7d</span><span>14d</span><span>30d</span></div><MoreHorizontal /></div>
            </CardHeader>
            <CardContent>
                <PieChart width={211} height={190}>
                    <Pie
                        data={data}
                        cx={120 / 2}
                        cy={200 / 2}
                        innerRadius={60 / 2}
                        outerRadius={80 / 2}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value">
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart></CardContent>
        </Card>

    );
}
