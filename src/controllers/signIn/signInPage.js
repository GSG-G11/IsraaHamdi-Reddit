const { join } = require('path');

const signInPage = (req,res) => {
    res.status(301).sendFile(join(__dirname, '..', '..','..', 'public', 'html', 'signIn.html'));
}
module.exports = signInPage;
