import React from 'react';

import { Link } from 'gatsby';

import data from '../../../data/mydetails.json'

const Navbar = () => {

  const name = data.personalinfo.name;

  const links = [
    {
      'id': 1,
      'path': '/',
      'page': 'About'
    },
    {
      'id': 2,
      'path': '/resume',
      'page': 'Resume'
    },
    {
      'id': 3,
      'path': '/contact',
      'page': 'Contact'
    },

  ];

  return (
    <nav className="flex justify-between px-20 py-10 items-center bg-white">
      <h1 className="text-3xl text-gray-800 font-semibold">
        <Link to='/'>{name}</Link>
      </h1>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          {
            links.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.path} className="font-semibold text-gray-400 hover:text-sky-500" activeClassName='text-sky-500 underline underline-offset-8 underline decoration-sky-500 underline decoration-2'>{link.page}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;