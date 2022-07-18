import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameStartPage from "../components/GameStartPage.js";
import PlayerOne from "../components/PlayerOne.js";
import PlayerTwo from "../components/PlayerTwo.js";

const Game = () => {

    const [playerOneCells, setPlayerOneCells] = useState(
        [
            {
                _cellId: 0,
                value: '_'
            },
            {
                _cellId: 1,
                value: '_'
            },
            {
                _cellId: 2,
                value: '_'
            },
            {
                _cellId: 3,
                value: '_'
            },
            {
                _cellId: 4,
                value: '_'
            },
            {
                _cellId: 5,
                value: '_'
            },
            {
                _cellId: 6,
                value: '_'
            },
            {
                _cellId: 7,
                value: '_'
            },
            {
                _cellId: 8,
                value: '_'
            },
            {
                _cellId: 9,
                value: '_'
            },
            {
                _cellId: 10,
                value: '_'
            },
            {
                _cellId: 11,
                value: '_'
            },
            {
                _cellId: 12,
                value: '_'
            },
            {
                _cellId: 13,
                value: '_'
            },
            {
                _cellId: 14,
                value: '_'
            },
            {
                _cellId: 15,
                value: '_'
            }
        ]
    )
    const [playerTwoCells, setPlayerTwoCells] = useState(
        [
            {
                _cellId: 0,
                value: '_'
            },
            {
                _cellId: 1,
                value: '_'
            },
            {
                _cellId: 2,
                value: '_'
            },
            {
                _cellId: 3,
                value: '_'
            },
            {
                _cellId: 4,
                value: '_'
            },
            {
                _cellId: 5,
                value: '_'
            },
            {
                _cellId: 6,
                value: '_'
            },
            {
                _cellId: 7,
                value: '_'
            },
            {
                _cellId: 8,
                value: '_'
            },
            {
                _cellId: 9,
                value: '_'
            },
            {
                _cellId: 10,
                value: '_'
            },
            {
                _cellId: 11,
                value: '_'
            },
            {
                _cellId: 12,
                value: '_'
            },
            {
                _cellId: 13,
                value: '_'
            },
            {
                _cellId: 14,
                value: '_'
            },
            {
                _cellId: 15,
                value: '_'
            }
        ]
    )
    const [playerOneShips, setPlayerOneShips] = useState([
        {
            name: 'Frigate',
            _shipId: 1,
            length: [
                {
                    _cellId: 1,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: 2,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: true
        },
        {
            name: 'Submarine',
            _shipId: 2,
            length: [
                {
                    _cellId: 1,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: 2,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: 3,
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
            _shipId: 1,
            length: [
                {
                    _cellId: 1,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: 2,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: true
        },
        {
            name: 'Submarine',
            _shipId: 2,
            length: [
                {
                    _cellId: 1,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: 2,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: 3,
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
                    />}
                />
            </Routes>
        </Router>
    )
}

export default Game