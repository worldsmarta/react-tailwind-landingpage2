import React from 'react'
import img1 from '../images/image-currency.jpg'
import img2 from '../images/image-restaurant.jpg'
import img3 from '../images/image-plane.jpg'
import img4 from '../images/image-confetti.jpg'
const Section2 = () => {
    return (
        <div className=" my-20 mx-7 md:mx-20 lg:mx-7">
            <h1 className=" text-4xl mb-6 text-center md:text-left">Latest Articles</h1>
            <div className=" flex flex-col md:grid md:grid-cols-2 md:gap-10 lg:grid lg:grid-cols-4 lg:gap-1 xl:gap-4">
                {/* article 1 */}
                <div>
                    <div className=" flex flex-1 justify-center md:block">
                        <img src={img1} alt="" className=" h-60" />
                    </div>

                    <div className=" text-center md:text-left">
                        <p className="mt-2 mb-4 font-semibold">By Clare Robinson</p>
                        <p className=" mb-3 font-bold cursor-pointer hover:text-green-700 text-2xl">Receive money in any currency with no fees</p>
                        <p className=" mb-10 md:mb-0">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …
                        </p>
                    </div>
                </div>

                {/* article 2 */}
                <div>
                    <div className=" flex flex-1 justify-center md:block">
                        <img src={img2} alt="" className="h-60" />
                    </div>

                    <div className=" text-center md:text-left">
                        <p className="mt-2 mb-4 font-semibold">By Wilson Hutton</p>
                        <p className=" mb-3 font-bold cursor-pointer hover:text-green-700 text-2xl">Treat yourself without worrying about money</p>
                        <p className=" mb-10 md:mb-0">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …
                        </p>
                    </div>
                </div>

                {/* article 3 */}
                <div>
                    <div className=" flex flex-1 justify-center md:block">
                        <img src={img3} alt="" className="h-60" />
                    </div>

                    <div className=" text-center md:text-left">
                        <p className="mt-2 mb-4 font-semibold">By Wilson Hutton</p>
                        <p className=" mb-3 font-bold cursor-pointer hover:text-green-700 text-2xl">Take your Easybank card wherever you go</p>
                        <p className=" mb-10 md:mb-0">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …
                        </p>
                    </div>
                </div>

                {/* article 4 */}
                <div>
                    <div className=" flex flex-1 justify-center md:block">
                        <img src={img4} alt="" className="h-60" />
                    </div>

                    <div className=" text-center md:text-left">
                        <p className="mt-2 mb-4 font-semibold">By Claire Robinson</p>
                        <p className=" mb-3 font-bold cursor-pointer hover:text-green-700 text-2xl">Our invite-only Beta accounts are now live! </p>
                        <p className=" mb-10 md:mb-0">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
