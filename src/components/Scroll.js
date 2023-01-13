import React from 'react';
import './Scroll.css';

export default function Scroll(props) {
    return (
        <div className='scroll'>
            {
                props.children
            }

        </div>
    )
}
