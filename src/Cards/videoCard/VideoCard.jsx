<<<<<<< HEAD
import React from 'react'
import './VideoCard.css'

function VideoCards({ video }) {
    return (
        <>
            <div className='card-video-data'>
                <iframe src={video.url} title='video-movie'/>
                <span className='video-name-card'>{video.name}</span>
            </div>
        </>
    )
}

=======
import React from 'react'
import './VideoCard.css'

function VideoCards({ video }) {
    return (
        <>
            <div className='card-video-data'>
                <iframe src={video.url} title='video-movie'/>
                <span className='video-name-card'>{video.name}</span>
            </div>
        </>
    )
}

>>>>>>> 8ab920eb96f4730a2701f828e846aa155e722628
export default VideoCards