import React from "react";
import styles from './MovieCard.css'
import { useNavigate } from 'react-router-dom';


export function MovieCard ({movieFilter}){
    // const {

    // } = useUserApp() 

    const navigate = useNavigate(); 

    if (!movieFilter || !Array.isArray(movieFilter)) {
      return <p>Loading...</p>; // You can customize this message or rendering as needed
  }

  return (
    <div>
        <div className={styles.CardGrid}>
            {movieFilter.map((movie) => {
                const { id, title, image, running_time } = movie
                return (
                    <div onClick={() => navigate(`/films/${id}`)} className='movieCard' key={id}>
                        <div>
                            <img className='imageCard' src={image} alt={`${title} poster`} />
                        </div>
                        <h2>{title}</h2>
                        <h3>{running_time}</h3>
                    </div>
                );
            })}
        </div>
    </div>
  );
}