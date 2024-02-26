import './style.css'
import { cn } from "@/lib/utils"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { MoreHorizontal } from 'lucide-react'


const data = 'lorem ipsum dolor sit amet lorem, consectetur adip lobortisl lorem et '

type CardProps = React.ComponentProps<typeof Card>


export default function Summery({ className, ...props }: CardProps) {
    return (
        <Card className={cn(className)} {...props}>
            <CardHeader>
                <div className='flex flex-row justify-between'><div className='flex flex-row gap-2 font-bold'><span>7d</span><span>14d</span><span>30d</span></div><MoreHorizontal /></div>
            </CardHeader>
            <CardContent>
                {
                    data
                }
            </CardContent>
        </Card>


    )
}
