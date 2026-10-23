import { ItemCounter } from "./shopping-cart/ItemCounterr";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: "Producto 1", quantity: 1 },
    { productName: "Producto 2", quantity: 5 },
    { productName: "Producto 3", quantity: 5 },
];

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            {itemsInCart.map(({ productName, quantity }) => (
                <ItemCounter key={productName} name={productName} quantity={quantity} />
            ))}

            {/* <ItemCounter name="Producto 1" quantity={5} />
            <ItemCounter name="Producto 2" quantity={5} />
            <ItemCounter name="Producto 3" quantity={5} /> */}
        </>
    );
}