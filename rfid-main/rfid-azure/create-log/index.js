const sql = require("mssql");

module.exports = async function (context, req) {
  try {
    await sql.connect(process.env.RfidDb);

    const { cardId } = req.body;

    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();

    const fullDate =
      year +
      "-" +
      month +
      "-" +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;

    const result =
      await sql.query`select top 1 LogType from Logs where UserId=${cardId} order by LogDate DESC`;

    const [logType] = result.recordset;

    if (logType.LogType === "IN") {
      await sql.query`insert into Logs values(${cardId}, 'OUT', ${fullDate})`;
    } else {
      await sql.query`insert into Logs values(${cardId}, 'IN', ${fullDate})`;
    }

    context.res = {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: { message: "Successfully added log to database" },
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
