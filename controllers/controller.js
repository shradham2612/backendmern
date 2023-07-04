import Questions from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

export async function insertQuestions(req, res) {
  try {
    await Questions.insertMany({ questions,answers }, function (err, data) {
      res.json({ msg: " Data saved Successfully" });
    });
  } catch (error) {
    // res.json({ error });
    throw error;
  }

  //  res.json("questions api post request");
}

export async function deleteQuestions(req, res) {
  res.json("questions api delete request");
}
export async function getResult(req, res) {
  res.json("result api requested");
}

export async function insertResult(req, res) {
  res.json("result api post request");
}

export async function deleteResult(req, res) {
  res.json("result api delete request");
}
