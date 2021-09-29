import React from 'react'
import img from '../images/image-mockups.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className=" flex  flex-col-reverse md:flex-row complete-bg">
            {/* text and button */}
            <div className=" mx-5 md:ml-20 mt-16 w-auto md:w-96 text-center md:text-left">
                <h1 className="text-2xl md:text-5xl">Next generation digital banking</h1> <br />
                <p> Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </p>

                <button className=" px-4 py-3 mt-5 rounded-l-full rounded-r-full button-bg text-white font-bold duration-500 hover:opacity-75">
                    Request Invite
                </button>
            </div>

            {/* image */}
            <div className='flex flex-1 justify-end'>
                <div className="bg-img">
                    <img src={img} alt="" className="w-96 -mt-20" />
                </div>
            </div>
        </div>
    )
}

export default Banner
