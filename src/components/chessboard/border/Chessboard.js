import './Chessboard.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Square from '../Square';
import { boardCreating } from '../boardSlice'

const Chessboard = () => {

    const boardElemsCreate = useSelector(state => state.board.boardElemsCreate);
    const dispatch = useDispatch();

    useEffect(() => {
        const row = [];
        for(let i = 0; i < 8; i++) {
            for(let j = 0; j < 8; j++){
                if((i + j) % 2 === 0) {
                    row.push(
                        <Square color={'white'} row={i} col={j} key={i+':'+j}/>
                    )
                } else {
                    row.push(
                        <Square color={'black'} row={i} col={j} key={i+':'+j}/>
                    )
                }
            };
        }
        dispatch(boardCreating(row));
    }, []);

    console.log(boardElemsCreate);

    return (
        <>
            <div className="Board-grid">
                {boardElemsCreate}
            </div>
        </>
    );
};

export default Chessboard;