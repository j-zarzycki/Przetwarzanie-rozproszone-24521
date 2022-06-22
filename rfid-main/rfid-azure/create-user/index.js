const sql = require("mssql");

module.exports = async function (context, req) {
  try {
    await sql.connect(process.env.RfidDb);

    const { firstName, lastName, cardId } = req.body;
    const result =
      await sql.query`insert into Users values(${cardId}, ${firstName}, ${lastName})`;
    context.res = {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      message: "User successfully added",
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
