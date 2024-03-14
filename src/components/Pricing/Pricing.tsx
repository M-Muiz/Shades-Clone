import pricingBorder from "../../assets/pricingBorder.svg"
import Card from "./Card"

const Pricing = () => {
  const data = [
    {
      name: "BASIC",
      price: 19,
      blocks: true,
      cloud: true,
      domain: false,
      emails: false,
      isPopular: false
    },
    {
      name: "PRO",
      price: 25,
      blocks: true,
      cloud: true,
      domain: true,
      emails: false,
      isPopular: true
    },
    {
      name: "ADVANCE",
      price: 30,
      blocks: true,
      cloud: true,
      domain: true,
      emails: true,
      isPopular: false
    },
  ];
  return (
    <div className="mt-20">
      <img className="w-full" src={pricingBorder} alt="pricingBorder" />
      <div
        className="bg-[#30393b] pt-6 pb-10 flex flex-col gap-10 px-4">
        <h1 className="text-4xl text-center text-white font-semibold">Pricing that suits you better</h1>
        <p className="text-slate-300/80 text-sm md:text-lg text-center">
          We designed and tested prototypes that helped identify pain points in<br /> the account creation process. Together, we shaped the new standard.
        </p>
        <div
          className="flex flex-wrap max-w-6xl mx-auto gap-4 items-center justify-center">
          {
            data.map((item, ind) => (
              <Card data={item} ind={ind} />
            ))
          }
        </div>
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
