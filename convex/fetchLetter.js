import { mutation, query } from "./_generated/server";

export default query(async ({ db }, {clue, pos}) => {
    if (clue != null) {
        const curr = await db.get(clue._id);
        if (curr.guesses != null) {
            return curr.guesses[pos];
        }
    }
    return "";
});
