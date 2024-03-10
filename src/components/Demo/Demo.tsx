import demoImg from "../../assets/demo.png"

const Demo = () => {
    return (
        <div className='flex justify-between max-w-6xl mx-auto mt-24 pb-6'>
            <div className="h-full w-full">
                <img src={demoImg} alt="Demo" />
            </div>
            <div className="flex flex-col gap-7">
                <h1 className="text-5xl font-bold">
                    Increase Customer Support Productivity
                </h1>

                <p className="text-base">
                    Event is not like most tech conferences. We<br /> want our presentations to engage the audience,<br /> spark discussion and inspire new ideas.
                </p>

                <div className="seprator" />
                <p className="text-sm">
                    Interested to see how it works? Schedule a free demo to get<br /> to learn everything you need to know.
                </p>

                <button className='bg-red-500/70 p-4 text-white font-bold tracking-widest rounded-sm'>Schedule A Demo</button>
            </div>
        </div>
    )
}

export default Demo
