import React from 'react'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? 'text-center px-10 w-full  h-64 absolute top-20 right-0 ' : 'hidden'}
            onClick={toggle}>

            <ul className=" mt-2 border-2 rounded-lg bg-white">

                <li className="p-1">Home</li>
                <li className="p-1">About</li>
                <li className="p-1">Contact</li>
                <li className="p-1">Blog</li>
                <li className="p-1">Careers</li>
            </ul>
        </div>
    )
}

export default Dropdown
