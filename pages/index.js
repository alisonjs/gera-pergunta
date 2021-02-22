import Head from 'next/head';
import Navbar from 'components/navbar';
import Legend from 'components/legend';
import Link from 'next/link';
import { MdQuestionAnswer } from 'react-icons/md';
import Question from 'database/Question'

export async function getStaticProps(context){

  const questions = await Question.findAll({raw:true, order:[['id', 'DESC']]})
  .then((result)=>{
   return result;
  }).catch(error => {
    return [];
  });

  return {
    props : {
      questions: JSON.stringify(questions)
    } 
  }
}

export default function Home(props) {
  const questions = JSON.parse(props.questions)
  return (
    <div>
      <Head>
        <title>Gera Pergunta</title>
      </Head>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1>Perguntas</h1>
          </div>
          <div className="col">
            <Link href="/ask">
              <a className="btn btn-primary">
                Perguntar
              </a>
            </Link>
          </div>
        </div>

        {questions.length ? 
          questions.map((question) => {
            return (
              <div className="card my-4" key={question.id}>
            <div className="card-body">
              <h4 className="card-title">{question.title}</h4>
              <div className="card-text text-truncate">{question.description}</div>
              <Legend createdAt={question.createdAt} />
            </div>
            <div className="card-footer">
              <Link href={`/questions/${question.id}`}>
                <a className="btn btn-primary">
                  Responder <MdQuestionAnswer />
                </a>
              </Link>
            </div>
          </div>
            );
          }) : <p> Nenhum pergunta foi encontrada </p> }
      </div>
    </div>
  );
}
