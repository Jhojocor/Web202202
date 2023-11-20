import React from "react";
import styles from './MovieCard.css'
import { useNavigate } from 'react-router-dom';

export function MovieCard (){
    // const {

    // } = useUserApp() 

    navigate = useNavigate(); 

    return(
        <>
            <div>
      <div className={styles.CardGrid}>

        {
        cuisineFilter.map(movie => {
          const { id, title, image, running_time } = movie
          return (
            <div onClick={() => navigate(`/films/${id}`)} className='movieCard'>
              <div>
                <img className='imageCard' src={image}/>
              </div>
              <h2>{title}</h2>
              <h3>{running_time}</h3>
            </div>
          )
        })
      }
      </div>
    </div>
        </>
    )
}