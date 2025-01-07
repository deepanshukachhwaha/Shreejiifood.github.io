import React from 'react'

const packages = [
  {
    name: 'Gulab Jamun',
    price: '₹250',
    description: 'Delicious and soft gulab jamun dipped in sugar syrup.',
    features: ['Made with pure khoya', 'Perfect sweetness', 'Soft texture']
  },
  {
    name: 'Kaju Katli',
    price: '₹500',
    description: 'Rich and smooth kaju katli made  finest cashews.',
    features: ['Premium cashews', 'No artificial flavors', 'Melts in mouth']
  },
  {
    name: 'Rasgulla',
    price: '₹300',
    description: 'Spongy rasgullas soaked in light sugar syrup.',
    features: ['Bengali style', 'Soft and spongy', 'Freshly made']
  }
]

const Sweets = () => {
const handleScrollToContact =()=>{
 const targetElement =document.getElementById('contact');
 if(targetElement){
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior:"smooth",
  })
 }
}

  return (
    <div id='sweets' className='bg-[#f7f8fc] pt-32 pb-10'>
      <div className='container mx-auto px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl font-bold font-secondary mb-3'>
            Our Best Sweets in this Month
          </h2>
          <p className='text-lg mb-10 md:w-2/3 mx-auto'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem recusandae perferendis
          </p>
        </div>

        {/* packages */}
        <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 mb-10 pb-10'>
          {packages.map((pkg, index) => (
            <div key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4'>{pkg.name}</h3>
              <hr className='w-24 border text-primary border-primary' />
              <p className='text-3xl font-bold mb-4'>
                {pkg.price} <span className='text-lg font-normal'>/ mo</span>
              </p>
              <p className='text-lg mb-4'>{pkg.description}</p>

              {pkg.features && (
                <ul className='list-disc list-inside space-y-2 mb-6'>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}
              <button onClick={handleScrollToContact} className='bg-primary text-white px-4 py-2 rounded'> Order Now!</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sweets
