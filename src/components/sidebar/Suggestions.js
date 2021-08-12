import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import { getUserSuggestedProfile } from '../../services/firebase'

export default function Suggestions({userId,following}) {
    const [profiles, setProfiles] = useState(null)

    useEffect(() => {
        
        async function suggestedProfile(){
            const response = await getUserSuggestedProfile(userId,following)
            setProfiles(response)
        }
        if(userId){
            suggestedProfile();
        }

    }, [userId])

    


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
    userId: PropTypes.string,
    following: PropTypes.array
}
