import { spawn } from 'child_process'
import React from 'react'

const HeaderBox =({type="title",title,user,subtext}: HeaderBoxProps)=>{
    return(
        <div className='Header-box'>
            <h1 className='Header-box-title'>
                {title}
                {type==="greeting" && (
                    <span className='text-bankGradient'>
                        &nbsp;{user}
                    </span>
                )}
            </h1>
            <p className='header-box-subtext'>{subtext}</p>
        </div>
    )
}

export default HeaderBox