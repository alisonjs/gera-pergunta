import Answer from 'database/Answer';

export default (req, res) => {
  Answer.create({
    body: req.body.answer,
    questionId: req.body.questionId
  }).then(() => {
    res.status(200).json();
  });
}