import React from "react";
import Layout from "../components/general/layout";

import mypic from '../assets/mypic.png';
import data from '../data/mydetails.json';

const info = {
  name: data.personalinfo.name,
  designation: data.exp.exp1.designation,
  currLoc: data.personalinfo.currentlocation,
  about: data.personalinfo.about
}

const IndexPage = () => {

  return (
    <Layout>
      <div className="bg-gray-100 font-sans h-screen w-full flex flex-row justify-center items-center">
        <div className="card w-96 mx-auto bg-white shadow-xl hover:shadow rounded-md border border-sky-200">
          <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src={mypic} alt={info.name} />
          <div className="text-center mt-4 text-3xl font-medium">{info.name}</div>
          <div className="text-center mt-4 font-light text-md italic">{info.designation}</div>
          <div className="flex justify-center items-center mt-4 font-normal text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {info.currLoc}
          </div>
          <div className="px-6 text-center mt-4 mb-10 font-light text-sm text-gray-600">
            <p>
              {info.about}
            </p>
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default IndexPage

export const Head = () => <title>About | {info.name}</title>
