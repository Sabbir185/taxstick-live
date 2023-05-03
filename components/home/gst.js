import React from 'react';

const Gst = () => {
    return (

        <div className="container mx-auto">
            <div className="flex justify-center mt-10">
                <h1 className="header_2 lg:w-[539px]">Advantages of
                    Tax  management System</h1>
            </div>
            <div className='lg:py-36 py-8'>
                <div className='lg:grid lg:grid-cols-2'>
                    <div className="lg:-ml-36 lg:-mt-32">
                        <div className='pr-20 lg:pr-0'> 
                            <img src="gst1.png" alt="about" />
                        </div>
                    </div>
                    <div className='lg:mt-4 lg:w-[536px] lg:pl-20'>
                        <h5 className="mt-1 header_4">
                        Corporate Tax Returns Preparing & Filing
                        </h5>
                        <p className="mt-5 paragraph_1 lg:w-[536px]">
                        We provide expert advise on the allowable business expenses and help you maximize benefits. All incorporated businesses in Canada are liable for corporate taxes.
                        </p>
                    </div>

                </div>
            </div>
            <div className=''>
                <div className='lg:grid lg:grid-cols-2'>
                    <div className='lg:mt-4 lg:w-[536px]'>
                        <h5 className="mt-1 header_4">
                            GST/HST, Payroll, WSIB & Other Government Filing
                        </h5>
                        <p className="mt-5 paragraph_1">
                            GST/HST returns for Individuals and Corporations to help them
                            claim their due benefits. Total payroll processing including
                            meeting the statutory requirements.
                        </p>

                    </div>

                    <div className="lg:-mt-32  lg:-ml-24 w-auto">
                        <div>
                            <img src="gst.png" alt="about" className="-mb-15" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gst;