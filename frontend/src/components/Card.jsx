import React from 'react'
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import {Link} from 'react-router-dom';
const Card = ({data}) => {
    const{companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation,emloymentType,postingDate,description}= data;
    
return(
   <section className='card'>
    <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start bg-blue-500'>
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
    </Link>
   </section>
  )
}

export default Card;