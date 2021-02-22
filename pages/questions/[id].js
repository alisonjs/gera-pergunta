import Head from 'next/head';
import {useState} from 'react';
import Legend from 'components/legend';
import Navbar from 'components/navbar';
import Answer from 'database/Answer';
import Question from 'database/Question';

export async function getStaticPaths(){

  const questions = await Question.findAll({raw:true, order:[['id', 'DESC']]})
  .then((result)=>{
   return result;
  }).catch(error => {
    console.log(error)
    return [];
  });

  const paths = questions.map((question) => ({
    params: { id: `${question.id}` },
  }));

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps(context){

  const id = context.params.id;

  const answers = await Answer.findAll({
    where: {questionId:id},
    order:[['id', 'DESC']]
  }).then(results => {
    return results;
  }).catch((error)=>{
    console.log(error)
    return [];
  });

  return {
    props : {
      questionId: id,
      answers: JSON.stringify(answers)
    }
  }

}

function Questions(props) {
  console.log(props)
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState(JSON.parse(props.answers));
  const questionId = props.questionId;

  async function handleSubmit(e){
    e.preventDefault();

    const answerSubmited = {body: answer, questionId: questionId, createdAt: new Date()};

    await fetch(`/api/questions/${questionId}`, {
      body: JSON.stringify({
        answer: answer,
        questionId: questionId
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(()=>{
      setAnswer("");
      setAnswers([answerSubmited, ...answers])
    })
  }

  return (
    <div>
      <Head>
        <title>Gera Pergunta</title>
      </Head>
      <Navbar/>
      <div className="container">
        <h1 className="mt-4">Pergunta</h1>
        <p className="mt-4">Descrição</p>
        <hr className="my-4" />
        <form id="answer-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Resposta:</label>
            <textarea
              placeholder="Insira sua resposta aqui"
              name="answer"
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              className="form-control my-2"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Responder
          </button>
        </form>
        <hr className="my-4" />
        <h3>Respostas</h3>
        <hr className="my-4" />
        
        {answers.length ? answers.map((answer) => {
          return (
            <div className="card my-4">
              <div className="card-body">
                <p className="card-text">{answer.body}</p>
                <Legend createdAt={answer.createdAt} />
              </div>
            </div>
          );
        }) : <p> Nenhuma resposta cadastrada até o momento. </p>}

      </div>
    </div>
  );
}

export default Questions;
