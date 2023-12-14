import React from 'react'
import InputField from '../components/InputField'

const Location = ({handleChange}) => {
  return (
    <div className='w-80'>
      <h4 className='text-lg font-medium mb-2'>Location</h4>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="" onChange={handleChange} />
          <span className='checkmark'></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="delhi" onChange={handleChange} />
          <span className='checkmark'></span>Delhi
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="mumbai" onChange={handleChange} />
          <span className='checkmark'></span>Mumbai
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="madrid" onChange={handleChange} />
          <span className='checkmark'></span>Hyderabad
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id='test' value="bosto" onChange={handleChange} />
          <span className='checkmark'></span>Bengaluru
        </label>
{/*         

        <InputField handleChange={handleChange} value="london" title="Delhi" name = "test"/>
        <InputField handleChange={handleChange} value="seattle" title="Mumbai" name = "test"/>
        <InputField handleChange={handleChange} value="madrid" title="Hayderabad" name = "test"/>
        <InputField handleChange={handleChange} value="bosto" title="Bengaluru" name = "test"/>
      */}
      </div>
    </div>
  )
}

export default Location
