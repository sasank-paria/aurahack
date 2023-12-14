import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({handleChange , handleClick}) => {
  return (
    <div className='w-80'>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div className='mb-4'>
        <Button onClickHandler={handleClick} value="" title="Hourly"/>
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/>
        <Button onClickHandler={handleClick} value="Yearly" title="Monthly"/>
        </div>

        <div className='w-80'>
        <label className="sidebar-label-container">
        <input type="radio" name="test" id='test' value="" onChange={handleChange} />
        <span className='checkmark'></span>All
        </label>
        <label className="sidebar-label-container">
        <input type="radio" name="test" id='test' value="30000" onChange={handleChange} />
        <span className='checkmark'></span>30000
        </label>
        <label className="sidebar-label-container">
        <input type="radio" name="test" id='test' value="50000" onChange={handleChange} />
        <span className='checkmark'></span>50000
        </label>
        <label className="sidebar-label-container">
        <input type="radio" name="test" id='test' value="80000" onChange={handleChange} />
        <span className='checkmark'></span>80000
        </label>
        <label className="sidebar-label-container">
        <input type="radio" name="test" id='test' value="100000" onChange={handleChange} />
        <span className='checkmark'></span>100000
        </label>

        </div>
    </div>
  )
}

export default Salary
