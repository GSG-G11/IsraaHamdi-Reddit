const { join } = require('path');

const homePageController = (req,res) => {
    res.status(301).sendFile(join(__dirname, '..', '..','..', 'public', 'html', 'home.html'));
}
module.exports = homePageController;