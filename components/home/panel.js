import Link from 'next/link';
import React from 'react';

const Panel = () => {
    return (
        <>
            <div className="container">
                <div className="flex lg:flex-row flex-col lg:gap-x-6 gap-y-6 mt-6 lg:mt-0">
                    <Link target='_blank' href="https://taxstick.appstick.com.bd/login/">
                        <button className='lg:w-[424px] w-full h-[146px] bg-white hover:bg-orange hover:text-white header_3 rounded-xl'>Admin Panel</button>
                    </Link>
                    <Link target='_blank' href="https://taxstick.appstick.com.bd/login/">
                        <button className='lg:w-[424px] w-full h-[146px] bg-white hover:bg-orange hover:text-white header_3 rounded-xl'>User Panel</button>
                    </Link>
                    <Link target='_blank' href="https://taxstick.appstick.com.bd/login/">
                        <button className='lg:w-[424px] w-full h-[146px] bg-white hover:bg-orange hover:text-white header_3 rounded-xl'>Tax Preparer Panel</button>
                    </Link>

                </div>

            </div>
        </>
    );
};

export default Panel;