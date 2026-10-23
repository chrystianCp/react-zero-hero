import type { CSSProperties } from "react";

const fisrtName = 'Chrystian';
const lastName = 'Cardenas';

const favoriteGames = ['GTA', 'FIFA', 'Mortal Kombat'];
const isActive = true;

const address = {
    zipCode: '549999',
    country: 'Mexico',
}

const myStyles: CSSProperties = {
    backgroundColor: '#c9c4c4',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
};


export function MyAwesomeApp() {

    return (
        <>
            <h1>{fisrtName}</h1>
            <h3>{lastName}</h3>
            <ul>
                {favoriteGames.map(game => (
                    <li key={game}>{game}</li>
                ))}
            </ul>
            <h4>{isActive ? 'Activo' : 'Inactivo'}</h4>
            <p style={myStyles}>{JSON.stringify(address)}</p>
        </>
    );
}