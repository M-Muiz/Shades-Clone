import heroImg from "../../assets/hero.png"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="max-w-6xl mx-auto flex items-center flex-col md:flex-row mt-20 px-3">
            <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col gap-8">
                <h1 className="text-4xl lg:text-6xl font-bold">
                    Live chat support for<br /> your customers.
                </h1>
                <p className="text-lg font-medium">Create custom landing pages with Shades that convert<br /> more visitors than any website—no coding required.</p>
                <div className="flex items-center gap-2">
                    <input className="border-none outline-none bg-slate-200/70 w-72 p-3 rounded-sm h-12" type="text" placeholder="Enter Your Email" />
                    <button className="bg-[#1290a4] text-white p-3 w-36 rounded-sm text-sm h-12">Get Started</button>
                </div>
                <h3>Already using Shade? <span className="text-[#1290a4] cursor-pointer"> Sign In </span></h3>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                 className="h-full w-[350px] md:w-[550px]">
                <img className="h-full w-full" src={heroImg} alt="Hero Image" />
            </motion.div>
        </div>
    )
}

export default Hero
