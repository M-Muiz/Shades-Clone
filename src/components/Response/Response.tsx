import response from "../../assets/response.png"

const Response = () => {
    return (
        <div className='flex items-center gap-8 lg:gap-32 max-w-6xl mx-auto mt-24 flex-col lg:flex-row'>
            <div className="lg:h-full h-[300px]">
                <img src={response} alt="response" className="h-full" />
            </div>
            <div className="flex flex-col gap-10">
                <h1 className="text-4xl font-bold lg:text-6xl">
                    Response on a chat<br /> wherever you are
                </h1>

                <p className="text-base">
                    Create custom landing pages with Shades that<br /> convert more visitors than any website, no<br /> coding required.
                </p>

                <h5 className='text-[#1290a4] cursor-pointer'>Learn More &gt;</h5>
            </div>
        </div>
    )
}

export default Response