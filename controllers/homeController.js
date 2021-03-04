
exports.index = (req, res) => {
    let obj = {
        pageTitle: "Site 123",
        userInfo: req.userInfo
    }
    res.render("home", obj);
}