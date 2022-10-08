import React from 'react'
import Layout from '../../components/general/layout';

import data from '../../data/mydetails.json';

const Resume = () => {

    const exp1 = {
        companyName: data.exp.exp1.companyname,
        designation: data.exp.exp1.designation,
        startDate: data.exp.exp1.startdate,
        endDate: data.exp.exp1.enddate
    };

    const exp0 = {
        companyName: data.exp.exp0.companyname,
        designation: data.exp.exp0.designation,
        startDate: data.exp.exp0.startdate,
        endDate: data.exp.exp0.enddate
    };

    const qualification = {
        schoolName: data.education.ug.schoolname,
        university: data.education.ug.university,
        cgpa: data.education.ug.cgpa,
        degree: data.education.ug.degree,
        dept: data.education.ug.dept,
        year: data.education.ug.year
    };


    return (
        <Layout>
            <section className="bg-gray-100">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-sky-400">
                                <h3 className="text-3xl font-semibold">Experience</h3>
                                {/* <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span> */}
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">

                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-400">
                                    <h3 className="text-xl font-semibold tracking-wide">{exp1.designation}</h3>
                                    <p className="">{exp1.companyName}</p>
                                    <time className="text-xs tracking-wide dark:text-gray-400">{exp1.startDate} - {exp1.endDate}</time>
                                </div>
                            </div>
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-400">
                                    <h3 className="text-xl font-semibold tracking-wide">{exp0.designation}</h3>
                                    <p className="">{exp0.companyName}</p>
                                    <time className="text-xs tracking-wide dark:text-gray-400">{exp0.startDate} - {exp0.endDate}</time>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-sky-400">
                                <h3 className="text-3xl font-semibold">Qualification</h3>
                                {/* <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span> */}
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-400">
                                    <h3 className="text-xl font-semibold tracking-wide">{qualification.degree} in {qualification.dept}</h3>
                                    <p className="">{qualification.schoolName}, {qualification.university}</p>
                                    <time className="text-xs tracking-wide dark:text-gray-400">{qualification.year}</time>
                                    <p className="">CGPA: {qualification.cgpa}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Resume
