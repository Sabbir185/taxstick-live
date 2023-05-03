import React, { useState } from 'react';

const data = [
    {
        _id: 1,
        image: "icon/Icon.png",
        title: 'Tax Feeling'
    },
    {
        _id: 2,
        image: "icon/price.png",
        title: 'Pricing Plan'
    },
    {
        _id: 3,
        image: "icon/public.png",
        title: 'Services'
    },
    {
        _id: 4,
        image: "icon/customer.png",
        title: 'Support Ticket'
    },
    {
        _id: 5,
        image: "icon/career.png",
        title: 'Career'
    },
]
const TaxFilling = () => {
    const [tab, setTab] = useState(1);
    console.log("tab", tab);
    return (
        <div className='container py-36'>
            <h1 className='header_2'>World’s best Tax Feeling website at your fingertips</h1>
            <div className="flex lg:flex-row flex-col mt-6">
                <div className="flex-col">
                    {
                        data?.map(item => {
                            return (
                                <div key={item?._id} onClick={() => setTab(item?._id)} className={tab === (item?._id) ? "bg-white w-[336px] h-[96px] rounded-xl items-center py-6 my-4" : "cursor-pointer w-[336px] h-[96px] hover:bg-white items-center rounded-xl py-6 my-4"}>
                                    <div className="flex space-x-6 ">
                                        <div className="ml-4">
                                            <img src={item?.image} alt="" />
                                        </div>
                                        <h1 className="header_3">{item?.title}</h1>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div hidden={tab != 1}>
                    <div className='lg:pl-28'>
                        <img src="tax_filling.png" alt="" className='object-fit rounded-2xl w-[872px] h-[571px]' />
                    </div>
                </div>
                <div hidden={tab != 2}>
                    <div className='lg:pl-28'>
                        <img src="pricing.png" alt="" className='object-fit rounded-2xl w-[872px] h-[571px]' />
                    </div>
                </div>
                <div hidden={tab != 3}>
                    <div className='lg:pl-28'>
                        <img src="service.png" alt="" className='object-fit rounded-2xl w-[872px] h-[571px]' />
                    </div>
                </div>
                <div hidden={tab != 4}>
                    <div className='lg:pl-28'>
                        <img src="ticket.png" alt="" className='object-fit rounded-2xl w-[872px] h-[571px]' />
                    </div>
                </div>
                <div hidden={tab != 5}>
                    <div className='lg:pl-28'>
                        <img src="carrer.png" alt="" className='object-fit rounded-2xl w-[872px] h-[571px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaxFilling;
