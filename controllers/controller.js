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
  const inst = new Questions({ questions, answers });
  try {
    const saveinfo = await inst.save();
    res.status(200).json(saveinfo);
  } catch (err) {
    next(err);
  }
  //res.json("questions api post request");
}



export async function deleteQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "questions deleyed successfully" });
  } catch (error) {
    res.json({ error });
  }

 // res.json("questions api delete request");
}


export async function getResult(req, res) {
  try {
    const r = await Result.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
 // res.json("result api requested");
}



// export async function insertResult(req, res) {
  
//   try {
//           const { username, result, attempts, points, achieved } = req.body;
//           if (!username && !result) throw new Error("Data not provided");

//           Result.create({ username, result, attempts, points, achieved })
//             .then((result) => {
//               res.send({  msg: "Data saved " });
//             })
//             .catch((err) => {
//               res.send({  msg: "error occured" });
//             });
//   } catch (error) {
//            res.json({ error });
   
//   }
// }



export async function insertResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error("Data not Provided...!");

    Result.create({ username, result, attempts, points, achieved }).then(
      function (err, data) {
        res.json({ msg: "Result saved successfully..!" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}






export async function deleteResult(req, res) {
  try {
    await Result.deleteMany();
    res.json({ msg: "Result deleted successfully" });
  } catch (error) {
    res.json({ error });
  }
 // res.json("result api delete request");
}

{
  // const inst = {
  //   questions: req.body.questions,
  //   answers: req.body.answers,
  // };
  // questions.send(inst);
  // try {
  //   await Questions.insertMany({ questions,answers }, function (err, data) {
  //     res.json({ msg: " Data saved Successfully" });
  //   });
  // } catch (error) {
  //   // res.json({ error });
  //   throw error;
  // }
  //  res.json("questions api post request");
}


