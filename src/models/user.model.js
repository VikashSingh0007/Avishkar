const { Schema, model, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    college: {
      type: String,
      required: true,
      default: "mnnit",
    },
    gender: {
      type: String,
      required: true,
      default: "none",
    },
    resumeLink: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "User",
    },
    isFeePaid: {
      type: Boolean,
      default: true,
    },
    expireAt: {
      type: Date,
      default: Date.now,
      index: { expires: 3600 },
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    participatingTeam: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Team",
    },
    pendingTeam: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Team",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (this.isNew) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  } catch (error) {
    next(error);
  }
});
module.exports = model("User", userSchema);
