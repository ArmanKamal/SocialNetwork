import React from 'react'

function NotFound() {
    return (
        <div className="w-full h-screen flex justify-center items-center  flex-col bg-indigo-300">
            <h1 className=" text-5xl font-bolder">404</h1><br />
            <p className="text-4xl font-bold">Oops! Something is wrong.</p>
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"><a>Go Back to initial page, is better</a></button>
        </div>
    )
}

export default NotFound
