import React from 'react'
import { useState , useEffect } from 'react'
import Banner  from '../components/Banner'
import Sidebar from '../sideBar/Sidebar'
import Card from '../components/Card'
import Newsletter from '../components/Newsletter'
import Jobs from './Jobs'

const Home = () => {
  const [isLoading , setLoading] = useState(true);
  const[currentPage , setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const[jobs,setJobs]=useState([]);
  
   useEffect(()=>{
    setLoading(true);
    fetch("https://localhost:3000/all-jobs")
    .then((res)=> res.json())
    .then((data) =>{
  setJobs(data);
  setLoading(false);
    })
  },[]);

  
  const [selectedCategory, setSelectedCategory] = useState("");


  const filteredJobs = jobs.filter(({jobLocation,maxprice,experienceLevel,salaryType,employmentType,postingDate})=>(
    jobLocation.toLowerCase() === selectedCategory.toLowerCase() 
    // other conditions...
    ));
   

  
   
   
   const[query,setQuery]=useState(""); 
   const handleInputChange =(event)=>{
     setQuery(event.target.value);
    }
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().includes(query.toLowerCase()));
  // const filteredItems= jobs.filter((job)=> job.jobTitle.toLowercase().indexof(query.toLowerCase()) !== -1);
  // console.log(filteredItems);
 const handleChange = (event) =>{
  setSelectedCategory(event.target.value)
 }


 const handleClick = (event)=>{
  setSelectedCategory(event.target.value)
 }

 

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
  const prevPage = () =>{
    if(currentPage > 1){
      setCurrentPage(currentPage-1);
    }
  }

 const filteredData =(jobs,selected,query)=>{
  let filteredJobs =jobs;
  if(query){
    filteredJobs=filteredItems;
  }
  if(selected){
    filteredJobs=filteredJobs.filter(({jobLocation,maxprice,experienceLevel,salaryType,employmentType,postingDate})=>(
      jobLocation.toLowerCase() === selected.toLowerCase() ||
      postingDate >= selected ||
      parseInt(maxprice) <= parseInt(selected) || 
      salaryType.toLowerCase() === selected.toLowerCase() ||
      employmentType.toLowerCase() === selected.toLowerCase()
   ));
   console.log(filteredData);
    }
    const {startIndex , endIndex} = calculatePerRange();
    filteredJobs = filteredJobs.slice(startIndex , endIndex);
    return filteredJobs.map((data,i)=><Card key={i} data={data}/>)
 }
 const result = filteredData(jobs,selectedCategory,query);
 
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>

     
      {/* left Side */}
      <div className='bg-white p-4 rounded'>
        <Sidebar handleChange={handleChange} handleClick={handleClick}/>
      </div>

      {/* job cards */}
      <div className='col-span-2 bg-white p-4 rounded-sm w-full'>
      <Jobs result={result}/>
        {/* {
          isLoading ? (<p className='font-medium'>Loading...</p>) : result.length > 0 ? (<Jobs result={result}/>) :<>
          <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
          <p>No Data Found !!</p>
          </>
        }
         
         {
          result.length > 0 ? (
            <div className='flex justify-center mt-4 space-x-8'>
              <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
              <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
              <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length > itemsPerPage)} className='hover:underline'>Next</button>
            </div>
          ) : ""
         } */}
      </div>

      {/* right side */}
      <div className='bg-white p-4 rounded'><Newsletter/></div>
    </div>
    </div>
  )
}

export default Home