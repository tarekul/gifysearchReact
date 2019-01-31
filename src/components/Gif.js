import React from 'react';

const Gif = props =>{
    const imgStyles = {
        'width':'100%',
        'height':'auto'
    }
    return <div>
        <img src={props.src} alt='gifs' style={imgStyles}/>
    </div>
}

export default Gif