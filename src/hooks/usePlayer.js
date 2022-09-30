import { useCallback, useState } from "react";
import { STAGE_WIDTH } from "../gameHelpers";

import { TETROMINOS, randomTetrominos } from "../tetrominos";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x:0, y:0 },
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });

    const updatePlayerPos = ({x, y, collided}) => {
        // https://stackoverflow.com/questions/59100863/how-to-set-state-array-using-react-hooks
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    }
    // https://www.w3schools.com/react/react_usecallback.asp
    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {x: STAGE_WIDTH / 2 - 2, y: 0},
            tetromino: randomTetrominos().shape,
            collided: false,
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer];
}