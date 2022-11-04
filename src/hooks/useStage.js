import { useState, useEffect } from "react";

import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage())

    // https://www.w3schools.com/react/react_useeffect.asp
    useEffect(() => {
        const updateStage = prevStage => {
            //first flush the stage on peux faire ça à la for loop aussi
            const newStage = prevStage.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
                );
            //Then draw the Tetromino
            //console.log(player.tetromino)
            player.tetromino.forEach((row, y) => {
                //.any pourrait faire le travail ?
                row.map((value, x) => {
                    if(value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`,
                        ]
                    };
                });
            });

            if(player.collided) {
                resetPlayer()
            }
            return newStage
        };
        setStage(prev => updateStage(prev))
    }, [player, resetPlayer])
    return [stage, setStage]
};