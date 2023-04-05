import { mutation } from "./_generated/server";

export default mutation(async ({ db }, {clue}) => {
    if (clue != null) {
        const curr = await db.get(clue._id);
        await db.patch(curr._id, {solved: true});
    }
    return "";
});
