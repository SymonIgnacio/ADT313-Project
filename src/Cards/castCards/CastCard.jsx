<<<<<<< HEAD
import React from 'react'
import './CastCard.css'

function CastCards({ cast }) {
    return (
        <>
            <div className='card-cast-data'>
                <img src={cast.url} alt='image-cast' />
                <span className='cast-name-card'>{cast.name}</span>
                <hr className='spacing-cast-card'></hr>
                <span className='cast-characterName-card'>{cast.characterName}</span>
            </div>
        </>
    )
}

=======
import React from 'react'
import './CastCard.css'

function CastCards({ cast }) {
    return (
        <>
            <div className='card-cast-data'>
                <img src={cast.url} alt='image-cast' />
                <span className='cast-name-card'>{cast.name}</span>
                <hr className='spacing-cast-card'></hr>
                <span className='cast-characterName-card'>{cast.characterName}</span>
            </div>
        </>
    )
}

>>>>>>> 8ab920eb96f4730a2701f828e846aa155e722628
export default CastCards