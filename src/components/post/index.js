import React,{useEffect}from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import Header from './Header'
export default function Post({photo}) {
    return (
        <div className="rounded flex flex-col  border bg-white border-gray-primary mb-16">
            <Header username={photo.username} />
            <Image src={photo.imageSrc} caption={photo.caption} />
        </div>
    )
}

Post.propTypes = {
    photo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        imageSrc:PropTypes.string.isRequired,
        caption:PropTypes.string.isRequired,
        docId:PropTypes.string.isRequired,
        userLikedPhoto:PropTypes.bool.isRequired,
        likes:PropTypes.array.isRequired,
        comments:PropTypes.array.isRequired,
        dateCreated:PropTypes.number.isRequired,
    })
}