import React from 'react'
import styles from './Movies.module.css'


const Movies = (props) => {
  const { movies, setMovies } = props;
  

  return (
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>Latest Movies</h2>
          <div className={styles.movie__container}>
            {movies && movies.length > 0 ? (
              movies.map((movie) => (
                <div key={movie.id} className={styles.movie__card}>
                  <img src={movie.image} alt={movie.title} className={styles.movie__image} />
                  <h3 className={styles.movie__title}>{movie.title}</h3>
                  <h4 className={styles.movie__genre}>{movie.genre}</h4>
                  <p className={styles.movie__date}>{movie.date}</p>
                </div>
              ))
            ) : (
              <p className={styles.no__movies}>No movies available</p>
            )}
            
          </div>
        </section>
      </div>
  );
}

export default Movies