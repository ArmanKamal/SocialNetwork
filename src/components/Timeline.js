import React from 'react'
import Skeleton from 'react-loading-skeleton'
import usePhotos from '../hooks/use-photos'
function Timeline() {
    
    const { photos } = usePhotos();
    
    console.log(photos)
    return (
        <div className="col-span-2 ">
          {!photos ? (  <Skeleton count={2} width={500} height={650} />

                    ): photos && photos.length >0 ?(
                        photos.map((photo) =>  <p>{photo.imageSrc}</p>)
                    ):(
                        <p className="text-center text-2xl">Follow People to see photos</p>
                    )
          }
        </div>
    )
}

export default Timeline
