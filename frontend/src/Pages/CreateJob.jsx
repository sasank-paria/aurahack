import React from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import { useState } from 'react';


export const CreateJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;

        fetch("http://localhost:3000/post-job",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then((result)=>{
            console.log(result)
            if(result.acknowledged===true){
                alert('job posted successfully');
            }
            reset();
        });
    };

    const options = [
        { value: "JavaScript", label: "JavaScript" },
        { value: "C++", label: "C++" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSs" },
        { value: "React", label: "React" },
        { value: "Node", label: "Node" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "Redux", label: "Redux" },
    ]

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 w-1/50'>
            <div className='bg-[#FAFAFA] py-10px-4 lg:px-16'>

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label block mb-2 text-lg>
                                Job Title
                            </label>
                            <input type='text' placeholder='web designer'
                                {...register("jobTitle")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-3'/>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label block mb-2 text-lg>
                                Company Name
                            </label>
                            <input type='text' placeholder='Google'
                                {...register("companyNmae")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-3'/>
                        </div>
                    </div>

                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>
                                Minimum Salary
                            </label>
                            <input type='text' placeholder='5k'
                                {...register("minPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-3'/>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label block mb-2 text-lg>
                                Maximum Salary
                            </label>
                            <input type='text' placeholder='500k'
                                {...register("maxPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3
                            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-3'/>
                        </div>
                    </div>

                    {/* 3rd row */}
                    <div className="create-job-flex">
                        <div className="1g:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Salary Type</label>
                            <select {...register("salaryType")} className="create-job-input">
                                <option value="">Choose your salary</option>
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
                                {...register("postingDate")}
                                className="create-job-input"
                            />
                        </div>
                        <div className="1g:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Experience Level</label>
                            <select {...register("experienceLevel")} className="create-job-input">
                                <option value="">Choose your experience</option>
                                <option value="NoExperience">Hourly</option>
                                <option value="Internship">Internship</option>
                                <option value="Yearly">Work remotely</option>
                            </select>
                        </div>
                    </div>

                    {/* 5th row */}

                    <div>
                        <label className="block mb-2 text-1g">Required Skill Sets:</label>
                        <CreatableSelect
                            defaultValue={selectedOption}
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
                                {...register("companyLogo")}
                                className="create-job-input" />
                        </div>
                        <div className="1g:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Employment Type</label>
                            <select
                                {...register("employmentType")}
                                className="create-job-input"  >
                                <option value="">Choose your experience</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>
                    </div>

                    <input type="submit" className='my-5'/>
                </form>

            </div >
        </div >
    );
}
