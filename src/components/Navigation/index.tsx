import { Home, Plus, Settings, X } from 'lucide-react'
import './stayle.css'
import { Button } from '../ui/button'
import { DialogCloseButton } from '../AddWidget'

export default function Navigation() {

    return (
        <div className='flex nav justify-between bg-white'>
            <div className='flex gap-2 items-center'>
                <Home className='h-[40px] m-2' />
                <Button className='bg-white text-black h-[40px] border-grey-100	border-2 rounded-xl hover:bg-white'>Overview</Button>
                <Button className='bg-white text-violet-500  h-[40px] border-violet-200	border-2 rounded-xl hover:bg-white'> Coustomer <X /></Button>
                <Button className='bg-white text-black h-[40px] border-grey-100	border-2 rounded-xl hover:bg-white'> Products </Button>
                <Button className='bg-white text-black h-[40px] border-grey-100	border-2 rounded-xl hover:bg-white'> Settings </Button>
                <Button className='bg-white text-violet-500  h-[40px] border-violet-200	border-2 rounded-xl hover:bg-white'><Plus /></Button>
            </div>
            <div className='flex items-center gap-2'>
                <DialogCloseButton />
                <Settings className='m-2' />
            </div>

        </div >
    )
}