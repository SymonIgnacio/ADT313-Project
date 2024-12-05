<<<<<<< HEAD
import React from 'react'
import './PhotoCard.css'

function PhotoCards({ photo, onClick }) {
    return (
        <>
            <div className='card-photo-data' onClick={onClick}>
                <img src={photo.url} alt='photo-movie' />
                <span className='photo-descript-card'>{photo.description}</span>
            </div>
        </>
    )
}

=======
import React from 'react'
import './PhotoCard.css'

function PhotoCards({ photo, onClick }) {
    return (
        <>
            <div className='card-photo-data' onClick={onClick}>
                <img src={photo.url} alt='photo-movie' />
                <span className='photo-descript-card'>{photo.description}</span>
            </div>
        </>
    )
}

>>>>>>> 8ab920eb96f4730a2701f828e846aa155e722628
export default PhotoCards