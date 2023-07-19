const router = require("express").Router();
const { Word } = require("../../models");

// ADD new word
router.post("/", async (req, res) => {
    try {
        const dbDreamData = await Word.create({
            //   title: req.body.title,
            //   content: req.body.content,
            //   date: req.body.date,
            //   user_id: req.session.loggedUser,
            //   tag: req.body.tag,
            //   private: req.body.private,
            //   lucid: req.body.lucid,
            //   nightmare: req.body.nightmare,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
