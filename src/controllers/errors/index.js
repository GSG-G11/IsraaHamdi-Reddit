const { join } = require('path');

const clientError = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..','..', 'public', 'html', '404.html'));
};

const serverError = (err, req, res, next) => {
  console.log(err)
  if(err.status) {
    res.status(err.status).json({status: err.status,message:err.message})
  }else {
    res.status(500).sendFile(join(__dirname, '..', '..','..', 'public', 'html', '500.html'));
  }
};

module.exports = { clientError, serverError };
