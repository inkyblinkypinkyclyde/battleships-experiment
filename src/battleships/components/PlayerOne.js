import React from "react";
import Grid from "./grid.js";
import PlayerOneShips from "./PlayerOneShips";

const PlayerOne = ({
    playerOneShips,
    playerOneCells,
    playerTwoShips,
    playerTwoCells,
    gamePhase }
) => {
    return (
        <>
            <h3>Enemy waters</h3>
            <Grid
                playerGrid={false}
                playerOneCells={playerOneCells}
                playerTwoCells={playerTwoCells}
            />
            <h3>Your waters</h3>
            <Grid
                playerGrid={true}
                playerOneCells={playerOneCells}
                playerTwoCells={playerTwoCells}
            />
            <PlayerOneShips
                playerOneShips={playerOneShips}
            />
        </>
    )
}
export default PlayerOne