import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto flex items-center justify-between px-3 py-5">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li className="secondaryText">Free Landing Pages</li>
          <li className="secondaryText">Features</li>
          <li className="secondaryText">Services</li>
          <li className="secondaryText">Pricing</li>
          <li className="secondaryText">Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <button className="hover:bg-[#1290a4]  hover:text-white rounded-sm p-3 w-40">Browse Assets</button>
        <button className="bg-[#1290a4] text-white p-3 w-40 rounded-sm text-sm">Clone The Demo</button>
      </div>
    </div>
  )
}

export default Header
