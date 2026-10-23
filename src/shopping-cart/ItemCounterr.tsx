import { useState } from "react";
// import './ItemCounter.css';
import styles from './ItemCounter.module.css';

interface ItemCounterProps {
    name: string;
    quantity?: number | undefined;
}

export const ItemCounter = ({ name, quantity = 1 }: ItemCounterProps) => {

    const [count, setCount] = useState(quantity);
    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if (count === 1) return;
        setCount(count - 1);
    }

    return (
        <section
            className={styles.itemRow}
        >
            <span className={styles['item-text']} style={{
                color: count === 1 ? 'red' : 'black',
            }}>Item: {name}</span>
            <button
                onClick={handleSubtract}
            >-</button>
            <span>{count}</span>
            <button
                onClick={handleAdd}
            >+</button>
        </section>)
}
