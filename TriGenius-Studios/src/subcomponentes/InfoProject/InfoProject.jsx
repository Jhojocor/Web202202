import React from 'react'
import './InfoProject.css'

export function InfoProject() {
    return (
        <>
            <div className='infoProject w-full px-4'>
                <div className='titleProject'>
                    <label for='inputTitle'>Title</label>
                    <input type="text" placeholder='Title of project' className='inputTitle w-full' id='inputTitle' />
                </div>
                <div className='descriptionProject'>
                    <label for='inputDescription'>Description</label>
                    <input type="text" placeholder='Description of project' className='inputDescription h-40 w-full' id='inputDescription' />
                </div>
                <div className='categoryProject flex flex-row gap-0 flex-wrap sm:flex-col'>
                    <img src='./src/images/ProjectsFilterSVG.svg' />
                    <img src='./src/images/UIFilterSVG.svg' />
                    <img src='./src/images/UXFilterSVG.svg' />
                    <img src='./src/images/ProductFilterSVG.svg' />
                </div>
            </div>
        </>
    )
}
