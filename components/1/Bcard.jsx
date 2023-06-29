import PenIcon from '@/public/pencil-solid-24.png'
import Image from 'next/image'
import CodeIcon from '@/public/code-regular-24.png'
import StorageIcon from '@/public/storage.png'

export default function Bcard() {
    return (
        <div className=' flex flex-col md:flex-row md:justify-center gap-3 items-center mt-14 mb-20'>
            <div className=' w-[341px] p-[34px] flex flex-col gap-8 hover:shadow-lg hover:shadow-[#3333331a] rounded-3xl'>
                <div className=" w-[67px] h-[67px] bg-[#2D9CDB] flex items-center justify-center text-white rounded-2xl">
                    <Image src={PenIcon} alt="hola" width="36" height="36" />
                </div>
                <div className=' flex flex-col gap-6'>
                    <p className=' font-bold text-2xl'>UI/UX Design</p>
                    <p className=' font-normal text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                </div>
                <div>
                    <button className=' w-[116px] h-[42px] bg-[#E0E0E0] hover:bg-[#2D9CDB] rounded-xl text-[#828282] hover:text-white font-medium'>Get started</button>
                </div>
            </div>
            <div className=' w-[341px] p-[34px] flex flex-col gap-8 hover:shadow-lg hover:shadow-[#3333331a] rounded-3xl'>
                <div className=" w-[67px] h-[67px] bg-[#27AE60] flex items-center justify-center text-white rounded-2xl">
                    <Image src={CodeIcon} alt="hola" width="36" height="36" />
                </div>
                <div className=' flex flex-col gap-6'>
                    <p className=' font-bold text-2xl'>Front End</p>
                    <p className=' font-normal text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                </div>
                <div>
                    <button className=' w-[116px] h-[42px] bg-[#E0E0E0] hover:bg-[#2D9CDB] rounded-xl text-[#828282] hover:text-white font-medium'>Get started</button>
                </div>
            </div>
            <div className=' w-[341px] p-[34px] flex flex-col gap-8 hover:shadow-lg hover:shadow-[#3333331a] rounded-3xl'>
                <div className=" w-[67px] h-[67px] bg-[#EB5757] flex items-center justify-center text-white rounded-2xl">
                    <Image src={StorageIcon} alt="hola" width="36" height="36" />
                </div>
                <div className=' flex flex-col gap-6'>
                    <p className=' font-bold text-2xl'>UI/UX Design</p>
                    <p className=' font-normal text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                </div>
                <div>
                    <button className=' w-[116px] h-[42px] bg-[#E0E0E0] hover:bg-[#2D9CDB] rounded-xl text-[#828282] hover:text-white font-medium'>Get started</button>
                </div>
            </div>
        </div>
    )
}