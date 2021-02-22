import Question from 'database/Question';

export default (req, res) => {
  console.log("Request body", req.body)
  Question.create({
    title: req.body.title,
    description: req.body.description
  }).then(() => {
    res.status(200).json();
  });
}