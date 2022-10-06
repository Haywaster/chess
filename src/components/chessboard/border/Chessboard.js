import { useSelector } from 'react-redux';
import Square from '../square/Square';
import Figure from '../figure/Figure';

import './Chessboard.css';

// Это уже конкретно наша доска
const Chessboard = () => { 
    const figures = useSelector(state => state.board.figures);
    const squares = useSelector(state => state.board.squares);

    // Если в массиве из квадратов содержится квадрат с айди, равным айди массива фигуры, 
    // то возвращаем верстку с фигурой внутри, если нет, то просто квадрат

    const squaresDrawing = (squares, figures) => {
        let arr = []; // Этот массив мы будем отрисовывать

        for (let i = 0; i < squares.length; i++) {
            // Составляем доску
            arr.push (
                <Square key={squares[i].id} {...squares[i]}/>
            );
            for (let j = 0; j < figures.length; j++) {
                // В эти кубики необходимо поместить фигуры
                if(squares[i].id === figures[j].id) {
                    arr[i] = <Square key={squares[i].id} {...squares[i]}><Figure num={j} key={figures[j].id} {...figures[j]}/></Square>
                };
            };
        };
        return arr;
    };

    const squareElements = squaresDrawing(squares, figures);

    return (
        <div className="Board-grid">
            {squareElements}
        </div>
    );
};

export default Chessboard;