interface ItemCounterProps {
    name: string;
    quantity?: number | undefined;
}

export const ItemCounter = ({ name, quantity }: ItemCounterProps) => {
    return <section style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginTop: '1rem',
    }}>
        <span style={{
            fontWeight: 'bold',
            width: '150px'
        }}>Item: {name}</span>
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
    </section>;
}
