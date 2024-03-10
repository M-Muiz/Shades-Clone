import check from "../../assets/blackCheck.png"

const Card = ({ data, ind }: any) => {
    return (
        <div className="bg-white p-8 w-[360px] rounded-md flex flex-col gap-6 relative" key={ind}>
            {data.isPopular ? (
                <div className="absolute top-0 left-0 right-0 bg-red-700 w-full h-2" />
            ) : ("")}
            <h5 className="relative">{data.name}
                {
                    data.isPopular ? (
                        <div className="bg-red-300/90 p-2 max-w-max rounded-[100px] absolute top-0 right-1 text-sm text-white font-semibold">Popular</div>
                    ) : ("")
                }
            </h5>
            <h2 className='text-2xl font-semibold'>${data.price} <span className='text-sm'>/month</span></h2>
            <p className='text-sm'>Good for small business launching their products less then once a year</p>
            <div className="flex items-center gap-2">
                <img className="h-3 w-3 object-contain" src={check} alt="check" />
                <h4 className={`${data.blocks ? "" : "line-through"}`}>Unlimited Blocks</h4>
            </div>
            <div className="flex items-center gap-2">
                <img className="h-3 w-3 object-contain" src={check} alt="check" />
                <h4 className={`${data.cloud ? "" : "line-through"}`}>5GB Clould Storages</h4>
            </div>
            <div className="flex items-center gap-2">
                <img className="h-3 w-3 object-contain" src={check} alt="check" />
                <h4 className={`${data.domain ? "" : "line-through"}`}>Custom Domain Names</h4>
            </div>
            <div className="flex items-center gap-2">
                <img className="h-3 w-3 object-contain" src={check} alt="check" />
                <h4 className={`${data.emails ? "" : "line-through"}`}>Unlimited Emails</h4>
            </div>
            <div>
                <button className="bg-[#1290a4] text-white p-3 w-36 font-semibold tracking-wider rounded-md text-sm h-12">Start free trial</button>
                <p className="text-sm">No credit card required</p>
            </div>
        </div>
    )
}

export default Card
