import Link from 'next/link';
import React from 'react';

const AdminDashboard = () => {
    return (
        <>
            <div className="container ">
                <h1 className="header_2 py-10">Powerful Admin Panel  </h1>
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col lg:flex-row lg:gap-x-6 gap-y-6">
                        <img src="admin_1.png" alt="" className='w-[648px] h-[400px] object-fit rounded-lg' />
                        <img src="admin_2.png" alt="" className='w-[648px] h-[400px] object-fit rounded-lg' />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:gap-x-6 gap-y-6">
                        <img src="admin_3.png" alt="" className='w-[648px] h-[400px] object-fit rounded-lg' />
                        <img src="admin_4.png" alt="" className='w-[648px] h-[400px] object-fit rounded-lg' />
                    </div>
                </div>
                <div className="paragraph mt-10 hover:text-blue ">
                    <Link target='_blank' href="https://taxstick.appstick.com.bd/login/" className='border-b border-black'>
                        Admin Panel
                    </Link>
                </div>

            </div>
        </>
    );
};

export default AdminDashboard;