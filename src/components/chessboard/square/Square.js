import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { figuresCreating } from "../border/boardSlice";
import Figure from "../figure/Figure";
import '../border/Chessboard.css'

const figures = [];

const Square = ({color, row, col, id}) => {
    const figure = {row, col, id , color: ''}
    figures.push(figure)

    return (
        <div className={'Board-grid-elem ' + color}>
            <Figure/>
        </div>
    );
}

export default Square;