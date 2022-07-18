import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const DivGrid = styled.div`
display: grid;
grid-template-columns: 42px 42px 42px 42px;
`

const Grid = ({
    playerGrid,
    playerOneCells,
    playerTwoCells
}) => {

    const displayPlayerOneGrid = playerOneCells.map((cell) => {
        return (
            <Cell
                key={cell._cellId}
                value={cell.value}
                playergrid={playerGrid}
            />
        )
    })
    const displayPlayerTwoGrid = playerTwoCells.map((cell) => {
        return (
            <Cell
                key={cell._cellId}
                value={cell.value}
                playergrid={playerGrid}
            />
        )
    })

    return (
        <DivGrid>
            {playerGrid ? displayPlayerOneGrid : displayPlayerTwoGrid}
        </DivGrid>
    )
}

export default Grid