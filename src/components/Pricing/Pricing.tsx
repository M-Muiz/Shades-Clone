import pricingBorder from "../../assets/pricingBorder.svg"
import Card from "./Card"

const Pricing = () => {
  return (
    <div className="mt-20">
      <img src={pricingBorder} alt="pricingBorder" />
      <div className="bg-[#30393b] -mt-4 pb-10 flex flex-col gap-6">
        <h1 className="text-4xl text-center text-white font-semibold">Pricing that suits you better</h1>
        <p className="text-slate-300/80 text-lg text-center">
          We designed and tested prototypes that helped identify pain points in<br /> the account creation process. Together, we shaped the new standard.
        </p>
        <Card />
        <p className="text-slate-300/80 text-lg text-center">
          Still confused?
          <span className="text-white hover:underline ml-3 cursor-pointer">
            Check our full feature list
          </span>
        </p>
      </div>
    </div>
  )
}

export default Pricing
