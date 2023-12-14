import React from 'react'
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import {Link} from 'react-router-dom';
const Card = ({data}) => {
    const{companyName,companyLogo,minPrice,maxPrice,salaryType,jobLocation,emloymentType,postingDate}= data;
    description=data;
return(
   <section className='card'>
    <link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt =""/>
        <div >  
            <h4 className='text-primary mb-1'>{companyName}</h4>
            <h3 className='text-lg font -semibold mb-2'>{jobTitle}</h3>
<div className='text=primary/70 text-base flex flex-wrap gap-2 mb-2'>
    <span className='flex items-center gap-w'><FiMapPin/>{jobLocation}</span>
    <span className='flex items-center gap-w'><FiClock/>{emloymentType}</span>
    <span className='flex items-center gap-w'><FiDollarSign/>{minPrice}-{maxPrice}</span>
    <span className='flex items-center gap-w'><FiCalendar/>{postingDate}</span>
</div>
<p className='textbase text-primary/70'>{description} </p>
        </div>
    </link>
   </section>
  )
}

export default Card;