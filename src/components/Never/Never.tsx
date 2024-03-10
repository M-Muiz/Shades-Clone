import neverImg from "../../assets/never.png"
import check from "../../assets/check.svg"

const Never = () => {
    return (
        <div className='flex justify-between max-w-6xl mx-auto mt-24'>

            <div className="flex flex-col gap-10 mt-4">
                <h1 className="text-5xl font-bold">
                    Never miss a thing
                </h1>

                <p className="text-base">

                    Event is not like most tech conferences. We<br /> want our presentations to engage the audience,<br /> spark discussion and inspire new ideas.
                </p>


                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <img src={check} alt="check" />
                        <h4>Unlimited design possibility</h4>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={check} alt="check" />
                        <h4>Completely responsive</h4>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={check} alt="check" />
                        <h4>Easy to customize</h4>
                    </div>
                </div>

            </div>
            <div className="h-full">
                <img src={neverImg} alt="never" />
            </div>
        </div>
    )
}

export default Never
