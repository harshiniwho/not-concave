import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import Clue from "./Clue";

export default function Grid() {
    let clue = useQuery("fetchClue") || "";
    const updateSolvedClue = useMutation("updateSolvedClue");

    async function generateNewClue(event) {
        event.preventDefault();
        await updateSolvedClue({clue});
        clue = useQuery("fetchClue");
    };
    const alignCenter = {alignCenter: true};

    return (
        <>
            <h1>Solve!</h1>
            <h1 style={alignCenter} >{clue != null ? clue.clue : ""}</h1>
            {clue != null ? <Clue clue={clue} /> : null} 
            <br />
            <form onSubmit={generateNewClue}>
                <input type="submit" value="New Clue?"/>
            </form>
        </>
    );
}