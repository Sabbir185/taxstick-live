const Hero = () => {
    return (
        <div className="container py-32 mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-8 lg:gap-y-0">
                <div className="lg:w-[536px] w-fit space-y-8">
                    <h1 className="header_1">Create your own Tax Feeling  website within minutes!</h1>
                    <p className="paragraph">A fully functional website without the need to write a single line of code. Just create your courses and start selling today…</p>
                    <div className="flex space-x-8">
                        <a target="_blank" href="https://taxstick.appstick.com.bd/" className="rounded-md flex space-x-2 w-40 h-14 paragraph text-white bg-orange justify-center items-center">Check Demo</a>
                        <a target="_blank" href="https://codecanyon.net/item/taxstick-tax-filing-management-system/41455834" className="rounded-md flex space-x-2 w-40 h-14 paragraph text-white bg-blue justify-center items-center">Buy Now</a>
                    </div>
                </div>
                <div className="">
                    <img src="hero.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
