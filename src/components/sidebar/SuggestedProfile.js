import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {updateLoggedInUserFollowing,updateFollowedUsersFollowers} from '../../services/firebase'

export default function SuggestedProfile({profileId, username, spDocId, userId,loggedInUserDocId}) {
    const [followed, setFollowed] = useState(false)

     const handleFollowedUser = async () => {
        setFollowed(true)

        // Function for 
        await updateLoggedInUserFollowing(loggedInUserDocId, profileId,false)

        await updateFollowedUsersFollowers(spDocId, userId)
    }
    return !followed?(
        <div className="flex items-center align-items justify-between">
           <div className="flex items-center justify-between">
                <img className="rounded-full w-8 flex mr-3" src={'/images/avatars/kevin.jpg'} />
                <Link to={`/p/${username}`}>
                    <p className="font-bold text-sm dark:text-white">{username}</p>
                </Link>
            </div>
            <button className="text-xs font-bold text-blue-medium dark:text-white" onClick={handleFollowedUser}>Follow</button>
        </div>
    
    ): null
}

SuggestedProfile.protoTypes = {
    userDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    spDocId: PropTypes.string.isRequired,
    loggedInUserDocId: PropTypes.string.isRequired,
}