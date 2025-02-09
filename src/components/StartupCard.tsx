import { formatDate } from '@/lib/utils'
import React from 'react'

const StartupCard = ({post}:{post:StartupTypeCard}) => {
    console.log(post._createdAt);
console.log(formatDate(post._createdAt));
    return (
    <li className='startup-card group'>
        <div className='flex-between'>
        <p className='startup_card_date'>{formatDate(post._createdAt) }</p>
        </div>
    </li>
  )
}

export default StartupCard