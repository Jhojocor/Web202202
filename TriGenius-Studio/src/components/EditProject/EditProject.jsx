import React from 'react'
import './EditProject.css'
import { Collaborators, ImgProject, InfoProject } from '../../subcomponentes'

export function EditProject () {
  return (
    <>
      <div className='ContainerInfoProject'>
        <div className='InfoProjectContainer'>
          <InfoProject />
        </div>
        <div className='imgProjectContainer'>
          <div className='imgProject'>
            <ImgProject />
          </div>
          <div className='collaboratorProject'>
            <label>Collaborators</label>
            <div className='collaborators'>
              <Collaborators />
              <Collaborators />
              <Collaborators />
            </div>
          </div>
        </div>
      </div>
      <div className='btnActions'>
        <button className='btnCancel'>Cancel</button>
        <button className='btnSave'>Save changes</button>
        <button className='btnDelete'>Delete Project</button>
      </div>
    </>
  )
}
