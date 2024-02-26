import './stayle.css'
import { Activity, BarChart4, Layers, MessagesSquare } from 'lucide-react'
import icon from '../../assets/icon.jpeg'
import profile from '../../assets/profile.jpg'
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"


export default function Sidebar() {

    return (
        <div className=' flex flex-col side bg-white justify-between items-center'>
            <ToggleGroup type="single" className='flex-col gap-2'>
                <img src={icon} className='w-[40px] rounded-lg mx-auto my-10' />
                <ToggleGroupItem value="1">
                    <MessagesSquare className='w-[40px] rounded-lg mx-auto my-10' />
                </ToggleGroupItem>
                <ToggleGroupItem value="2">
                    <Activity className='w-[40px] rounded-lg mx-auto my-10' />
                </ToggleGroupItem>
                <ToggleGroupItem value="3">
                    <Layers className='w-[40px] rounded-lg mx-auto my-10' />
                </ToggleGroupItem>
                <ToggleGroupItem value="4">
                    <BarChart4 className='w-[40px] rounded-lg mx-auto my-10' />
                </ToggleGroupItem>
            </ToggleGroup>
            <div>
                <img src={profile} className='rounded-full my-10 w-[60px]' />
            </div>
        </div >

    )
}