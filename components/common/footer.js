const Footer = () => {
    return (
        <div className="container pt-32 mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-8 lg:gap-y-0">
                <div className="lg:w-[686px] w-fit space-y-8">
                    <h1 className="header_4">Build an All-inclusive Tax Feeling Website with Taxstick</h1>
                    <div className="flex space-x-8">
                        <a target="_blank" href="https://taxstick.appstick.com.bd/" className="rounded-md flex space-x-2 w-40 h-14 paragraph text-white bg-orange justify-center items-center">Check Demo</a>
                        <a target="_blank" href="https://codecanyon.net/item/taxstick-tax-filing-management-system/41455834" className="rounded-md flex space-x-2 w-40 h-14 paragraph text-white bg-blue justify-center items-center">Buy Now</a>
                    </div>
                </div>
                <div className="lg:pl-80">
                    <div className='w-[272px] h-[198px] bg-white rounded-lg'>
                        <div className='flex justify-center'>
                            <h1 className='header_2 mt-5'>$99</h1>
                        </div>
                        <div className='flex justify-center mt-4'>
                            <p className='paragraph'>One time Buy Life time update</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className="border-b border-[#736D6D] mt-12"></div>
            <div className="text-center my-8">
                <p className="paragraph">© {new Date().getFullYear()} Taxstick. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer
