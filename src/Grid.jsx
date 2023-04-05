import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";

export default function Grid() {
    const clues = useQuery("fetchClue") || [];
    const [clue, setClue] = useState("");
    const [letters, setLetters] = useState("");

    // set style by color
    const correct = {backgroundColor: "green"};
    const wrong = {backgroundColor: "red"};
    const empty = {backgroundColor: "white"};

    async function guessClueLetter(event) {
        event.preventDefault();
        // setNewMessageText("");
        // await sendMessage({ word: clue, author: name });
    };

    async function generateNewClue(event) {
        event.preventDefault();
        setLetters(useQuery("fetchClue"));
    };

    // to do react skillz failing me as usual
    return (
        <>
            <h2>{clues}</h2>
            <h1>{clues.length != 0 ? setClue(clues[0].clue) : ""}</h1>
            <form onSubmit={generateNewClue}>
                {clues.length != 0 ? clues[0].word.split('').map((l => {
                    <input
                    // value={clues[0].word.split('')[0]}
                    onChange={event => guessClueLetter(event.target.value)}
                    placeholder=""
                    /> 
                })) : <></>}     
                <input type="submit" value="New Clue?"/>
            </form>
        </>
    );
}