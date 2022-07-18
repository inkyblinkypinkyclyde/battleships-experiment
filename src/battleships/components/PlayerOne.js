import React from "react";
import Grid from "./Grid.js";
import PlayerShips from "./PlayerShips.js";

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
            <PlayerShips
                playerShips={true}
                playerOneShips={playerOneShips}
                playerTwoShips={playerTwoShips}
            />
        </>
    )
}
export default PlayerOne