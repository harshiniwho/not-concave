import { useState } from "react";
import { useMutation } from "../convex/_generated/react";

export default function NewClue() {

    const [newWordText, setNewWordText] = useState("");
    const [newClueText, setNewClueText] = useState("");
    const createClue = useMutation("createClue");

    async function handleCreateClue(event) {
        event.preventDefault();
        setNewWordText("");
        setNewClueText("");
        await createClue({ word: newWordText, clue: newClueText });
    }
    return (
        <main className=".badge">
            <form onSubmit={handleCreateClue}>
                <input
                value={newWordText}
                onChange={event => setNewWordText(event.target.value)}
                placeholder="Add a word!"
                />
                <input
                value={newClueText}
                onChange={event => setNewClueText(event.target.value)}
                placeholder="Add a clue!"
                />
                <input type="submit" value="Add" disabled={!newWordText && !newClueText} />
            </form>
        </main>
    );
}