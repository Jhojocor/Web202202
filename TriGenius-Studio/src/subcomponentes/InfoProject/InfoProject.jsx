import React from 'react'
import './InfoProject.css'

export function InfoProject() {
    return (
        <>
            <div className='infoProject'>
                <div className='titleProject'>
                    <label for='inputTitle'>Title</label>
                    <input type="text" placeholder='Title of project' className='inputTitle' id='inputTitle' />
                </div>
                <div className='descriptionProject'>
                    <label for='inputDescription'>Description</label>
                    <input type="text" placeholder='Description of project' className='inputDescription' id='inputDescription' />
                </div>
                <div className='categoryProject'>
                    <img src='./src/images/AllFilterSVG.svg' />

                    <img src='./src/images/ProjectsFilterSVG.svg' />

                    <img src='./src/images/UIFilterSVG.svg' />
                </div>
            </div>
        </>
    )
}
