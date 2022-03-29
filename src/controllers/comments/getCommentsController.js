const { getCommnetsQuery } = require("../../database/queries");

const getCommentsController = (req,res,next) => { 
    const { id } = req.params;
    getCommnetsQuery(id)
      .then((data) => {
        if (data.rowCount) {
          res.status(200).json({ status: 200, data: data.rows });
        } else {
          res.status(200).json({
            status: 200,
            message: "No Comments",
          });
        }
      })
      .catch((error) => next(error));
}
module.exports = getCommentsController ;
