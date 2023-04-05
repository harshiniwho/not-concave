import { mutation } from "./_generated/server";

const solved = false;

export default mutation(async ({ db }, { word, clue }) => {
  const newClue = { word, clue, solved};
  await db.insert("clues", newClue);
});