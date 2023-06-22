import React from 'react'
import {clients} from '../constants'
import styles from '../style'
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`flex justify-center items-center flex-wrap w-full`}>
            {clients.map((client)=>(
                <div key={client.id} className='flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]'>
                    <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain backdrop-filter'/>
                </div>

            ))}
        </div>
    </section>
  )
}

export default Clients