import React from 'react'
import './ValueSection.css'

export function ValueSection () {
  const valueData = [
    {
      imgValue: './src/images/Creativity.png',
      title: 'Creativty',
      text: 'We encourage creativity in all aspects of our work, seeking innovative and original solutions.'
    },
    {
      imgValue: './src/images/Quality.png',
      title: 'Quality',
      text: 'We are committed to delivering high quality work on every project, with no compromise on excellence.'
    },
    {
      imgValue: './src/images/Adaptability.png',
      title: 'Adaptabilty',
      text: 'We embrace change and are willing to adapt to the changing needs of our clients and the market.'
    },
    {
      imgValue: './src/images/Responsability.png',
      title: 'Responsabilty',
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
      <div className='ourValuesContainer'>
        <div className='title'>
          <h1>Our Values</h1>
        </div>
        <div className='Values'>
          {valueData.map((value, i) => (
            <div className='cardValue' key={i}>
              <div className='imgValue'>
                <img src={value.imgValue} />
              </div>
              <div className='titleValue'>
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
