import './style.css'
import { cn } from "@/lib/utils"
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { MoreHorizontal } from 'lucide-react'


const invoices = {
    quaters: ["products", "Q1-23", "Q2-23"],
    data: [{
        name: "Reusable",
        row: ["10%", "4%"]
    },
    {
        name: "Naturals",
        row: ["9%", "14%"]
    },
    {
        name: "veg",
        row: ["17%", "41%"]
    },],
    total: ["10%", "13%"]

}

type CardProps = React.ComponentProps<typeof Card>


export default function TableCard({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-[30px] h-[40px]", className)} {...props}>
            <CardHeader className='pb-0'>
                <div className='flex flex-row justify-between'><div className='flex flex-row gap-2 font-bold'><span>7d</span><span>14d</span><span>30d</span></div><MoreHorizontal /></div>
            </CardHeader>
            <CardContent className='p-0'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            {invoices.quaters.map(a => {
                                return <TableHead>{a}</TableHead>
                            })}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.data.map((x) => (
                            <TableRow key={x.name} className='p-0'>
                                <TableCell className="font-small">{x.name}</TableCell>
                                {x.row.map(a => {
                                    return <TableCell className='p-0'>{ a}</TableCell>
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>Total</TableCell>
                            {invoices.total.map(total => <TableCell>{ total}</TableCell>
                            )}
                        </TableRow>
                    </TableFooter>
                </Table>  </CardContent>
        </Card >


    )
}
