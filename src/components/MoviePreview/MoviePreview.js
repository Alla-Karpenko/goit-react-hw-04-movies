import React from 'react';
import styles from './MoviePreview.module.css'

const MoviePreview = ({ poster_path , title }) => (
   
    <div class="card">
        <div className={styles.moviePreviewThumb}>
            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`}  alt="" />
        </div>
        <div className={styles.cardBody}>
           <h2 class="card-title">{title}</h2>
         </div>  
    </div>
);

export default MoviePreview;