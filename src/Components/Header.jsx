import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isOPen, setIsOpen] = useState(false)
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
            <Link to='/' className='inline-flex items-center'>
                <BoltIcon className="h-6 w-6 text-blue-500" />
                <h5 className='ml-2 text-xl font-bold tracking-wide text-gray-800'>NextPage</h5>
            </Link>
            <ul className='items-center hidden space-x-8 lg:flex'> 
                <li>
                    <NavLink to='/' className={({isActive})=> (isActive?'text-blue-600' : 'text-red-600')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/books' className={({isActive})=> (isActive?'text-blue-600' : 'text-red-600')}>Books</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive})=> (isActive?'text-blue-600' : 'text-red-600')}>About Us</NavLink>
                </li>
            </ul>
        </div>
        </div>
    );
};

export default Header;