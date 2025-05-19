import React from 'react'
const Wrapper = ({ children }) => {
    return(
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 my-10">
        {children}
        </div>
    )
}

export default Wrapper