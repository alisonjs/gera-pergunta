import Head from 'next/head';
import Navbar from 'components/navbar';
import Link from 'next/link';
import { MdQuestionAnswer } from 'react-icons/md';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gera Pergunta</title>
      </Head>
      <Navbar />
      <div class="container mt-4">
        <div class="row">
          <div class="col">
            <h1>Perguntas</h1>
          </div>
          <div class="col">
            <Link href="/ask">
              <a class="btn btn-primary">
                Perguntar
              </a>
            </Link>
          </div>
        </div>
        <div class="card my-4">
          <div class="card-body">
            <h4 class="card-title">Pergunta</h4>
            <div class="card-text text-truncate">Descrição</div>
            <p class="card-text">
              <small class="text-muted">há 4 horas</small>
            </p>
          </div>
          <div class="card-footer">
            <Link href="/questions/1">
              <a class="btn btn-primary">
                Responder <MdQuestionAnswer />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
