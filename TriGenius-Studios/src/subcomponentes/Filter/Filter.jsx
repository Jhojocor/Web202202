import { IoIosArrowDown } from 'react-icons/io'
import React, { useState } from 'react'
import './Filter.css'

export function Filter() {
  const filters = [
    { id: 1, name: 'All', image: './src/images/AllFilterSVG.svg' },
    { id: 2, name: 'Projects', image: './src/images/ProjectsFilterSVG.svg' },
    { id: 3, name: 'UI', image: './src/images/UIFilterSVG.svg' },
    { id: 4, name: 'UX', image: './src/images/UXFilterSVG.svg' },
    { id: 5, name: 'Product', image: './src/images/ProductFilterSVG.svg' }
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState(filters[0])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter)
    setIsOpen(false)
  }

  return (
    <>
      <div className='ContainerFilter'>
        <div className='TitleFilter'>
          <p>Filter by</p>
        </div>
        <div className='contentFilter'>
          <div className='iconActionDropdown' onClick={toggleMenu}>
            {selectedFilter && (
              <div className='selected-filter'>
                <img src={selectedFilter.image} alt={selectedFilter.name} className='selected-filter-image' />
              </div>
            )}
            <IoIosArrowDown />
          </div>
          <div className='Filters'>
            <div className='filter-dropdown'>
              {isOpen && (
                <div className='dropdown-content'>
                  {filters.map((filter) => (
                    <img
                      key={filter.id}
                      src={filter.image}
                      alt={filter.name}
                      className='filter-image'
                      onClick={() => handleFilterSelection(filter)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
