const SessionModel = require("../model/sessionModel");

const Validator = {
  requiredFields: (fields, res) => {
    let flag = true;
    for (const key in fields) {
      if (!fields[key]) {
        res.status(400).send({ success: false, messge: `${key} is required` });
        flag = false;
      }
      break;
    }
    return flag;
  }
};

const saveSession = async (req, res, next) => {
  try {
    const { ip, sessionId, timestamp, url } = req.body;
    if (!Validator.requiredFields({ ip, timestamp, sessionId, url }, res))
      return null;
    const data = await SessionModel.create({
      ip,
      sessionId,
      timestamp,
      url
    });
    if (data) {
      res.status(201).send({ success: true, message: "Session Stored" });
    } else {
      res
        .status(400)
        .send({ success: false, message: "Error while creating session data" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ success: false, messge: "Error while creating session data" });
  }
};
const getSessionData = async (req, res) => {
  try {
    const data = await SessionModel.find(req.query).sort({
      createdAt: -1
    });
    if (data?.length) {
      res.status(200).send({ success: true, message: "Data fetched", data });
    } else {
      res.status(200).send({ success: false, message: "No data found" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ success: false, message: "Error while fetching data" });
  }
};

module.exports = {
  saveSession,
  getSessionData
};
