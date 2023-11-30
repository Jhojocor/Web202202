import { IoIosCloseCircle } from "react-icons/io";
import { ProjectDetails } from '../../components';
import React, { useState } from 'react';
import './Card.css';

export function Card(props) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {!showModal && (
        <div className='Card' onClick={toggleModal}>
          <img src={props.url} alt="Card Image" />
        </div>
      )}
      {showModal && (
        <div className="Modal">
          <ProjectDetails />
          <div className="iconClose text-6xl" onClick={toggleModal}>
            <IoIosCloseCircle className="imgIconClose" />
          </div>
        </div>
      )}
    </>
  );
}
