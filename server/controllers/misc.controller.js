const db = require("../config/db.config");
const getCountry = async (req, res) => {
  try {
    $sql = `SELECT * FROM tbl_countries`;
    const result = await db.conn.query($sql);

    if (result) {
      res.status(200).send({
        data: result[0],
        success: true,
      });
    } else {
      res.status(200).send({
        success: false,
        msg: "Sorry we did not find any country",
        data: {},
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
module.exports = {
  getCountry,
};
