import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { squaresCreating } from './boardSlice'
import Square from '../square/Square';
import Figure from '../figure/Figure';

import './Chessboard.css';

const Chessboard = () => {
    const squares = useSelector(state => state.board.squares);
    const dispatch = useDispatch();

    const boardCreateElements = () => {
        const board = [];
        for(let i = 0; i < 8; i++) {
            const row = [];
            for(let j = 0; j < 8; j++){
                const square = {
                    color: '',
                    row: i,
                    col: j,
                    id: i + ':' + j
                }
                if((i + j) % 2 === 0) {
                    square.color = 'white'
                } else {
                    square.color = 'black'
                }
                row.push(square)
            };
            board.push(row);
        }
        return board
    }

    const board = boardCreateElements();

    useEffect(() => {
        dispatch(squaresCreating(board));
    }, []);

    const squaresDrawing = (board) => {
        return board.map((row) => {
            return row.map(({id, ...props}) => {
                return <Square key={id} id={id} {...props}/>
            })
        })
    }

    const elements = squaresDrawing(squares);

    return (
        <div className="Board-grid">
            {elements}
        </div>
    );
};

export default Chessboard;