import Head from 'next/head';
import {useState} from 'react';
import Legend from 'components/legend';
import Navbar from 'components/navbar';

export async function getServersideProps(req, res){
  return {
    props : {
      id: req.params.id
    }
  }
}

function Questions(props) {

  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [questionId, setQuestionId] = useState(props.id);

  async function handleSubmit(e){
    e.preventDefault();

    const answerSubmited = {body: answer, questionId: questionId, createdAt: new Date()};

    setAnswer("");
    setAnswers([answerSubmited, ...answers])
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
