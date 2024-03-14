import response from "../../assets/response.png"
import { motion } from "framer-motion"

const Response = () => {
    return (
        <div className='flex items-center gap-8 lg:gap-32 max-w-6xl mx-auto mt-24 flex-col lg:flex-row overflow-hidden'>
            <motion.div initial={{ x: "-70%", opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 2,
                    type: "spring"
                }} className="lg:h-full h-[300px]">
                <img src={response} alt="response" className="h-full" />
            </motion.div>
            <motion.div initial={{ y: "100%", opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 2,
                    type: "spring"
                }} className="flex flex-col gap-10">
                <h1 className="text-4xl font-bold lg:text-6xl">
                    Response on a chat<br /> wherever you are
                </h1>

                <p className="text-base">
                    Create custom landing pages with Shades that<br /> convert more visitors than any website, no<br /> coding required.
                </p>

                <h5 className='text-[#1290a4] cursor-pointer'>Learn More &gt;</h5>
            </motion.div>
        </div>
    )
}

export default Response