import React from 'react'
import { useState } from 'react'
import Banner  from '../components/Banner'
import Sidebar from '../sideBar/Sidebar'

const Home = () => {
  // const [query, setQuery] = useState("");
  //     const handleInputChange = (event) => {
  //           setQuery(event.target.value)
  //     }
  //     console.log(query)
  const [isLoading , setLoading] = useState(true);
  const[currentPage , setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  


  const calculatePerRange = () =>{
    const startIndex = (currentPage -1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex , endIndex};
  }

  //Function for the next page
  const nextPage = ()=>{
    if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
      setCurrentPage(currentPage+1);
    }
  }

  //Function for previous page
  const previousPage = () =>{
    if(currentPage > 1){
      setCurrentPage(currentPage-1);
    }
  }
  return (
    <div>
      <Banner />
      {/* main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'></div>

     
      {/* left Side */}
      <div className='bg-white p-4 rounded'>
        <Sidebar handleChange={handleChange} handleClick={handleClick}/>
      </div>

      {/* job cards */}
      <div className='col-span-2 bg-white p-4 rounded-sm'>
        {
          isLoading ? (<p className='font-medium'>Loading...</p>) : result.length > 0 ? (<Jobs result={results}/>) :<>
          <h3 className='text-lg font-bold mb-2'>{results.length} Jobs</h3>
          <p>No Data Found !!</p>
          </>
        }
         
      </div>

      
      <div className='bg-white p-4 rounded'></div>
    </div>
  )
}

export default Home
