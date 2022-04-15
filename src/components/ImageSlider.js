import React, { useRef } from 'react'

export default function ImageSlider() {



    const ref = useRef();
    const takeLeft=(scrollOffset)=>{
        ref.current.scrollLeft -=scrollOffset
       
    }
    
    const imgs = [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    ]
  return (
    <div ref={ref} className='image-slider'>
        <button className="btns prev" onClick={()=>takeLeft(100)}>
            <i className='im im-angle-left-circle'></i>
        </button>
        {imgs.map((img)=><img className='imgs' src={img} />)}
        
        <button className="btns next" onClick={()=>takeLeft(-100)}>
        <i className='im im-angle-right-circle'></i>
        </button>
    </div>
  )
}
