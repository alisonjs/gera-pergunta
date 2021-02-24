export default (req, res) => {
  const questionId = req.params.id;
  res.status(200).json([{
    id: 1,
    questionId: questionId,
    body: "Uma resposta",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    questionId: questionId,
    body: "Uma resposta",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    questionId: questionId,
    body: "Uma resposta",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    id: 4,
    questionId: questionId,
    body: "Uma resposta",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    questionId: questionId,
    body: "Uma resposta",
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
}