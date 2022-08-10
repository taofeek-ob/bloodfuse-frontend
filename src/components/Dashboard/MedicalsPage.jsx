import React from 'react'
import HeartRate from '../../assets/heart 2.png';
import BloodCells from '../../assets/blood_cells 2.png';
import PeopleIcon from '../../assets/people-icon.png';
import WeightIcon from '../../assets/weight 2.png';
import { BsPeople } from 'react-icons/bs';

const MedicalsPage = () => {

    const personData = {
        bloodGroup: 'O+',
        heartRate: '80',
        weight: '120kg',
        bloodCount: '9,567/ml'
    }
  return (
    <div className='w-full  h-full p-6'>
      <h1 className="font-[500] md:mb-4 text-xl md:text-2xl">Medicals Page</h1>
      {/* Grid of Cards*/}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 w-full md:max-w-7xl mt-4 md:mt-8'>
            {/*Blood Group */}
        <div className='w-full h-48 rounded-[4px]'>
            <div className='w-full h-full py-4 px-4 shadow-sm bg-white flex flex-col gap-4 items-start'>
                <span className='font-mod-light  text-xl'> Blood Group</span>
                <div className='flex items-center justify-between w-full text-[#F00530]'>
                    <span className='font-mod-bold text-2xl md:text-3xl'>{personData.bloodGroup}</span>
                    <BsPeople className='w-12 h-12'/>
                </div>
                <span className='font-mod-light text-[#333333] text-opacity-40'>10% higher than last month</span>
            </div>
        </div>
        <div className='w-full h-48 rounded-[4px]'>
            {/*Heart Rate */}
            <div className='w-full h-full py-4 px-4 shadow-sm bg-white flex flex-col gap-4 items-start'>
                <span className='font-mod-light text-xl'>Heart Rate</span>
                <div className='flex items-center justify-between w-full text-[#44C13C]'>
                    <span className='font-mod-bold text-2xl md:text-3xl'>{personData.heartRate}bmp</span>
                    <img src={HeartRate} className='w-12 h-12'/>
                </div>
                <span className='font-mod-light text-[#333333] text-opacity-40'>10% higher than last month</span>
            </div>
        </div>
        <div className='w-full h-48 rounded-[4px]'>
            {/*Weight */}
            <div className='w-full h-full py-4 px-4 shadow-sm bg-white flex flex-col gap-4 items-start'>
                <span className='font-mod-light text-xl'>Weight</span>
                <div className='flex items-center justify-between w-full text-[#FB9637]'>
                    <span className='font-mod-bold text-2xl md:text-3xl'>{personData.weight}</span>
                    <img src={WeightIcon} className='w-12 h-12'/>
                </div>
                <span className='font-mod-light text-[#333333] text-opacity-40'>10% higher than last month</span>
            </div>
        </div>
        <div className='w-full h-48 rounded-[4px]'>
            {/*Blood Count */}
            <div className='w-full h-full py-4 px-4 shadow-sm bg-white flex flex-col gap-4 items-start'>
                <span className='font-mod-light text-xl'>Blood Count</span>
                <div className='flex items-center justify-between w-full text-[#61A0FF]'>
                    <span className='font-mod-bold text-2xl md:text-3xl'>{personData.bloodCount}</span>
                    <img src={BloodCells} className='w-12 h-12'/>
                </div>
                <span className='font-mod-light text-[#333333] text-opacity-40'>10% higher than last month</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalsPage
