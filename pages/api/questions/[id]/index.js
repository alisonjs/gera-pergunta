import Answer from 'database/Answer';

export default (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    id: id,
    title: "Preciso aprender typescript?",
    description: "Preciso aprender typescript para trabalhar em projetos reais?",
    createdAt: new Date(),
    updatedAt: new Date()
  })
}