import Link from "next/link"

const Features = () => {
    return (
        <>
            <div className="container py-16 mx-auto">
                <h1 id="features" className="header_2 ">Two stunting home page design </h1>
                <div className="flex flex-col md:flex-row gap-x-4 mt-10">
                    <div className="flex-col">
                        <div className="group relative">
                            <img className="object-fill rounded-2xl w-[648px] h-[738px]" src="ss_1.png" alt="" />
                            <div className="absolute rounded-2xl top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#212121B2] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                                <Link href="https://taxstick.appstick.com.bd/" target="_blank" className="rounded-md flex space-x-2 w-40 h-14 paragraph text-white bg-orange justify-center items-center">Check Demo</Link>
                            </div>
                        </div>
                        <p className="paragraph mt-10">Version 1.0.0</p>
                    </div>
                    <div className="flex-col">
                        <div className="group relative">
                            <img className="object-cover rounded-2xl w-[648px] h-[738px]" src="ss_2.png" alt="" />
                            <div className="absolute rounded-2xl top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#212121B2] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                                <Link href="https://taxstick.appstick.com.bd/" target="_blank" className="rounded-md flex space-x-2 w-40 h-14 paragraph text-white bg-orange justify-center items-center">Check Demo</Link>
                            </div>
                        </div>
                        <p className="paragraph mt-10">Version 1.0.1</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features