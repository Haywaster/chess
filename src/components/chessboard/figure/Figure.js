import { useDispatch } from 'react-redux';
import { setActiveClass } from '../border/boardSlice';
import './Figure.css'

export default function Figure ({colorFigure, active, id, num}) {
    const dispatch = useDispatch()

    return (
        <div 
            onClick={() => dispatch(setActiveClass(num))}
            className={`checker checker-${colorFigure}` + (active ? ' active' : '')}></div>
    );
};