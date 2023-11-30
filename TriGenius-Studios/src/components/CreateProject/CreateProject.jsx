import React from 'react'
import { Link } from 'react-router-dom'
import './CreateProject.css'
import { Collaborators, InfoProject } from '../../subcomponentes'

export function CreateProject () {
  return (
    <>
      <div className='ContainerCreateProject p-5 w-screen items-center flex flex-col sm:flex-row sm:p-20 sm:gap-24  '>
        <div className='InfoProjectContainer sm:w-1/2'>
          <InfoProject />
        </div>
        <div className='imgProjectContainer mt-5 sm:w-1/2'>
            <div className='ImageCoverProject flex flex-col'>
                <label for='inputImageCover'>Cover image</label>
                <input type="url" placeholder='URL of project cover' className='inputImageCover' id='inputImageCover' />
            </div>
            <div className='ImagePreviewProject flex flex-col'>
                <label for='inputImagePreview1'>Preview image 1</label>
                <input type="url" placeholder='URL of the preview image' className='inputImagePreview1' id='inputImagePreview1' />
            </div>
            <div className='ImagePreviewProject flex flex-col'>
                <label for='inputImagePreview2'>Preview image 2</label>
                <input type="url" placeholder='URL of the preview image' className='inputImagePreview2' id='inputImagePreview2' />
            </div>
            <div className='collaboratorProject'>
            <label>Collaborators</label>
            <div className='collaborators mt-4'>
              <Collaborators />
              <Collaborators />
              <Collaborators />
            </div>
          </div>
        </div>
      </div>
      <div className='btnActions'>
        <button className='btnCancel' href="/dashboard"><Link to='/dashboard'>Cancel</Link></button>
        <button className='btnSave'><Link to='/dashboard'>Save</Link></button>
        <button className='btnDelete'><Link to='/dashboard'>Delete</Link></button>
      </div>
    </>
  )
}