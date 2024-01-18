import Card from "./Card"

function Foreground() {
  const data = [
    {
      bodyText: "I am changing the text using the props drilling.",
      fileSize: ".7mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ]
  return (
    <div>
          <div className='fixed w-full h-full top-0 left-0 z-[2] p-10'>
            {
              data.map((item, i) => (
                <Card data={item} key={i}/>
              ))
            }
          </div>
    </div>
  )
}

export default Foreground