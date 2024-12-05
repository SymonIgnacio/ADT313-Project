<<<<<<< HEAD
import React from 'react'
import './MovieCard.css'

function MovieCards({ movie, onClick }) {
  return (
    <>
      <div className='card-movie' onClick={onClick}>
        <img src={movie.posterPath} alt='image-movie' />
        <span>{movie.title}</span>
      </div>
    </>
  )
}

=======
import React from 'react'
import './MovieCard.css'

function MovieCards({ movie, onClick }) {
  return (
    <>
      <div className='card-movie' onClick={onClick}>
        <img src={movie.posterPath} alt='image-movie' />
        <span>{movie.title}</span>
      </div>
    </>
  )
}

>>>>>>> 8ab920eb96f4730a2701f828e846aa155e722628
export default MovieCards;