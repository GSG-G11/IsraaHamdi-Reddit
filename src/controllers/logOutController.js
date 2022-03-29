const logOutController = (req,res) => {
    res.clearCookie('token').redirect('/signIn');
}
module.exports = logOutController;