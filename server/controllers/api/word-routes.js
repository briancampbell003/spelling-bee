const router = require("express").Router();
const { Word } = require("../../models");

// ADD new word
router.post("/", async (req, res) => {
    try {
        const dbWordData = await Word.create({
              wordId: req.body.wordId,
              poolId: req.body.poolId,
              word: req.body.word,
              definition: req.body.definition,
              partOfSpeech: req.body.partOfSpeech,
              etymology: req.body.etymology,
        });
        res.status(200).json(dbWordData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// GET all words
router.get('/', async (req, res) => {
    try {
      const dbWordData = await Word.findAll({
      });
  
      const words = dbWordData.map((word) =>
        word.get({ plain: true })
      );
  
      res.status(200).json(dbWordData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

module.exports = router;
