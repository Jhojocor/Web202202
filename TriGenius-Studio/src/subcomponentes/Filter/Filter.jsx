import React from 'react'
import './Filter.css'

export function Filter () {
  return (
    <>
      <div className='ContainerFilter'>
        <div className='TitleFilter'>
          <p>Filter by</p>
        </div>
        <div className='Filters'>
          <a href='#'>
            <img src='./src/images/AllFilterSVG.svg' />
          </a>
          <a href='#'>
            <img src='./src/images/ProjectsFilterSVG.svg' />
          </a>
          <a href='#'>
            <img src='./src/images/UIFilterSVG.svg' />
          </a>
          <a href='#'>
            <img src='./src/images/UXFilterSVG.svg' />
          </a>
          <a href='#'>
            <img src='./src/images/ProductFilterSVG.svg' />
          </a>
        </div>
      </div>
    </>
  )
}
