import './stayle.css'
import Chart_Bar from '../Chart_Bar'
import Chart_Pie from '../Chart_Pie'
import Chart_Line from '../Chart_Line'
import TableCard from '../TableCard'
import Summery from '../Summery'
export default function Widget() {

    return (
        <div className='m-4'>
            <div className='flex flex-row gap-4 mb-4'>
                <Chart_Bar className='bg-white text-black w-[220px] h-[300px] p-0' />
                <Chart_Pie className='bg-black text-white w-[220px] h-[300px]' />
                <Chart_Line className='bg-black  text-white w-[220px] h-[300px]' />
                <TableCard className='bg-white w-[220px] h-[300px] tcard' />
                <Summery className=' bg-primary text-white w-[220px] h-[300px]' />
            </div>
            <div className='flex flex-row gap-4'>
                <Chart_Bar className='bg-black text-white w-[220px] h-[300px]' />
                <Chart_Pie className='bg-primary text-white w-[220px] h-[300px]' />
                <Chart_Line className='bg-white text-black w-[220px] h-[300px]' />
                <TableCard className='bg-black w-[220px] h-[300px] text-white tcard' />
                <Summery className=' bg-black text-white w-[220px] h-[300px]' />
            </div>
        </div >
    )
}