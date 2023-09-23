import React, { useRef } from 'react'
import './Slider.css'

import img1 from '../../../assets/img/011.png'
import img2 from '../../../assets/img/022.png'
import img3 from '../../../assets/img/033.png'
import img4 from '../../../assets/img/044.png'
import next from '../../../assets/img/Next.png'
import prev from '../../../assets/img/Prev.png'

function Slider() {
  let offset = 0;
  const sliderLine = useRef()
  const increment =useRef()
  const decrement =useRef()

  let incrementButton =()=> {
        offset = offset + 343;
        if(offset > 1029){
            offset = 0;
        }
        sliderLine.current.style['left'] =  -offset + 'px';
  }

  let decrementButton =()=> {
        offset = offset - 343;
        if(offset < 0){
            offset = 1029;
        }
        sliderLine.current.style["left"] =  -offset + 'px';
  }

  return (
    <div className='container'>
        <div className='slider'>
            <div className='slider-line' ref={sliderLine}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>

            <button onClick={decrementButton} ref={decrement} className='btn-prev btn'><img src={prev}  alt="" /></button>
            <button onClick={incrementButton} ref={increment} className='btn-next btn'><img src={next}  alt="" /></button>
        </div>
    </div>
  )
}

export default Slider