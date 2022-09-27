import React from "react";
import { StyledStage } from "./styles/StyledStage";

import Cell from './Cell';

const Stage = ({ stage }) => {
    return(
        <StyledStage width={stage[0].length} height={stage.length}>
            {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
            {stage.map(row => row.map((cell, x) => <Cell  key={x} type={cell[0]}/>))}
        </StyledStage>
    )
    
}

export default Stage