export default (req, res) => {
  if(req.method == 'POST'){
    post(req, res);
  }else{
    get(req, res);
  }
}

async function get(req, res){
  res.status(200).json([{
    id: 1,
    title: "Qual a melhor linguagem de programação para iniciar em 2021?",
    description: "Sou iniciante e gostaria de saber com qual linguagem começar em 2021.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: "Nodejs ou Deno?",
    description: "Qual escolher e qual o mais seguro?",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    title: "Preciso aprender typescript?",
    description: "Preciso aprender typescript para trabalhar em projetos reais?",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
}

async function post(req, res){
  res.status(200).json();
}