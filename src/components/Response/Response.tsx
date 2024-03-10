import response from "../../assets/response.png"

const Response = () => {
    return (
        <div className='flex items-center gap-32 max-w-6xl mx-auto mt-24'>
            <div className="h-full">
                <img src={response} alt="response" />
            </div>
            <div className="flex flex-col gap-10">
                <h1 className="text-6xl font-bold">
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