import React from 'react'
import './CardMember.css'

export function CardMember () {
  const membersData = [
    {
      imgValue: './src/images/JhohanCircle.png',
      name: 'Jhohanson',
      lastname: 'Jovel',
      description:
        "I'm also known as jhojocor, I love video games, programming, design and animation. I'm a passionate creator who seeks to merge these disciplines to offer unique and captivating experiences. My goal is to inspire others to explore the vast world of digital creativity and, together, take our ideas to new heights. Through collaboration, innovation and dedication, we can continue to create worlds and experiences that make a difference and leave a mark in the hearts of those who enjoy them. The journey is just beginning, and I'm excited for all that is to come! "
    },
    {
      imgValue: './src/images/KarolCircle.png',
      name: 'Karol',
      lastname: 'Fuentes',
      description:
        "I’m a passionate web designer and developer, and illustrator who finds greatest satisfaction in creating captivating digital interfaces and experiences, as well as in illustration and animation. Outside of work, volleyball is my sporting passion, and I enjoy reading, listening to music, and culinary exploration as ways to enrich my life and learn about new cultures. I'm excited to take my creativity to the next level and continue exploring a world full of possibilities!"
    },
    {
      imgValue: './src/images/AlexCircle.png',
      name: 'Alexander',
      lastname: 'Rueda',
      description:
        "You can call me Alex, I'm passionate about videogames, programming and design. My interest in programming began in high school, when I decided to take a technical course in \"Multimedia Design and Integration\". This experience introduced me to the fascinating world of digital creation and since then, I have been immersed in developing my skills. I love to combine both elements to create interactive and visually appealing experiences. I'm constantly looking for new ways to merge my love for videogames with my programming and design skills, with the goal of bringing creative and exciting projects to fruition. I look forward to sharing some of my creations with you!"
    }
  ]

  return (
    <>
      {membersData.map((member, i) => (
        <div className='CardMember' key={i}>
          <div className='imgMember'>
            <img src={member.imgValue} />
          </div>
          <div className='infoMember'>
            <div className='nameMember'>
              <h1 className='name'>{member.name}</h1>
              <span className='lastname'>
                <h1>{member.lastname}</h1>
              </span>
            </div>
            <div className='descriptionMember'>
              <p>{member.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
