import Head from 'next/head';
import Navbar from 'components/navbar';

function Questions() {
  return (
    <div>
      <Head>
        <title>Gera Pergunta</title>
      </Head>

      <div class="container">
        <h1 class="mt-4">Pergunta</h1>
        <p class="mt-4">Descrição</p>
        <hr class="my-4" />
        <form action="/answer" method="POST">
          <div class="form-group">
            <label>Resposta:</label>
            <textarea
              placeholder="Insira sua resposta aqui"
              name="answer"
              class="form-control"
            ></textarea>
          </div>
          <input type="hidden" name="question" value="<%= question.id %>" />
          <button type="submit" class="btn btn-primary">
            Responder
          </button>
        </form>
        <hr class="my-4" />
        <h3>Respostas</h3>
        <hr class="my-4" />
        <div class="card my-4">
          <div class="card-body">
            <p class="card-text">Resposta</p>
            <p class="card-text">
              <small class="text-muted">Há 4 horas </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
