import React from 'react'
import Layout from '../../components/general/layout';

import data from '../../data/mydetails.json';

import sendEmailIcon from '../../assets/sendemail.svg';


const Contact = () => {

    const email = data.personalinfo.email;

    return (
        <Layout>
            <div className="bg-gray-100 font-sans h-screen w-full flex flex-row justify-center items-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                    <div className="py-3 px-6 border-b border-gray-300">
                        Contact
                    </div>
                    <div className="p-8">
                        <img src={sendEmailIcon} className="text-xs" />
                        <p className="text-gray-700 text-base mb-4">
                            {email}
                        </p>
                        <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer" href='mailto:raij168@gmail.com'>Open Gmail</a>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Contact;

