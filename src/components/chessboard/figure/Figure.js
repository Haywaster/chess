import { useDispatch } from 'react-redux';
import { setActiveClass } from '../border/boardSlice';
import './Figure.css'

export default function Figure ({colorFigure, active, id, num}) {
    const dispatch = useDispatch()
    return (
        <div 
            onClick={(e) => dispatch(setActiveClass([id, num, e.stopPropagation()]))}
            className={`checker checker-${colorFigure}` + (active ? ' checker-active' : '')}></div>
    );
};