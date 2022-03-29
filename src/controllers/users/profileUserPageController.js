const { join } = require('path');

const profileUserPageController = (req,res) => {
    res.status(301).sendFile(join(__dirname, '..', '..','..', 'public', 'html', 'profile.html'));
}
module.exports = profileUserPageController;