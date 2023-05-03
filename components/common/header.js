import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
    const [show, setshow] = useState(false);
    const { push } = useRouter()

    return (
        <>
            <div className="container">
                <div className="">
                    <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
                        {/* For large and Medium-sized Screen */}
                        <div className="flex justify-between ">
                            <div className="items-center space-x-6 w-[180px] h-[85px]">
                                <img src="Logo.png" alt="" />
                            </div>

                            <div className="hidden sm:flex flex-row space-x-4">
                                <a href="#features" className="paragraph text-gray-800 hover:text-orange justify-center mt-4">Features</a>
                                <a href="https://documentation.taxstick.appstick.com.bd/" target="_blank" className="paragraph text-gray-800 hover:text-orange justify-center mt-4 px-4">Documentation</a>
                                <a target="_blank" href="https://taxstick.appstick.com.bd/" className="rounded-md flex space-x-2 w-40 h-14 paragraph text-white bg-orange justify-center items-center">Check Demo</a>
                                <a target="_blank" href="https://codecanyon.net/item/taxstick-tax-filing-management-system/41455834" className="rounded-md flex space-x-2 w-40 h-14 paragraph text-white bg-blue justify-center items-center">Buy Now</a>
                            </div>
                            {/* Burger Icon */}
                            <div id="bgIcon" onClick={() => setshow(!show)} className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}>
                                <svg className={`${show ? 'hidden' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className=" transform duration-150" d="M4 6H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 12H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className=" transform duration-150" d="M4 18H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg className={`${show ? 'block' : 'hidden'}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        {/* Mobile and small-screen devices (toggle Menu) */}
                        <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}>

                            <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
                                <a href="#" className="paragraph text-gray-800 hover:text-orange justify-center mt-4">Features</a>
                                <a href="#" className="paragraph text-gray-800 hover:text-orange justify-center mt-4 px-4">Documentation</a>
                                <button className="ml-20 rounded-md flex space-x-2 w-40 h-14 paragraph text-white bg-orange justify-center items-center">Check Demo</button>
                                <button className="ml-20 rounded-md flex space-x-2 w-40 h-14 paragraph text-white bg-blue justify-center items-center">Buy Now</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header