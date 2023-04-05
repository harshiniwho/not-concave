import { mutation } from "./_generated/server";

export default mutation(async ({db}, {id, pos, letter}) => {
    const curr = await db.get(id._id);
    let guesses = [];
    if (curr.guesses != null) {
        guesses = curr.guesses;
    } else {
        guesses = Array(curr.word.length);
    }
    guesses[pos] = letter;
    return await db.patch(curr._id, {
        guesses: guesses
    });
});