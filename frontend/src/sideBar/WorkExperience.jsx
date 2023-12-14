import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({handleChange}) => {
  return (
     <div className='w-80'>
      <h4 className='text-lg font-medium mb-2 w-80'>Work Experience</h4>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="" onChange={handleChange} />
          <span className='checkmark'></span>Any Experience
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="Internship" onChange={handleChange} />
          <span className='checkmark'></span>Internship
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="work remotely" onChange={handleChange} />
          <span className='checkmark'></span>Work Remotely
        </label>

      </div>
    </div>
  )
}

export default WorkExperience
