import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameStartPage from "../components/GameStartPage.js";
import PlayerOne from "../components/PlayerOne.js";
import PlayerTwo from "../components/PlayerTwo.js";

const Game = () => {

    const [playerOneCells, setPlayerOneCells] = useState(
        [
            {
                _cellId: 100,
                value: 's'
            },
            {
                _cellId: 101,
                value: 's'
            },
            {
                _cellId: 102,
                value: '_'
            },
            {
                _cellId: 103,
                value: '_'
            },
            {
                _cellId: 104,
                value: '_'
            },
            {
                _cellId: 105,
                value: '_'
            },
            {
                _cellId: 106,
                value: '_'
            },
            {
                _cellId: 107,
                value: '_'
            },
            {
                _cellId: 108,
                value: '_'
            },
            {
                _cellId: 109,
                value: '_'
            },
            {
                _cellId: 110,
                value: '_'
            },
            {
                _cellId: 111,
                value: '_'
            },
            {
                _cellId: 112,
                value: '_'
            },
            {
                _cellId: 113,
                value: '_'
            },
            {
                _cellId: 114,
                value: '_'
            },
            {
                _cellId: 115,
                value: '_'
            }
        ]
    )
    const [playerTwoCells, setPlayerTwoCells] = useState(
        [
            {
                _cellId: 200,
                value: '_'
            },
            {
                _cellId: 201,
                value: '_'
            },
            {
                _cellId: 202,
                value: '_'
            },
            {
                _cellId: 203,
                value: '_'
            },
            {
                _cellId: 204,
                value: '_'
            },
            {
                _cellId: 205,
                value: '_'
            },
            {
                _cellId: 206,
                value: '_'
            },
            {
                _cellId: 207,
                value: '_'
            },
            {
                _cellId: 208,
                value: '_'
            },
            {
                _cellId: 209,
                value: '_'
            },
            {
                _cellId: 210,
                value: '_'
            },
            {
                _cellId: 211,
                value: '_'
            },
            {
                _cellId: 212,
                value: '_'
            },
            {
                _cellId: 213,
                value: '_'
            },
            {
                _cellId: 214,
                value: '_'
            },
            {
                _cellId: 215,
                value: '_'
            }
        ]
    )
    const [playerOneShips, setPlayerOneShips] = useState([
        {
            name: 'Frigate',
            _shipId: 11,
            length: [
                {
                    _cellId: -100,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -101,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: true
        },
        {
            name: 'Submarine',
            _shipId: 12,
            length: [
                {
                    _cellId: -110,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -111,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -112,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: false
        }
    ])
    const [playerTwoShips, setPlayerTwoShips] = useState([
        {
            name: 'Frigate',
            _shipId: 21,
            length: [
                {
                    _cellId: -200,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -201,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: true
        },
        {
            name: 'Submarine',
            _shipId: 22,
            length: [
                {
                    _cellId: -211,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -212,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -213,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: false
        }
    ])
    const [playerOneActiveShip, setPlayerOneActiveShip] = useState(null)
    const [playerTwoActiveShip, setPlayerTwoActiveShip] = useState(null)
    const [gamePhase, setGamePhase] = useState(0)

    const placePlayerOneShipAt = (id) => {
        // console.log(id)
        const newCells = []
        playerOneCells.map((gridCell, index) => {
            if (playerOneActiveShip.horizontal) {
                if (gridCell._cellId === id) {
                    playerOneActiveShip.length.map((shipCell) => {
                        // console.log(`gridCell id is ` + gridCell._cellId)
                        gridCell.value = 's'
                    })
                }
            }
            newCells.push(gridCell)
        })
    }

    // const cellColor = (cell) => {
    //     if (cell._cellId < 0) {
    //         if (!cell.location) {
    //             return 'grey'
    //         } else {
    //             return 'white'
    //         }
    //     } else {
    //         if (cell.value === '_') { return 'grey' }
    //         if (cell.value === 's') { return 'grey' }
    //         if (cell.value === 'h') { return 'red' }
    //         if (cell.value === 'm') { return 'blue' }
    //         if (cell.value === '') {}
    //             if (shipPresent === true) {
    //                 return 'red'
    //             } else {
    //                 return 'blue'
    //             }
    //         } else {
    //         return 'grey'
    //     }
    // }

    const clickHandler = (id) => {
        console.log(`Click handler id is: ` + id)
        if (gamePhase === 0) {
            if (id <= -100 && id >= -109) { setPlayerOneActiveShip(playerOneShips[0]) }
            if (id <= -110 && id >= -119) { setPlayerOneActiveShip(playerOneShips[1]) }
            if (id <= -200 && id >= -209) { setPlayerTwoActiveShip(playerTwoShips[0]) }
            if (id <= -210 && id >= -219) { setPlayerTwoActiveShip(playerTwoShips[1]) }
            if (playerOneActiveShip) { placePlayerOneShipAt(id) }
            // if (playerTwoActiveShip) { placePlayerTwoShipAt(id) }
        }
    }

    return (
        <Router>
            <Routes>
                <Route path='/battleships/start/' element={<GameStartPage />} />
                <Route
                    path='/battleships/player_one'
                    element={<PlayerOne
                        playerOneShips={playerOneShips}
                        playerOneActiveShip={playerOneActiveShip}
                        playerOneCells={playerOneCells}
                        playerTwoShips={playerTwoShips}
                        playerTwoActiveShip={playerTwoActiveShip}
                        playerTwoCells={playerTwoCells}
                        gamePhase={gamePhase}
                        clickHandler={clickHandler}
                    // cellColor={cellColor}
                    />}
                />
                <Route
                    path='/battleships/player_two'
                    element={<PlayerTwo
                        playerOneShips={playerOneShips}
                        playerOneActiveShip={playerOneActiveShip}
                        playerOneCells={playerOneCells}
                        playerTwoShips={playerTwoShips}
                        playerTwoActiveShip={playerTwoActiveShip}
                        playerTwoCells={playerTwoCells}
                        gamePhase={gamePhase}
                        clickHandler={clickHandler}
                    // cellColor={cellColor}
                    />}
                />
            </Routes>
        </Router>
    )
}

export default Game