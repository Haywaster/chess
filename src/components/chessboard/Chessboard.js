import './Chessboard.css'

const Chessboard = () => {

    const board = [];

    for(let i = 0; i < 8; i++) {
        const row = [];
        for(let j = 0; j < 8; j++){
            if((i + j) % 2 === 0) {
                row.push(
                    <div onClick={() => console.log('Колонка ' + (j + 1), 'Строка ' + (i +1))} className="Board-grid-elem Board-grid-elem-white">{(j + 1) + ':' + (i +1)}</div>
                )
            } else {
                row.push(
                    <div onClick={() => console.log('Колонка ' + (j+1), 'Строка ' + (i+1))} className="Board-grid-elem Board-grid-elem-black">{(j + 1) + ':' + (i +1)}</div>
                )
            }
        }
        board.push(row);
    }

    return (
        <div className="Board-grid">
            {board}
        </div>
    )
}

export default Chessboard