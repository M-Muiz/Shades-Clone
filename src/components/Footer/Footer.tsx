import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className='max-w-6xl mx-auto mt-20 flex justify-between flex-wrap gap-7 pb-40'>
            {/* <div className="h-1 bg-red-100" /> */}

            <div className="flex flex-col gap-6">
                <img className="w-24" src={logo} alt="logo" />
                <div className="text-base">
                    Big, small, online, offline, local. Size doesn't<br /> matter. We work on diverse projects for top<br /> brands as well as for cool startups.
                </div>
                <div className="h-4 w-4">
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
            </div>

            <div className="flex flex-1 flex-wrap justify-around">
                <div className="font-semibold">
                    <p className="text-sm text-gray-500 font-medium">Help Menu</p>

                    <p className="mt-6">About</p>
                    <p className="mt-2">Features</p>
                    <p className="mt-2">Works</p>
                    <p className="mt-2">Careers</p>

                </div>
                <div className="font-semibold">
                    <p className="text-sm text-gray-500 font-medium">Support</p>

                    <p className="mt-6">Cotact</p>
                    <p className="mt-2">Help & Support</p>
                    <p className="mt-2">Privacy Policy</p>
                    <p className="mt-2">Terms & Conditions</p>

                </div>
                <div className="font-semibold">
                    <p className="text-sm text-gray-500 font-medium">Products</p>

                    <p className="mt-6">Shades Pro</p>
                    <p className="mt-2">Essential Blocks</p>
                    <p className="mt-2">Avasta Dash</p>
                    <p className="mt-2">App Landing Page</p>

                </div>
            </div>
        </div>
    )
}

export default Footer
