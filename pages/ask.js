import {useState} from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Navbar from 'components/navbar';

function Ask() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e){
    e.preventDefault();
    router.push('/');
  }

  return (
    <div>
      <Head>
        <title>Gera Pergunta</title>
      </Head>
      <Navbar />
      <div className="container">
        <div className="card mt-3">
          <div className="card-header">
            <h3>Realizar pergunta</h3>
          </div>
          <div className="card-body">
            <form id="ask-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Título</label>
                <input
                  type="text"
                  placeholder="Título"
                  name="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="form-control my-2"
                />
              </div>
              <div className="form-group">
                <label>Descrição</label>
                <textarea
                  placeholder="Descreva sua pergunta aqui"
                  name="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="form-control my-2"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
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
