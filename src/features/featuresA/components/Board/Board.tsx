import React from "react";
import './Board.scss';
import { FaPlus } from 'react-icons/fa6'

const Board: React.FC = () => {
    return (
        <div className="card">
            <div className="firstBoard">
                <div className="name">Fisrt Board</div>
                <button className="keter">...</button>
            </div>
            <div className="secondBoard">
                <div className="name">Second Board</div>
                <button className="keter">...</button>
            </div>
        </div>
    )
}

export default Board;