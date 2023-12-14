import React from 'react'
import InputField from '../components/InputField'

const EmployementType = ({handleChange}) => {
  return (
     <div className='w-80'>
      <h4 className='text-lg font-medium mb-2'>Type Of Employement</h4>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="" onChange={handleChange} />
          <span className='checkmark'></span>Any Experience
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="full-time" onChange={handleChange} />
          <span className='checkmark'></span>Full Time
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="temporary" onChange={handleChange} />
          <span className='checkmark'></span>Temporary
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="part-time" onChange={handleChange} />
          <span className='checkmark'></span>Part-Time
        </label>

        {/* <InputField handleChange={handleChange} value="full-time" title="full-time" name = "test"/> */}
        {/* <InputField handleChange={handleChange} value="temporary" title="temporary" name = "test"/> */}
        {/* <InputField handleChange={handleChange} value="part-time" title="part-time" name = "test"/> */}
      </div>
    </div>
  )
}

export default EmployementType
