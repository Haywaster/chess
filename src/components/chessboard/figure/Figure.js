import cn from 'classnames'
import { useState } from 'react';
import './Figure.css'

const Figure = ({color, row, col}) => {

    const [activeClass, setActiveClass] = useState('');
    const [hideActiveClass, setHideActiveClass] = useState(true);

    let elemColor;

    for(let i = 0; i <= 2 ; i++) {
        if (row <= i) {
            elemColor = 'black'
        } else {
            elemColor = 'white'
        }
    }

    const btnClass = cn('checker', 'checker-'+ elemColor, {
        'active' : activeClass
    });

    const fetchActiveClass = (e) => {
        if (e.target) {
            setActiveClass(' active');
        }
    }
    
    return (
        <div onClick={(e) => fetchActiveClass(e)} className={btnClass}></div>
    )
}

export default Figure;