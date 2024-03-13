

const Join = () => {
    return (
        <div className='max-w-2xl mx-auto mt-20 flex flex-col items-center gap-7'>
            <h1 className="text-2xl lg:text-4xl font-semibold">
                Join our rich newsletter now
            </h1>
            <p className="text-md lg:text-lg text-center">
                We designed and tested prototypes that helped identify pain points in the account creation process. Together, we shaped the new standard.

            </p>
            <div className="flex items-center gap-2">
                <input className="border-none outline-none bg-slate-200/70 w-80 p-3 rounded-sm h-12" type="text" placeholder="Enter Your Email" />
                <button className="bg-[#1290a4] text-white p-3 w-36 rounded-sm text-sm h-12">Subscribe</button>
            </div>
            <p className="text-base -mt-4 text-black/80">
                Your data is protected. We never spam in your inbox
            </p>
        </div>
    )
}

export default Join
