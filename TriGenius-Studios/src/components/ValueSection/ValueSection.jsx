import React from 'react'
import './ValueSection.css'

export function ValueSection() {
  const valueData = [
    {
      imgValue: './src/images/Creativity.png',
      title: 'Creativity',
      text: 'We encourage creativity in all aspects of our work, seeking innovative and original solutions.'
    },
    {
      imgValue: './src/images/Quality.png',
      title: 'Quality',
      text: 'We are committed to delivering high quality work on every project, with no compromise on excellence.'
    },
    {
      imgValue: './src/images/Adaptability.png',
      title: 'Adaptability',
      text: 'We embrace change and are willing to adapt to the changing needs of our clients and the market.'
    },
    {
      imgValue: './src/images/Responsability.png',
      title: 'Responsability',
      text: 'We take responsibility for our projects and strive to meet deadlines and objectives.'
    },
    {
      imgValue: './src/images/TechInnovation.png',
      title: 'Technological Innovation',
      text: 'We constantly seek to adopt new technologies and approaches to stay at the forefront of the industry.'
    }
  ]

  return (
    <>
      <div className='ourValuesContainer w-full'>
        <div className='title'>
          <h1 className='font-semibold'>Our Values</h1>
        </div>
        <div className='Values'>
          {valueData.map((value, i) => (
            <div className='cardValue' key={i}>
              <div className='imgValue'>
                <img src={value.imgValue} className='w-10 sm:w-24 sm:h-28' />
              </div>
              <div className='titleValue text-lg font-medium sm:text-3xl sm:font-semibold'>
                <h1>{value.title}</h1>
              </div>
              <div className='textValue'>
                <p>{value.text}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}
