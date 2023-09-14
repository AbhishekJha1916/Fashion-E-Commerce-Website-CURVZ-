module.exports.dashboard = (req, res) => {
    console.log("Admin controller action is working.");
    return res.render("admin/dashboard", {
        title: "adminDashboard",
    });
}