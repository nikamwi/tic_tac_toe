import React, { useState } from 'react';
import { Button } from '@mui/material';
import xImage from "./img/X.png";
import oImage from "./img/O.png";
import {MdOutlineRestartAlt} from "react-icons/md";
import {
    mainDiviStyle, 
    headerRestartStyle, 
    StyledBoxXO, 
    StyledXOImage, 
    StyledHeder,
} from "./styled"

export const TicTacToe = () => {
    const [turn, setTurn] = useState("x");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState();

    const winnerCombos = (squares) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        };

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {      
                if (
                    squares[pattern[0]] === "" ||
                    squares[pattern[1]] === "" ||
                    squares[pattern[2]] === "" 
                ) {
                    
                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]])
                }             
            });
        }
    };

    const handleClick = ({num}) => {
        if (cells[num] !== "") {
            alert("alredy clicked");
            return;
        }

        let squares = [...cells];

        if (turn === "x") {
            squares[num] = "X";
            setTurn("o");
        } else {
            squares[num] = "O";
            setTurn("x");
        }
        
        winnerCombos(squares);
        setCells(squares);
    }; 

    const restartGames = () => {
        setWinner(null);
        setCells(Array(9).fill(""));
        setTurn("x");
    };

    const Cell = ({num}) => {
        return <td  
        onClick={() => handleClick({num})}>
            <StyledBoxXO>{cells[num]}</StyledBoxXO>
        </td>
    };

  return (
    <div
    style={mainDiviStyle}
    >
        <div >
            <StyledHeder>
                <StyledXOImage>
                    <img src={xImage} alt="X"></img>
                    <img src={oImage} alt="O"></img>   
                </StyledXOImage>
                <h1>Turn: {turn}</h1>
                <h1 style={headerRestartStyle}>
                    <MdOutlineRestartAlt onClick={() => restartGames()}/>
                </h1>
            </StyledHeder>
        </div>
        <table>
            <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
            </tbody>
        </table>
        {winner && (
            <>
                <p style={{color:"#ffffff"}}>{winner} is the winner</p>
                <Button
                variant="outlined"
                onClick={() => restartGames()
                }>next</Button>
            </>
        )}
    </div>
  );
};
