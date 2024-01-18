import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data }) {
  return (
    <motion.div drag className="relative overflow-hidden w-60 h-72 rounded-[40px] px-5 py-10 bg-zinc-900/80 text-white shrink-0">
      <FaRegFileAlt />
      <p className="mt-4 text-sm w-[90%]">{data.bodyText}</p>

      <div className="footer absolute w-full left-0 bottom-0">
        <div className="flex justify-between items-center px-8 py-4">
          <p>{data.fileSize}</p>
          <span className="w-7 h-7 bg-zinc-600 flex justify-center items-center rounded-full">
            {data.close ? <IoClose /> : <LuDownload color="#fff" size=".8em" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"} py-4`}>
            <h3 className="text-center text-sm ">{data.tag.tagTitle}</h3>
          </div>
        )}
        
      </div>
    </motion.div>
  )
}

export default Card