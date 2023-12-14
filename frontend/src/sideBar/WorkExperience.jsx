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

        <InputField handleChange={handleChange} value="Internship" title="Internship" name = "test"/>
        <InputField handleChange={handleChange} value="work remotely" title="Work remotely" name = "test"/>
      </div>
    </div>
  )
}

export default WorkExperience
