import React from "react";
import Cell from "./Cell";
import styled from "styled-components";

const DivCell = styled.div`
background-color: black;
margin: 2px;
border: 1px black;
width: 40px;
height: 40px;
`
const ShipDiv = styled.div`
display: grid;
grid-template-columns:42px 42px 42px 42px 42px;
`
const PlayerShips = ({ playerOneShips, playerTwoShips, playerShips }) => {

    const displayPlayerOneShips = playerOneShips.map((ship) => {
        const thisShip = ship.length.map((cell) => {
            return (
                <Cell
                    key={cell._cellId}
                />
            )
        })
        return (
            <>
                {ship.name}
                <ShipDiv
                    key={ship._shipId}
                >
                    {thisShip}
                </ShipDiv>
            </>
        )
    })
    const displayPlayerTwoShips = playerTwoShips.map((ship) => {
        const thisShip = ship.length.map((cell) => {
            return (
                <Cell
                    key={cell._cellId}
                />
            )
        })
        return (
            <>
                {ship.name}
                <ShipDiv
                    key={ship._shipId}
                >
                    {thisShip}
                </ShipDiv>
            </>
        )
    })

    return (
        <>
            {playerShips ? displayPlayerOneShips : displayPlayerTwoShips}
        </>
    )
}

export default PlayerShips