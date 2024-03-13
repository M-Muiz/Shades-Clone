import logo from "../../assets/logo.png"
import facebookIcon from "../../assets/fb.jpeg"
import instaIcon from "../../assets/insta.jpeg"
import linkdeinIcon from "../../assets/linkdein.jpeg"


const Footer = () => {
    return (
        <div className='max-w-6xl mx-auto mt-20 flex flex-col  md:flex-row justify-between  gap-7 pb-12 lg:pb-32 px-6'>


            <div className="flex flex-col gap-6 items-center">
                <img className="w-24" src={logo} alt="logo" />
                <div className="text-base text-center">
                    Big, small, online, offline, local. Size doesn't<br /> matter. We work on diverse projects for top<br /> brands as well as for cool startups.
                </div>
                <div className="flex items-center gap-3">

                    <div className="h-6 w-6 cursor-pointer">
                        <img src={facebookIcon} alt="FaceBook" />
                    </div>
                    <div className="h-6 w-6 cursor-pointer">
                        <img src={instaIcon} alt="Instagram" />
                    </div>
                    <div className="h-6 w-6 cursor-pointer">
                        <img src={linkdeinIcon} alt="Linkdein" />
                    </div>

                </div>
            </div>

            <div className="flex md:flex-1 flex-wrap md:flex-nowrap justify-around">
                <div className="font-semibold">
                    <p className="text-sm text-gray-500 font-medium pointer-events-none">Help Menu</p>

                    <p className="mt-6 cursor-pointer hover:text-[#1290a4]">About</p>
                    <p className="mt-2 cursor-pointer hover:text-[#1290a4]">Features</p>
                    <p className="mt-2 cursor-pointer hover:text-[#1290a4]">Works</p>
                    <p className="mt-2 cursor-pointer hover:text-[#1290a4]">Careers</p>

                </div>
                <div className="font-semibold">
                    <p className="text-sm text-gray-500 font-medium pointer-events-none">Support</p>

                    <p className="mt-6 cursor-pointer hover:text-[#1290a4]">Cotact</p>
                    <p className="mt-2 cursor-pointer hover:text-[#1290a4]">Help & Support</p>
                    <p className="mt-2 cursor-pointer hover:text-[#1290a4]">Privacy Policy</p>
                    <p className="mt-2 cursor-pointer hover:text-[#1290a4]">Terms & Conditions</p>

                </div>
                <div className="font-semibold">
                    <p className="text-sm text-gray-500 font-medium pointer-events-none">Products</p>

                    <p className="mt-6 cursor-pointer hover:text-[#1290a4]">Shades Pro</p>
                    <p className="mt-2 cursor-pointer hover:text-[#1290a4]">Essential Blocks</p>
                    <p className="mt-2 cursor-pointer hover:text-[#1290a4]">Avasta Dash</p>
                    <p className="mt-2 cursor-pointer hover:text-[#1290a4]">App Landing Page</p>

                </div>
            </div>
        </div>
    )
}

export default Footer
