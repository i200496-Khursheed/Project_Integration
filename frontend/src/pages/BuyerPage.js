import { useEffect, useState } from 'react'

import BuyerDetails from '../components/BuyerDetails'
import BuyerForm from '../components/BuyerForm'

const Buyer = () => {
    
    const [buyer,setBuyerState]=useState()

    useEffect(() => {
        
        const fetchBuyer = async () => {
            const response = await fetch('/api/buyerinfo')
            const json = await response.json()

            if (response.ok) {
                setBuyerState([...json])
            }
        }

        fetchBuyer()
    })

    return (
        <div className="buyer">
            <div className='buyer'>
                {buyer && buyer.map((buyer) => (
                    <BuyerDetails key={buyer._id} buyer={buyer} />
                ))}
            </div>
            <BuyerForm />
        </div>
    )
}

export default Buyer