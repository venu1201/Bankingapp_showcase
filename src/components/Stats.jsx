import React from 'react'
import {stats} from '../constants'
const Stats = () => {
    return (
        <section className='flex justify-center items-center flex-row flex-wrap sm:mb-20 p=10 mb-6'>
            {stats.map((stat, ind) => (
                <div key={stat.id} className='flex-1 flex justify-start items-center flex-row m-3'>
                    <h4 className='font-poppins font-semibold xs:test-[40px] text=[30px] text-white xs:leading-[53px] leading-[43px]'>{stat.value}</h4>
                    <p className='font-poppins font-normal xs:test-[20px] text=[15px] text-gradient uppercase ml-3  xs:leading-[26px] leading-[21px]'>{stat.title}</p>
                </div>
            ))}
        </section>
    )
}

export default Stats