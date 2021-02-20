import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-primary">
        <Link className="navbar-brand" href="/">
          <a className="navbar-brand mx-3">
            <Image
              src="/img/gerapergunta.png"
              alt="Logo Gera Pergunta"
              width="94"
              height="36"
            />
          </a>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
