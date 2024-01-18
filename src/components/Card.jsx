import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card({data}) {
  return (
    <div className="relative overflow-hidden w-60 h-72 rounded-[40px] px-5 py-10 bg-zinc-900/90 text-white ">
          <FaRegFileAlt className="h-6" />
      <p className="mt-4 leading-tight text-sm">{ data.bodyText }</p>
          
          <div className="footer absolute w-full left-0 bottom-0">
              <div className="flex justify-between items-center px-8 py-4">
                  <p>{ data.fileSize}</p>
                  <span className="w-7 h-7 bg-zinc-600 flex justify-center items-center rounded-full">
                    <LuDownload color="#fff" size=".8em"/>
                  </span>
              </div>
              <div className="tag w-full bg-green-600 py-4">
                  <h3 className="text-center text-sm ">Download Now</h3>
              </div>
          </div>
    </div>
  )
}

export default Card