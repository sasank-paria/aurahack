import React from 'react'
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import { useState } from 'react';
import { useForm } from "react-hook-form";

export const UpdateJob = () => {
    const {id} = useParams();
    const {_id,jobTitle,companyName,minPrice,maxPrice,salaryType,jobLocation,postingDate,
    experienceLevel,companyLogo,employmentType,description,postedBy,skills} = useLoaderData();

    const [selectedOption, setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;

        fetch(`http://localhost:3000/update-job/${id}`,{
            method:"PATCH",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then((result)=>{
            console.log(result)
            if(result.acknowledged===true){
                alert('job updated successfully');
            }
            reset();
        });
    };

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 w-1/50'>
    <div className='bg-[#FAFAFA] py-10px-4 lg:px-16'>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label block mb-2 text-lg>
                        Job Title
                    </label>
                    <input type='text' defaultValue={jobTitle}
                        {...register("jobTitle")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3
                    text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-3'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label block mb-2 text-lg>
                        Company Name
                    </label>
                    <input type='text' placeholder='Google' defaultValue={companyName}
                        {...register("companyNmae")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3
                    text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-3'/>
                </div>
            </div>

            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>
                        Minimum Salary
                    </label>
                    <input type='text' placeholder='5k' defaultValue={minPrice}
                        {...register("minPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3
                    text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-3'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label block mb-2 text-lg>
                        Maximum Salary
                    </label>
                    <input type='text' placeholder='500k' defaultValue={maxPrice}
                        {...register("maxPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3
                    text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-3'/>
                </div>
            </div>

            {/* 3rd row */}
            <div className="create-job-flex">
                <div className="1g:w-1/2 w-full">
                    <label className="block mb-2 text-lg">Salary Type</label>
                    <select {...register("salaryType")} className="create-job-input">
                        <option value={salaryType}>{salaryType}</option>
                        <option value="Hourly">Hourly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <div className="1g:w-1/2 w-full">
                    <label className="block mb-2 text-lg">Job Location</label>
                    <input
                        type="text"
                        placeholder="Ex: New York"
                        defaultValue={jobLocation}
                        {...register("jobLocation")}
                        className="create-job-input"
                    />
                </div>
            </div>

            {/* 4th row */}

            <div className="create-job-flex">
                <div className="1g:w-1/2 w-full">
                    <label className="block mb-2 text-lg">Job Posting Date</label>
                    <input
                        type="date"
                        placeholder="Ex: 2023-10-28"
                        defaultValue={postingDate}
                        {...register("postingDate")}
                        className="create-job-input"
                    />
                </div>
                <div className="1g:w-1/2 w-full">
                    <label className="block mb-2 text-lg">Experience Level</label>
                    <select {...register("experienceLevel")} className="create-job-input">
                        <option value={experienceLevel}>{experienceLevel}</option>
                        <option value="NoExperience">Hourly</option>
                        <option value="Internship">Internship</option>
                        <option value="work remotely">Work remotely</option>
                    </select>
                </div>
            </div>

            {/* 5th row */}

            <div>
                <label className="block mb-2 text-1g">Required Skill Sets:</label>
                <CreatableSelect
                    defaultValue={skills}
                    onChange={setSelectedOption}
                    options={options}
                    isMulti
                    className="create-job-input py-4" />
            </div>

            {/* 6th row  */}

            <div className="create-job-flex">
                <div className="1g:w-1/2 w-full">
                    <label className="block mb-2 text-1g">Company Logo</label>
                    <input
                        type="url"
                        placeholder="Paste your company logo "
                        defaultValue = {companyLogo}
                        {...register("companyLogo")}
                        className="create-job-input" />
                </div>
                <div className="1g:w-1/2 w-full">
                    <label className="block mb-2 text-lg">Employment Type</label>
                    <select
                        {...register("employmentType")}
                        className="create-job-input"  >
                        <option value={employmentType}>{employmentType}</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Temporary">Temporary</option>
                    </select>
                </div>
            </div>

            {/* 7th row */}

            <div className="w-full">
                <label className="block mb-2 text-lg">Job Description</label>
                <textarea className="w-full pl-3 py-1.5 focus: outline-none placeholder: text-gray-700"
                    rows={6}
                    defaultValue={description}
                    placeholder="Job Description"
                    {...register("description")} />
            </div>

            {/* last row */}

            <div className="w-full">
                <label className="block mb-2 text-1g">Job Posted By</label>
                <input
                    type="email"
                    defaultValue={postedBy}
                    placeholder="your email"
                    {...register("postedBy")}
                    className="create-job-input" />
            </div>

            <input type="submit" className="block mt-12 bg-blue-500 font-semibold px-8 py-2 rounded-sm cursor-pointer" />
        </form>

    </div >
</div >
  )
}
