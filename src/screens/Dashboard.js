import React,{useEffect} from 'react'
import {Timeline,Header,Sidebar} from '../components/index'
function Dashboard() {
    
    useEffect(() => {
        document.title = 'Instify'
       
    }, [])
    
    return (
        <div className="bg-gray-400">
            <Header />
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    )
}

export default Dashboard
