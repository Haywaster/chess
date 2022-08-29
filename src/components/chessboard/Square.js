import Figure from "./figure/Figure";

const Square = ({color, row, col}) => {

    let elemColor;

    switch(color) {
        case 'white': {
            elemColor = 'white';
            break;
        };
        case 'black': {
            elemColor = 'black'
            break;
        };
    };

    return (
        <div onClick={() => console.log(row, col)} className={'Board-grid-elem Board-grid-elem-' + elemColor}>
            {elemColor === 'white' || (row === 3) || (row === 4) ? null : <Figure row={row} col={col}/>}
        </div>
    );
}

export default Square;