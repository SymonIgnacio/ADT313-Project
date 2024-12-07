
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


export default PhotoCards