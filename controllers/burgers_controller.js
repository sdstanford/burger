var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }

      var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);

    });
  });
  
  // Create a new burger
  router.post("/burger", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES ??", [req.params.burger_name], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
  
      res.json({ id: result.insertId });
    });
  });
  
  //MYSQL ROUTES
  //Get all Burgers
  router.get("/burgers", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.json(data);
    });
  });
  
  //DEVOUR BURGER
  router.delete("/burgers/:id", function(req, res) {
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
  });

// Export routes for server.js to use.
module.exports = router;
