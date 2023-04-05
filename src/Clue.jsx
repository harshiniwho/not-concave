import ClueBox from "./ClueBox";

export default function Clue(props) {
    return (
        <div>
                {
                    props.clue.word != null ? props.clue.word.split(/(?!$)/u).map((b, index) => <ClueBox clue={props.clue} pos={index} letter={b} />) : null
                }
        </div>
    );
}