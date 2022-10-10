import { useDispatch } from 'react-redux';
import { makeAMove } from '../border/boardSlice';
import './Square.css'

export default function Square ({color, children, num, active}) {
    const dispatch = useDispatch()
    
    return (
        <div onClick={() => dispatch(makeAMove(num))} className={`square square-${color}` + (active ? ' square-active' : '')}>
            {children}
        </div>
    );
};