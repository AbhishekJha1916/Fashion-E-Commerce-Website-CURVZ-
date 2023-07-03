// module.exports.actionName = function(req,res){}

module.exports.home = function (request, response) {
  console.log("Home controller action is working");
  
  return response.render("home", {
    title: "Home View",
  });
};
