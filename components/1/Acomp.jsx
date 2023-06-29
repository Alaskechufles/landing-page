import Hero from '@/public/heroImage.jpg'
import Image from 'next/image'

export default function Acomp() {
  return (
    <div>
      <div className='flex flex-col mx-10 my-5 md:ml-64'>
        <h3 className=' text-[#2D9CDB] text-xs font-medium md:text-lg'>Unhappy with your website?</h3>
        <h2 className=' text-[#333333] text-2xl font-medium md:w-[543px] md:text-5xl md:h-[144px]'>We create beautiful and fast web services</h2>
      </div>
      <div className=' w-[348px] h-[145px] md:h-[354px] md:w-[1332px] mx-auto'>
        <Image src={Hero} alt='persona exponiendo' className=' object-cover object-center w-[348px] md:w-[1332px] h-[145px] md:h-[354px] rounded-2xl' />
      </div>
      <div className='mx-10 md:ml-64'>
        <h2 className=' text-2xl font-medium my-10 md:text-5xl' >Story, emotion <br/> and purpose</h2>
        <p className='mb-5 md:text-lg md:w-[366px]'>We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
        <p className=' text-[10px] md:text-sm text-[#828282] font-medium'>Want us to contact you?</p>
        <div className=' flex flex-row bg-[#F2F2F2] w-[291px] justify-between rounded-xl mb-[102px]'>
          <input className=' bg-[#F2F2F2] flex justify-center items-center rounded-xl px-4' type="text" placeholder='Email'/>
          <button className=' w-[71px] h-[39px] bg-[#2D9CDB] text-white rounded-xl'>Join</button>
        </div>
      </div>
      
    </div>
  )
}