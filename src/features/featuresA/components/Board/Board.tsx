import React from "react";
import styles from './Board.module.css';

const Board: React.FC = () => {
    return (
        <div className={styles.card}>
            <div className={styles.firstBoard}>
                <div className={styles.name}>Fisrt Board</div>
                <button className={styles.keter}>...</button>
            </div>
            <div className={styles.secondBoard}>
                <div className={styles.name}>Second Board</div>
                <button className={styles.keter}>...</button>
            </div>
        </div>
    )
}

export default Board;