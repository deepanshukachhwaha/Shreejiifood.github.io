import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import G from '../assets/G.jpg'
import N from '../assets/N.jpg'
import Fast from '../assets/Fast.jpg'
import Thali from '../assets/Thali.jpg'

const Services = () => {
  return (
    <div className='bg-[#f7f8fc]' id='services'>
      <div className='pt-28 px-4 container mx-auto'>
        <div className='text-center space-y-5 '>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'> what can we Do Together</h2>
          <p className='md:w-1/2 mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores motibus facilis sint.  qraesentium numquam recusandae qui!</p>
        </div>

        {/*service*/}
     <div className='py-12 md:w-4/5 mx-auto'>  </div>
     <Tabs>
    <TabList className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
      <Tab>Spcial Sweets</Tab>
      <Tab>Spcial Namkeen</Tab>
      <Tab>Spical Thali</Tab>
      <Tab>Fast Food</Tab>
    </TabList>

    <TabPanel>
      <div className='flex flex-col md:flex-row items-center gap-8 mt-8 p-5'>
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
          <h3 className='text-3xl font-semibold text-primary mb-4'>Spical Sweets</h3>
          <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi saepe consequuntur tempora assumenda voluptatibus quibusdam maxime, provident quisquam minus officia, quae quo officiis laboriosam modi molestias voluptate iure ea!</p>
          <h4  className=' text-xl font-medium text-black pb-2'> Benifits </h4>
          <ul className='list-disc list-inside space-y-3'>
            <li>
              Mlik cake our fomus sweet
            </li>
            <li>
              Mlik cake our fomus sweet
            </li>
            <li>
              Mlik cake our fomus sweet
            </li>
          </ul>
        </div>
        <div className='md:w-1/2'>
          <img src={G} alt="Sweets gulab jamun" className='w-full h-80 rounded-2xl object-cover'/>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className='flex flex-col md:flex-row items-center gap-8 mt-8 p-5'>
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
          <h3 className='text-3xl font-semibold text-primary mb-4'>Spical Namkeen</h3>
          <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi saepe consequuntur tempora assumenda voluptatibus quibusdam maxime, provident quisquam minus officia, quae quo officiis laboriosam modi molestias voluptate iure ea!</p>
          <h4  className=' text-xl font-medium text-black pb-2'> Benifits </h4>
          <ul className='list-disc list-inside space-y-3'>
            <li>
              Mlik cake our fomus sweet
            </li>
            <li>
              Mlik cake our fomus sweet
            </li>
            <li>
              Mlik cake our fomus sweet
            </li>
          </ul>
        </div>
        <div className='md:w-1/2'>
          <img src={N} alt="Sweets gulab jamun" className='w-full h-80 rounded-2xl object-cover'/>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className='flex flex-col md:flex-row items-center gap-8 mt-8 p-5'>
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
          <h3 className='text-3xl font-semibold text-primary mb-4'>Spical Sweets</h3>
          <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi saepe consequuntur tempora assumenda voluptatibus quibusdam maxime, provident quisquam minus officia, quae quo officiis laboriosam modi molestias voluptate iure ea!</p>
          <h4  className=' text-xl font-medium text-black pb-2'> Benifits </h4>
          <ul className='list-disc list-inside space-y-3'>
            <li>
              Mlik cake our fomus sweet
            </li>
            <li>
              Mlik cake our fomus sweet
            </li>
            <li>
              Mlik cake our fomus sweet
            </li>
          </ul>
        </div>
        <div className='md:w-1/2'>
          <img src={Thali} alt="Sweets gulab jamun" className='w-full h-80 rounded-2xl object-cover'/>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className='flex flex-col md:flex-row items-center gap-8 mt-8 p-5'>
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
          <h3 className='text-3xl font-semibold text-primary mb-4'>Spical Sweets</h3>
          <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi saepe consequuntur tempora assumenda voluptatibus quibusdam maxime, provident quisquam minus officia, quae quo officiis laboriosam modi molestias voluptate iure ea!</p>
          <h4  className=' text-xl font-medium text-black pb-2'> Benifits </h4>
          <ul className='list-disc list-inside space-y-3'>
            <li>
              Mlik cake our fomus sweet
            </li>
            <li>
              Mlik cake our fomus sweet
            </li>
            <li>
              Mlik cake our fomus sweet
            </li>
          </ul>
        </div>
        <div className='md:w-1/2'>
          <img src={Fast} alt="Sweets gulab jamun" className='w-full h-80 rounded-2xl object-cover'/>
        </div>
      </div>
    </TabPanel>
   
  </Tabs>
  
      </div>
    </div>
  )
}

export default Services
