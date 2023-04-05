import { mutation } from "./_generated/server";

export default mutation(async ({ db }, { word, clue }) => {
  const newClue = { word, clue };
  await db.insert("clues", newClue);
});