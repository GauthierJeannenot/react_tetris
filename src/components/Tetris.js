import React from "react";

//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
    return(
        <div>
            <Stage />

            {/* https://www.w3schools.com/tags/tag_aside.asp */}
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                <StartButton />
            </aside>
        </div>
    )
}

export default Tetris