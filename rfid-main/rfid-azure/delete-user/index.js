const sql = require("mssql");

module.exports = async function (context, req) {
  try {
    await sql.connect(process.env.RfidDb);

    const { cardId } = req.query;

    context.res = {
      status: 200,
      body: { "card": cardId }
    }

    const result = await sql.query`delete from Users where CardId=${cardId}`;

    context.res = {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: { message: "Successfully deleted log to database" },
    };
  } catch (err) {
    context.res = {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: err,
    };
  }
};
