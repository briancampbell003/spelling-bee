const router = require("express").Router();
const { Word } = require("../../models");

// ADD new word
router.post("/", async (req, res) => {
    try {
        const dbWordData = await Word.create({
              id: req.body.id,
              poolId: req.body.poolId,
              word: req.body.word,
              definition: req.body.definition,
              partOfSpeech: req.body.partOfSpeech,
              etymology: req.body.etymology,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
