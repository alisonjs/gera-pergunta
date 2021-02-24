import Head from 'next/head';
import {useState} from 'react';
import Navbar from 'components/navbar';
import Legend from 'components/legend';
import Link from 'next/link';
import { MdQuestionAnswer } from 'react-icons/md';

export default function Home() {
  const data = [{
    id: 1,
    title: "Qual a melhor linguagem de programação para iniciar em 2021?",
    description: "Sou iniciante e gostaria de saber com qual linguagem começar em 2021.",
    createdAt: new Date(2021, 1, 22),
    updatedAt: new Date(2021, 1, 22)
  },
  {
    id: 2,
    title: "Nodejs ou Deno?",
    description: "Qual escolher e qual o mais seguro?",
    createdAt: new Date(2020, 11, 15),
    updatedAt: new Date(2020, 11, 15)
  },
  {
    id: 3,
    title: "Preciso aprender typescript?",
    description: "Preciso aprender typescript para trabalhar em projetos reais?",
    createdAt: new Date(2021, 1, 23),
    updatedAt: new Date(2021, 1, 23)
  }
];
  const [questions, setQuestions] = useState(data);

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
