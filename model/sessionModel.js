const mongoose = require("mongoose");

const strReq = {
  type: String,
  required: true
};

const schema = mongoose.Schema(
  {
    ip: strReq,
    sessionId: strReq,
    timestamp: strReq,
    url: strReq
  },
  { timestamps: true }
);

const SessionModel = mongoose.model("session", schema);

module.exports = SessionModel;
