import { query } from "./_generated/server";

export default query(async ({db, word}) => {
    return await db.query("clues")
    .filter(clue => clue.field("word"), word)
    .collect(); 
});