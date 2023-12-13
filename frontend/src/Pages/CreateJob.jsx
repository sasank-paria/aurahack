import React from 'react';
import { useForm } from "react-hook-form";

export const CreateJob = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 '>
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

                    <input type="submit" className='my-5'/>
                </form>

            </div>
        </div>
    );
}
