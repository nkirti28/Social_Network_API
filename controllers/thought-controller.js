const { Thought, User } = require("../models");

const ThoughtController = {
  // get all thoughts
  getThoughts(req, res) {
    Thought.find({})
      .then((thoughts) => {
        res.json(thoughts);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(error.message);
      });
  },

  // get single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thought find with this ID!" })
          : res.json(thought)
      )
      .catch((error) => {
        console.error(error);
        res.status(500).send(error.message);
      });
  },

  //create a new thought
  //create a thought and push the created thought's _id to the associated user's thoughts array field
  createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbThoughtData) =>
        !dbThoughtData
          ? res.status(404).json({ message: "No User find with this ID!" })
          : res.json(dbThoughtData)
      )
      .catch((error) => {
        console.error(error);
        res.status(500).send(error.message);
      });
  },
};
