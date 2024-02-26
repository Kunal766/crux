import './stayle.css'
import { BarChart2, LayoutDashboard, LineChart, PieChart, Plus, X, History } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import TableCard from '../TableCard'

export function DialogCloseButton() {

    const [Text, setText] = useState("");
    const [colorClass, setColor] = useState("bg-white text-black")
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-white text-violet-500  h-[40px] border-violet-200	border-2 rounded-xl hover:bg-white'><Plus /> Add Widget </Button>
            </DialogTrigger>
            <DialogContent className='w-[1000px] max-w-none	'>
                <DialogHeader className='flex-row text-violet-400 items-center justify-between	'>
                    <div className='flex flex-row items-center'>
                        <LayoutDashboard className='border-2 border-grey-200 rounded m-4 w-[50px] h-[50px] p-3' />
                        <div>
                            <DialogTitle className='bottom-0.5	'>Create Widget</DialogTitle>
                            <DialogDescription>
                                Manage the glossary of terms of your Database.
                            </DialogDescription>
                        </div>
                    </div>
                    <div className="relative h-10 w-[400px]">
                        <X className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" onClick={() => setText("")} />
                        <Input
                            type="text"
                            placeholder="Reusability Scores"
                            className="pl-10 pr-3 py-2 text-md w-full border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6E23DD] focus:border-transparent"
                            value={Text}
                            onChange={(e) => {
                                setText(e.target.value)
                            }}
                        />
                    </div>
                </DialogHeader>
                <div className='bg-gray-200 h-[1px] w-full'></div>


                <div className='flex flex-row '>
                    <AspectRatio ratio={16 / 9} className="w-full mt-4">
                        <div className='bg-gray-200 h-[500px] w-full flex flex-col justify-center items-center'>
                            <TableCard className={' w-[220px] h-[300px] tcard ' + colorClass} />
                            <div className='mt-6'>
                                <ToggleGroup type="single" className='flex-row gap-2'>
                                    <ToggleGroupItem value="1" onClick={() => {
                                        setColor("bg-white text-black")
                                    }}>
                                        <div className='w-[40px] h-[40px] rounded bg-white rounded-full' />
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="2" onClick={() => {
                                        setColor("bg-primary text-white")
                                    }}>
                                        <div className='w-[40px] h-[40px] rounded bg-primary rounded-full' />
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="3" onClick={() => {
                                        setColor("bg-black text-white")
                                    }}>
                                        <div className='w-[40px] h-[40px] rounded bg-black rounded-full' />
                                    </ToggleGroupItem>
                                </ToggleGroup></div>
                        </div>

                    </AspectRatio>
                    <div className='mt-4 ml-1 flex flex-col gap-2 justify-between mb-4 text-gray-500'>
                        <div className=' flex flex-col gap-2'>
                            <Card className="w-[350px]">
                                <CardHeader>
                                    <CardTitle>Data</CardTitle>
                                    <CardDescription>Random Description</CardDescription>
                                </CardHeader>
                            </Card>
                            <Card className="w-[350px]">
                                <CardHeader className='pb-0'>
                                    <CardTitle>Graph</CardTitle>
                                    <CardDescription>Random Description</CardDescription>
                                </CardHeader>
                                <CardContent className='p-2 pt-0'>
                                    <ToggleGroup type="single" className='flex-row gap-0 justify-start' >
                                        <ToggleGroupItem value="1">
                                            <PieChart className='w-[40px] rounded-lg mx-auto my-10' />
                                        </ToggleGroupItem>
                                        <ToggleGroupItem value="2">
                                            <BarChart2 className='w-[40px] rounded-lg mx-auto my-10' />
                                        </ToggleGroupItem>
                                        <ToggleGroupItem value="3">
                                            <LineChart className='w-[40px] rounded-lg mx-auto my-10' />
                                        </ToggleGroupItem>
                                    </ToggleGroup>
                                </CardContent>
                            </Card>
                            <Card className="w-[350px]">
                                <CardHeader>
                                    <CardTitle>Summary</CardTitle>
                                    <CardDescription>Random Description</CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className='flex flex-row gap-6 ml-4'>
                            <Button variant="outline" className=''><History /></Button>
                            <Button variant="outline" className='w-[100px]'>Cancel</Button>
                            <Button className='w-[100px]'>Save</Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
