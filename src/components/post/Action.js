import React, { useState,useContext } from "react";
import PropTypes from 'prop-types'
import FirebaseContext from "../../context/firbase";
import UserContext from "../../context/user";

export default function Action({docId, totalLikes, likedPhoto, handleFocus}){
    const {
        user: { uid: userId = '' }
    } = useContext(UserContext)

    const [toggleLiked, setToggleLiked] = useState(likedPhoto)

    const [likes, setLikes] = useState(totalLikes)
    const { FirebaseContext, FieldValue} = useContext(FirebaseContext)

    const handleToggleLiked = async() => {
        setToggleLiked((toggleLiked) => !toggleLiked)

        await firebase.
            firestore()
            .collection('photos')
            .doc(docId)
            .update({
                likes: toggleLiked ? FieldValue.arrayRemove(userId):
                    FieldValue.arrayUnion(userId)
            })
            setLikes((likes) => (toggleLiked ? likes-1: likes+1))
    }

    return(
        <React.Fragment>
            <div className="flex justify-between p-4">
                <div className="flex">
                    <svg
                        onClick={() => handleToggleLiked}
                        />
                </div>
            </div>
        </React.Fragment>
    )
}

Action.propTypes = {
    docId: PropTypes.string.isRequired,
    toggleLikes: PropTypes.number.isRequired,
    likedPhoto: PropTypes.bool.isRequired,
    handleFocus:PropTypes.func.isRequired

}