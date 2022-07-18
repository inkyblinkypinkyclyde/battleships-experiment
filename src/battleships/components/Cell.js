import React from "react";
import styled from "styled-components";

const DisplayCell = styled.div`
margin: 2px;
border: 1px black;
width: 40px;
height: 40px;
background-color: grey;
`

const Cell = () => {
    return (
        <DisplayCell />
    )
}

export default Cell