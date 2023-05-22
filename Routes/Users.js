const express = require("express");

const router = express.Router();
// router.use(logger);
router.get("/", (req, res) => {
  res.send("users");
});

router.get("/role", (req, res) => {
  res.send("response");
});
router.get("/new", (req, res) => {
  //never write this kind of route after dynamic route
  res.send("New response but taking above route");
}); // if will be called after dyanamic route, output: Get user role new

router.put("/:id", (req, res) => {
  res.send("updated");
});

router.delete("/:id", (req, res) => {
  res.send("deleted");
});

router.get("/:id", (req, res) => {
  //always use dynamic route in the end
  res.send(`Get user role ${req.params.id}`);
});

// If url is same for multiple api's we can write in a way given below
router
  .route("/:id")
  .get((req, res) => {
    res.send("get the users");
  })
  .put((req, res) => {
    res.send("updated user");
  })
  .delete((req, res) => {
    res.send("deleted user");
  });

  //req.query.user  //for making changes in query params
  const user = [{name: "kusum", role: "developer"}]

//   function logger(req, res, next){
//     console.log("originalUrl", req.originalUrl)
//     next();
//     }

  router.param((req, res, next, id) => {
    console.log(id, "id")
    // req.user = user[id];
    // res.send(id,"id");
    // next();   //to run next function
  })

module.exports = router;
