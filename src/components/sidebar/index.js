import React from 'react'
import useUser from '../../hooks/use-user'
import Suggestions from './Suggestions'
import User from './User'


function Sidebar() {
    const x = useUser()
    return (
        <div>
            <User />
            <Suggestions />
        </div>
    )
}

export default Sidebar
