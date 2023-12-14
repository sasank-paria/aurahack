import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now- 24 * 60 * 60 * 1000);
    const SevenDaysAgo = new Date(now- 7 * 24 * 60 * 60 *1000);
    const ThirtyDaysAgo = new Date(now- 30 * 24 * 60 * 60 * 1000);

    //convert Date to string
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
    const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0,10);
    const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0,10);
  return (
    <div className='w-80'>
      <h4 className='text-lg font-medium mb-2 w-80'>Date of Posting</h4>

      <div className='w-80'>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="" onChange={handleChange} />
          <span className='checkmark'></span>All Time
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="twentyFourHoursAgoDate" onChange={handleChange} />
          <span className='checkmark'></span>Last 24 Hours
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="SevenDaysAgoDate" onChange={handleChange} />
          <span className='checkmark'></span>Last 7 Days
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="ThirtyDaysAgoDate" onChange={handleChange} />
          <span className='checkmark'></span>Last month
        </label>
       </div>
    </div>
  )
}

export default JobPostingData
