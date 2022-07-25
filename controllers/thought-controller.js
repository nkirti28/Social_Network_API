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
  getSingleThought({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((dbThoughtsData) => {
        if (!dbThoughtsData) {
          res
            .status(404)
            .json({ message: "No thoughts with this particular ID!" });
          return;
        }
        res.json(dbThoughtsData);
      })
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

  //update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, New: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No thought find with this ID!" })
          : res.json(user)
      )
      .catch((error) => {
        console.error(error);
        res.status(500).send(error.message);
      });
  },

  // delete thought
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((dbThoughtsData) => {
        if (!dbThoughtsData) {
          res
            .status(404)
            .json({ message: "No thoughts with this particular ID!" });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(error.message);
      });
  },

  // Add a new Reaction
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((dbThoughtsData) => {
        if (!dbThoughtsData) {
          res
            .status(404)
            .json({ message: "No thoughts with this particular ID!" });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(error.message);
      });
  },

  // Delete a reaction
  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((dbThoughtsData) => {
        if (!dbThoughtsData) {
          res
            .status(404)
            .json({ message: "No thoughts with this particular ID!" });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(error.message);
      });
  },
};

module.exports = ThoughtController;
