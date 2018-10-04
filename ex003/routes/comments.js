var express = require("express");
var { User, Comment } = require("../models").Comment;

var router = express.Router();

/* GET users listing. */
router.get("/:id", function(req, res, next) {
  Comment.findAll({
    include: {
      model: User,
      where: { id: req.params.id }
    }
  })
    .then(comment => {
      console.log(comment);
      res.json(comment);
    })
    .catch(err => {
      console.err(err);
      next(err);
    });
});

router.post("/", function(req, res, next) {
  Comment.create({
    commenter: req.body.id,
    comment: req.body.comment
  })
    .then(result => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch(err => {
      console.err(err);
      next(err);
    });
});

router.patch("/:id", function(req, res, next) {
  Comment.update(
    {
      comment: req.body.comment
    },
    { where: { id: req.params.id } }
  )
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

router.delete("/:id", function(req, res, next) {
  Comment.destroy({ where: { id: req.params.id } })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
