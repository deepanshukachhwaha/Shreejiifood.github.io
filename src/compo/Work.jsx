import React from 'react'

const Work = () => {
  return (
    <div className='relative bg-cover bg-center py-12 bg-working-img'>
      <div className='absolute inset-0 bg-heroBg bg-opacity-85'> </div>
        <div className='relative container mx-auto px-4 py-20'>
        <div className='text-white text-center mb-20'>
             <h2 className='text-4xl font-bold font-secondary mb-4'> Best services</h2>
             <p className='text-lg md:w-1/2 w-full  mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus molestiae laboriosam atque nesciunt dolorem, cupiditate ducimus vitae quam consequatur reprehenderit id repellendus doloribus facere reiciendis eum enim magnam totam!</p>
       
       
        </div>
      <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'> 
        <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
         <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary
          text-white size-14 rounded-full flex items-center justify-center'>1</div>
         <h3 className='text-lg font-medium mt-8'>fill the from </h3>
         <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde similique enim </p>
        </div>
        <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
         <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary
          text-white size-14 rounded-full flex items-center justify-center'>2</div>
         <h3 className='text-lg font-medium mt-8'>fill the from </h3>
         <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde similique enim</p>
        </div>
        <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
         <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary
          text-white size-14 rounded-full flex items-center justify-center'>3</div>
         <h3 className='text-lg font-medium mt-8'>fill the from </h3>
         <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde similique enim</p>
        </div>
        
      </div>

      
      
      </div>
    </div>
  )
}

export default Work