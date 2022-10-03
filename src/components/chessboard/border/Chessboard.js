import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { squaresCreating, figuresCreating } from './boardSlice'
import Square from '../square/Square';

import './Chessboard.css';

const boardCreateSquards = () => {
    let board = [];
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++){
            const squareData = {
                color: '',
                row: i,
                col: j,
                id: i + ':' + j
            }
            if((i + j) % 2 === 0) {
                squareData.color = 'white'
            } else {
                squareData.color = 'black'
            }
            board.push(squareData);
        };
    };
    return board
};

const Chessboard = () => {
    const dispatch = useDispatch();
    const squares = useSelector(state => state.board.squares);

    useEffect(() => {
        dispatch(squaresCreating(boardCreateSquards()))
    }, [])

    const squaresDrawing = (board) => {
        return board.map(({id, ...props}, num) => {
            return <Square key={id} id={id} num={num} {...props}></Square>
        })
    }

    const squareElements = squaresDrawing(squares);

    return (
        <div className="Board-grid">
            {squareElements}
        </div>
    );
};

export default Chessboard;