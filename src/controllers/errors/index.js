const { join } = require('path');

const clientError = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..','..', 'public', 'html', '404.html'));
};

const serverError = (err, req, res, next) => {
//server error

};

module.exports = { clientError, serverError };