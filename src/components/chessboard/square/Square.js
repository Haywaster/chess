import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { figuresCreating } from "../border/boardSlice";
import Figure from "../figure/Figure";

import './Square.css'

const Square = ({color, row, col, id, num}) => {
    const figure = useSelector(state => state.board.figures[num])
    const dispatch = useDispatch();
    let colorFigure;

    if (row <= 2) {
        colorFigure = 'white';
    } else if (row >= 5) {
        colorFigure = 'black';
    };

    const figureData = {
        col, row, id, colorFigure, num,
        active: false
    }

    useEffect(() => {
        dispatch(figuresCreating(figureData))
    }, [])

    return (
        <div className={`square square-${color}`}>
            {color === 'black' && colorFigure? <Figure {...figure}/> : null}
        </div>
    );
}

export default Square;