import neverImg from "../../assets/never.png"
import check from "../../assets/check.svg"
import { motion } from "framer-motion"


const Never = () => {
    return (
        <div className='flex justify-between max-w-6xl mx-auto mt-24 flex-col lg:flex-row items-center px-3 overflow-hidden'>

            <motion.div initial={{ x: "-70%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 2,
                    type: "spring"
                }} className="flex flex-col gap-10 mt-4">
                <h1 className="text-5xl font-bold">
                    Never miss a thing
                </h1>

                <p className="text-base text-center">

                    Event is not like most tech conferences. We<br /> want our presentations to engage the audience,<br /> spark discussion and inspire new ideas.
                </p>


                <motion.div
                    initial={{ x: 500, opacity: 0.3 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 items-center">
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
                </motion.div>

            </motion.div>
            <motion.div initial={{ x: 500, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 2,
                    type: "spring"
                }} className="h-full">
                <img src={neverImg} alt="never" />
            </motion.div>
        </div>
    )
}

export default Never
