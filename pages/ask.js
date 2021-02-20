import Head from 'next/head';
import Navbar from 'components/navbar';

function Ask() {
  return (
    <div>
      <Head>
        <title>Gera Pergunta</title>
      </Head>
      <Navbar />
      <div class="container">
        <div class="card mt-3">
          <div class="card-header">
            <h3>Realizar pergunta</h3>
          </div>
          <div class="card-body">
            <form id="ask-form" method="POST" action="/questions">
              <div class="form-group">
                <label>Título</label>
                <input
                  type="text"
                  placeholder="Título"
                  name="title"
                  class="form-control my-2"
                />
              </div>
              <div class="form-group">
                <label>Descrição</label>
                <textarea
                  placeholder="Descreva sua pergunta aqui"
                  name="description"
                  class="form-control my-2"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Perguntar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ask;
