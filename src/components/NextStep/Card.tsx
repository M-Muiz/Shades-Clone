
const Card = ({ data, ind }: any) => {

    return (
        <div className="bg-white p-6 max-w-[350px] flex flex-col gap-8" key={ind}>

            <div className='rounded-full bg-red-300/30 max-w-max p-4 mt-4'>
                <img src={data.img} alt="Images" />
            </div>
            <h1 className='text-2xl font-semibold tracking-wider'>
                {data.text}
            </h1>
            <p className="text-base">
                {data.description}
            </p>
            <h5 className='text-[#1290a4] cursor-pointer'>Learn More &gt;</h5>
        </div>
    )
}

export default Card
