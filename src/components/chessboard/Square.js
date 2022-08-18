const Square = ({color, row, col}) => {
    return (
        <div onClick={() => console.log(row, col)} className={'Board-grid-elem-' + color}>{color}</div>
    )
}

export default Square