export const STAGE_WIDTH = 12  
export const STAGE_HEIGHT = 20

export const createStage = () =>
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
    Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
    )