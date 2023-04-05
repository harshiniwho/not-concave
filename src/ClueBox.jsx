import { useState, useEffect } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";

function ClueBox(props) {
    let actualVal = "";
    if (props.clue != null) {
        actualVal = useQuery("fetchLetter", {clue: props.clue, pos: props.pos});
    }
    const [value, setValue] = useState("");
    const guessClueLetter = useMutation("guessClueLetter");
    // set style by color
    const correct = {backgroundColor: "green"};
    const wrong = {backgroundColor: "red"};
    const empty = {backgroundColor: "white"};

    useEffect(() => {
        setValue(actualVal);
    });

    const [styleClass, setStyleClass] = useState(empty);

    async function changeValue(value) {
        setValue(value);
        if (value == props.letter) {
            setStyleClass(correct);
        } else if (value == "") {
            setStyleClass(empty);
        } else {
            setStyleClass(wrong);
        }

        await guessClueLetter({id: props.clue, pos: props.pos, letter: value});

        setValue(value);
    }

    return (
        <form onSubmit={changeValue}>
            <input style={styleClass} value={value} 
            onChange={event => changeValue(event.target.value)}
            placeholder=""/>
        </form>
    )    
}

export default ClueBox;