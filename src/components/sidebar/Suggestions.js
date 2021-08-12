import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'

export default function Suggestions({userId}) {
    const [profiles, setProfiles] = useState('')

    return !profiles?(
        <Skeleton count={1} height={170}  className="mt-5"/>
    ): profiles.length>0 ? (
        <div className="rounded flex flex-col">
            <div className="text-sm flex items-center align-items justify-between mb-2">
                <p className="font-bold text-gray-base">Suggestions For You</p>
            </div>
        </div>
    )
    :(
        null
    )
}


Suggestions.propTypes = {
    userId: PropTypes.string
}
