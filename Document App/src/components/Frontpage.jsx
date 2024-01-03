import React ,{ useRef} from 'react'
import Card from './Card'

function Frontpage() {
  // const data =[
  //   desc,filesize,closeordownload , tagdetails
  // ]
  const ref=useRef(null);
  const data = [
    {
      desc: "Lorem, ipsum  adipisicing elit. Dolorum ut voluptates, quod repellendus eveniet magni perferendis est nemo minima modi.",
      filesize: ".9mb",
      close: false,
      tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetues, quod repellendus eveniet magni perferendis est nemo minima modi.",
      filesize: ".9mb",
      close: true,
      tagDetails: { isOpen: false, tagTitle: "Download Now", tagColor:"green" },
    },
    {
      desc: "Lorem, sit amet consectetur adipisicing elit. Dolorum ut voluptates, quod repellendus eveniet magni perferendis est nemo minima modi.",
      filesize: ".9mb",
      close: false,
      tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor:"violet" },
    },
  ];
  return (
    <>
      <div ref={ref} className='fixed p-5 top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap'>
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
        
      </div>
    </>
  )
}

export default Frontpage
