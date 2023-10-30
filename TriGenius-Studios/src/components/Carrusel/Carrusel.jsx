import React, { useState } from 'react'
import './Carrusel.css'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'

export function Carrusel ({ slides }) {
  const [current, setCurrent] = useState(0)

  // const previousSlide = () => {
  //   if (current === 0) setCurrent(slides.lenght - 1)
  //   else setCurrent(current - 1)
  // }

  // const nextSlide = () => {
  //   if (current === slides.lenght - 1) setCurrent(0)
  //   else setCurrent(current + 1)
  // }

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex transition ease-out duration-500'
        style={{
          transform: `translateX(-${current * 100}%`
        }}
      >
        {slides.map((s, index) => {
          return (
            <img className='carrusel-Img' key={index} src={s} />
          )
        })}
      </div>

      <div className='absolute top-0 h-full w-full justify-between item-center flex text-white px-10 text-5xl py-10px' id='Btn-arrow'>
        <button onClick={previousSlide} className='opacity-50 hover:opacity-100'>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className='opacity-50 hover:opacity-100'>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  )
}
