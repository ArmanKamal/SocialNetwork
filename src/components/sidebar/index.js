import React from 'react'
import useUser from '../../hooks/use-user'
import Suggestions from './Suggestions'
import User from './User'


function Sidebar() {
    const {user} = useUser()
 
    return (
        <div>
            <User username={user.username} fullName={user.fullName} />
            <Suggestions userId={user.userId} following={user.following} />
        </div>
    )
}

export default Sidebar
