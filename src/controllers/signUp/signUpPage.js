const { join } = require('path');

const signUpPage = (req,res) => {
    res.status(301).sendFile(join(__dirname, '..', '..','..', 'public', 'html', 'signUp.html'));
}
module.exports = signUpPage;
