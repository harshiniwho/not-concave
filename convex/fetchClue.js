import { query } from "./_generated/server";

export default query(async ({ db }) => {
  return await db.query("clues")
              .filter(q => q.eq(q.field("solved"), false))
              .first();
});
