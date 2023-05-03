import React from 'react';

const Support = () => {
    return (
        <div className='py-32'>
            <div className="container bg-white lg:h-[578px] rounded-lg">
                <div className=''>
                    <div className='lg:grid lg:grid-cols-2'>
                        <div className='lg:mt-20 pl-10'>
                            <img src="service2.png" alt="about" className="lg:w-[120px] lg:h-[120px]" />
                            <div className="lg:w-[468px]">
                                <h3 className='header_4 mt-5'>Impeccable Support System</h3>
                                <p className="paragraph_1 mt-8">Solve customer any issue with our easy-to-create support tickets and monitor progress via the ‘view ticket’ option</p>

                            </div>

                        </div>

                        <div className="mt-12 lg:w-auto">
                            <div>
                                <img src="support.png" alt="about" className="-mb-15" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-36">
                <div className=''>
                    <div className='lg:grid lg:grid-cols-2'>
                        <div className="mt-12  lg:w-auto">
                            <div>
                                <img src="Image.png" alt="about" className="-mb-15" />
                            </div>
                        </div>
                        <div className='lg:mt-24 lg:pl-32'>
                            <img src="responsive.png" alt="about" className="lg:w-[120px] lg:h-[120px]" />
                            <div className="">
                                <h3 className='header_4 mt-5'>Responsive Design</h3>
                                <p className="paragraph_1 mt-8">Taxstick is dynamically made to fit in any screen size – laptop, desktop, smartphones, and tabs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;