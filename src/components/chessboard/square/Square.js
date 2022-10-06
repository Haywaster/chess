import './Square.css'

export default function Square ({color, children}) {
    return (
        <div className={`square square-${color}`}>
            {children}
        </div>
    );
};