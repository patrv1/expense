import React from 'react'

const nanoid = () => {
    return(
        <div>
            {{customAlphabet}('1234567890', 10)}
        </div>
    )
}

export default nanoid;