import nextBorder from "../../assets/next.svg"
import Card from "./Card"
import cardImg from "../../assets/one.svg"
import { motion } from "framer-motion"

const NextStep = () => {
    const data = [
        {
            img: cardImg,
            text: "Targeted Marketing",
            description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
        },
        {
            img: cardImg,
            text: "Targeted Marketing",
            description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
        },
        {
            img: cardImg,
            text: "Targeted Marketing",
            description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
        }
    ];
    return (
        <div className="mt-8">
            <img src={nextBorder} alt="" />
            <div className="bg-[#eef4f5] -mt-4 pb-10">
                <h1 className="text-center text-4xl font-semibold pt-6">Make your next step</h1>
                <motion.div initial={{ y: "40%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }} className="flex items-cneter flex-wrap justify-center gap-8 mt-12 p-4">
                    {
                        data.map((item, ind) => (
                            <Card data={item} ind={ind} />
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default NextStep


