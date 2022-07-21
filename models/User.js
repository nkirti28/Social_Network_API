const { Schema, model, Types } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        "/^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/",
        "Please enter a valid email address.",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false,
  }
);

// get total count of friends using length of user's friends array
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create User model using UserSchema
const User = model("User", UserSchema);

module.exports = User;
