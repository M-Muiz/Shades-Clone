import logo from "../../assets/logo.png"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto flex items-center flex-col lg:flex-row justify-between px-3 py-5 gap-3">
      <motion.div
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "spring"
        }}
      >
        <img src={logo} alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}>
        <ul className="flex items-center gap-5">
          <li className="secondaryText hover:text-[#1290a4]">Free Landing Pages</li>
          <li className="secondaryText hover:text-[#1290a4]">Features</li>
          <li className="secondaryText hover:text-[#1290a4]">Services</li>
          <li className="secondaryText hover:text-[#1290a4]">Pricing</li>
          <li className="secondaryText hover:text-[#1290a4]">Contact</li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "spring"
        }}
        className="flex items-center gap-3">
        <button className="hover:bg-[#1290a4]  hover:text-white rounded-sm p-3 w-40">Browse Assets</button>
        <button className="bg-[#1290a4] text-white p-3 w-40 rounded-sm text-sm">Clone The Demo</button>
      </motion.div>
    </div>
  )
}

export default Header
