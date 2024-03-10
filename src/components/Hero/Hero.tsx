import heroImg from "../../assets/hero.png"

const Hero = () => {
    return (
        <div className="max-w-6xl mx-auto flex items-center mt-20">
            <div className="flex flex-col gap-8">
                <h1 className="text-6xl font-bold">
                    Live chat support for<br /> your customers.
                </h1>
                <p className="text-lg font-semibold">Create custom landing pages with Shades that convert<br /> more visitors than any website—no coding required.</p>
                <div className="flex items-center gap-2">
                    <input className="border-none outline-none" type="text" placeholder="Enter Your Email" />
                    <button className="bg-[#1290a4] text-white p-3 w-36 rounded-sm text-sm">Get Started</button>
                </div>
                <h3>Already using Shade? <span className="text-[#1290a4] cursor-pointer"> Sign In </span></h3>
            </div>

            <div className="h-full w-[550px]">
                <img className="h-full w-full" src={heroImg} alt="Hero Image" />
            </div>
        </div>
    )
}

export default Hero
