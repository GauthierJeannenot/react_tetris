import React from "react";
import Cell from './Cell';

const Stage = ({ stage }) => {
    return(
        <div>
            {/* A l'intérieur du [stage] on map des [rows],
            à l'intérieur des [rows] on map des [cells], prenant deux arguments - le type : cell et sa clef : x,
            selon le modéle de notre composant Cell auxquelles on passe en props la clef et le type */}
            {stage.map(row => row.map((cell, x) => <Cell  key={x} type={cell[0]}/>))}
        </div>
    )
    
}

export default Stage