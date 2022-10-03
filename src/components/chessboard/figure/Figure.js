import { useSelector, useDispatch } from 'react-redux';

import './Figure.css'

const Figure = ({colorFigure}) => { 
    return (
        <div onClick={(e) => {console.dir(e.target)}} className={`checker checker-${colorFigure}`}></div>
    );
};

export default Figure;