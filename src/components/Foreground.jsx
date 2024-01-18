import { useRef } from "react"
import Card from "./Card"

function Foreground() {
  const ref = useRef(null)
  const data = [
    {
      bodyText: "I am changing the text using props drilling from Foreground to Card Component 1",
      fileSize: ".7mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      bodyText: "I am changing the text using props drilling from Foreground to Card Component 2",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      bodyText: "I am changing the text using props drilling from Foreground to Card Component 3",
      fileSize: ".5mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "green",
      },
    },
  ]
  return (
    <div>
          <div ref = {ref} className='fixed w-full h-full top-0 left-0 z-[2] p-6 flex flex-wrap gap-10'>
            {
              data.map((item, i) => (
                <Card data={item} key={i} constrainsRef={ ref } />
              ))
            }
          </div>
    </div>
  )
}

export default Foreground