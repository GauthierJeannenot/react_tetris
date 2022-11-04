export const STAGE_WIDTH = 12  
export const STAGE_HEIGHT = 20

export const createStage = () =>
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
    Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
    )

export const checkCollision = (player, stage, {x : moveX, y : moveY}) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[y].length; x += 1) {
            //1. Check that we are on an actual tetromino cell
            if (player.tetromino[y][x] !== 0) {
                //2. Check that our move is inside the game areas height (y)
                if (
                //We shouldn't go through the bottom of the play area
                !stage[y + player.pos.y + moveY] || 
                //3. Check that our move is inside the game areas width (x)
                !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                //4. Check that the celle we're moving to isn't set to clear
                stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
}