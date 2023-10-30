import React from 'react'
import './FeaturedSection.css'
import { AddProject, Card, Filter } from '../../subcomponentes'

export function FeaturedSection () {
  const projectData = [
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVNkTWgAAnw07?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVNkUWEAADiOW?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVPW8WQAA0xdN?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVNkTWgAAnw07?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVNkUWEAADiOW?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVPW8WQAA0xdN?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVNkTWgAAnw07?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVNkUWEAADiOW?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVPW8WQAA0xdN?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVNkTWgAAnw07?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVNkUWEAADiOW?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVPW8WQAA0xdN?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVNkTWgAAnw07?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVNkUWEAADiOW?format=png&name=360x360'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVPW8WQAA0xdN?format=png&name=360x360'
    }
  ]

  return (
    <div className='FeaturedSection'>
      <Filter />
      <section className='CardSection'>
        {projectData.map((project, index) => (
          <Card key={index} url={project.cardUrl} />
        ))}
        <AddProject />
      </section>
    </div>
  )
}
