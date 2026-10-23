import { ItemCounter } from "./shopping-cart/ItemCounterr";

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            <ItemCounter name="Producto 1" quantity={5} />
            <ItemCounter name="Producto 2" quantity={5} />
            <ItemCounter name="Producto 3" quantity={5} />
        </>
    );
}