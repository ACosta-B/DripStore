import { useState } from "react";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const detalhes = () => {
  let [tela, settela] = useState(window.innerWidth);

  if (tela >= 768) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="row w-100 align-items-center">
              <div className="col-4 d-flex align-items-center">
                <Link
                  to="/"
                  className="navbar-brand d-flex align-items-center gap-2"
                >
                  <img
                    src="/logodigitalcollege.png"
                    alt="Group Logo"
                    height="30"
                    className="d-inline-block align-text-top"
                  />
                </Link>
              </div>

              <div className="col-4">
                <form className="d-flex">
                  <input
                    id="BuscaNavbar"
                    className="form-control"
                    type="search"
                    placeholder="Pesquisar produto..."
                    aria-label="Search"
                  />
                  <button className="btn" type="submit">
                    <img src="/Search.png" alt="Buscar" height="20" />
                  </button>
                </form>
              </div>

              <div className="col-4 d-flex justify-content-end align-items-center gap-2">
                <Link
                  to="/Cadastro"
                  id="CadastroNavbar"
                  className="btn fw-bold"
                >
                  Cadastre-se
                </Link>
                <Link to="/Entrar" id="EntrarNavbar" className="btn">
                  Entrar
                </Link>

                {/* Carrinho com hover */}
                <div className="carrinho-hover">
                  <img src="/Carrinho.png" alt="Carrinho" height="30" />
                  <span className="carrinho-numero">2</span>

                  {/* Lista que aparece no hover */}
                  <div className="carrinho-lista">
                    <h6 style={{ color: "black" }}>Meu Carrinho</h6>

                    <div className="item">
                      <div>
                        <img
                          src="Imagens/White-Sneakers-PNG-Clipart 2.png"
                          alt="tenis"
                        />
                        <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
                        <small>Qtd: 1</small>
                      </div>

                      <span style={{ color: "#C92071" }}> R$219</span>
                    </div>

                    <div className="item">
                      <div>
                        <img
                          src="Imagens/White-Sneakers-PNG-Clipart 2.png"
                          alt="tenis"
                        />
                        <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
                        <small>Qtd: 1</small>
                      </div>
                      <span style={{ color: "#C92071" }}>R$219</span>
                    </div>

                    <div className="total">
                      <strong>
                        Total: <span style={{ color: "#C92071" }}>R$ 438</span>
                      </strong>
                    </div>

                    <Link to="/carrinho">
                      <button className="btn-ver">Ver Carrinho</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <br />

        <ul className="nav nav-underline container">
          <li className="nav-item">
            <a
              className="nav-link active"
              href="#"
              style={{ color: "#C92071" }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/Projeto-final-equipe-5/Lista de produtos/lista_de_produtos.html"
              style={{ color: "black" }}
            >
              Produtos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "black" }}>
              Categorias
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/Projeto-final-equipe-5/Detalhes/detalhes.html"
              style={{ color: "black" }}
            >
              Meus Pedidos
            </a>
          </li>
        </ul>

        {/* CSS do Carrinho */}
        <style jsx>{`
          .carrinho-hover {
            position: relative;
          }

          .carrinho-numero {
            position: absolute;
            top: -5px;
            right: -5px;
            background: #c92071;
            color: white;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .carrinho-lista {
            position: absolute;
            top: 40px;
            right: 0;
            width: 250px;
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            display: none;
            z-index: 1000;
          }

          .carrinho-hover:hover .carrinho-lista {
            display: block;
          }

          .item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #eee;
          }

          .item p {
            margin: 0;
            font-size: 14px;
          }

          .item small {
            color: #666;
          }

          .total {
            padding-top: 10px;
            text-align: center;
            margin-top: 10px;
            border-top: 1px solid #eee;
          }

          .btn-ver {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            background: #c92071;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .btn-ver:hover {
            background: #a1156f;
          }
        `}</style>
      </>
    );
  } else {
    // Navbar do celular
    return (
      <>
        {/* Navbar Principal */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid px-3">
            {/* Mobile Layout */}
            <div className="d-flex d-lg-none w-100 justify-content-between align-items-center">
              {/* Logo */}
              <Link to="/" className="navbar-brand">
                <img
                  src="/logodigitalcollege.png"
                  alt="Group Logo"
                  height="25"
                  className="d-inline-block align-text-top"
                />
              </Link>

              {/* Ações Mobile */}
              <div className="d-flex align-items-center gap-2">
                {/* Carrinho Mobile */}
                <div className="carrinho-hover">
                  <Link to="/carrinho">
                    <img src="/Carrinho.png" alt="Carrinho" height="25" />
                    <span className="carrinho-numero">2</span>
                  </Link>

                  {/* Lista do carrinho - mobile */}
                  <div className="carrinho-lista carrinho-lista-mobile">
                    <h6 style={{ color: "black" }}>Meu Carrinho</h6>

                    <div className="item">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="Imagens/White-Sneakers-PNG-Clipart 2.png"
                          alt="tenis"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <p className="mb-0 small">Tênis Nike Revolution 6</p>
                          <small>Qtd: 1</small>
                        </div>
                      </div>
                      <span style={{ color: "#C92071" }} className="fw-bold">
                        R$219
                      </span>
                    </div>

                    <div className="item">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="Imagens/White-Sneakers-PNG-Clipart 2.png"
                          alt="tenis"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <p className="mb-0 small">Tênis Nike Revolution 6</p>
                          <small>Qtd: 1</small>
                        </div>
                      </div>
                      <span style={{ color: "#C92071" }} className="fw-bold">
                        R$219
                      </span>
                    </div>

                    <div className="total">
                      <strong>
                        Total: <span style={{ color: "#C92071" }}>R$ 438</span>
                      </strong>
                    </div>

                    <Link to="/carrinho">
                      <button className="btn-ver">Ver Carrinho</button>
                    </Link>
                  </div>
                </div>

                {/* Menu Hamburger */}
                <button
                  className="navbar-toggler border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="d-none d-lg-flex w-100 align-items-center">
              <div className="row w-100 align-items-center">
                <div className="col-4 d-flex align-items-center">
                  <Link
                    to="/"
                    className="navbar-brand d-flex align-items-center gap-2"
                  >
                    <img
                      src="/logodigitalcollege.png"
                      alt="Group Logo"
                      height="30"
                      className="d-inline-block align-text-top"
                    />
                  </Link>
                </div>

                <div className="col-4">
                  <form className="d-flex">
                    <input
                      id="BuscaNavbar"
                      className="form-control"
                      type="search"
                      placeholder="Pesquisar produto..."
                      aria-label="Search"
                    />
                    <button className="btn" type="submit">
                      <img src="/Search.png" alt="Buscar" height="20" />
                    </button>
                  </form>
                </div>

                <div className="col-4 d-flex justify-content-end align-items-center gap-2">
                  <Link
                    to="/Cadastro"
                    id="CadastroNavbar"
                    className="btn fw-bold"
                  >
                    Cadastre-se
                  </Link>
                  <Link to="/Entrar" id="EntrarNavbar" className="btn">
                    Entrar
                  </Link>

                  {/* Carrinho Desktop */}
                  <div className="carrinho-hover">
                    <Link to="/carrinho">
                      <img src="/Carrinho.png" alt="Carrinho" height="30" />
                      <span className="carrinho-numero">2</span>
                    </Link>

                    <div className="carrinho-lista">
                      <h6 style={{ color: "black" }}>Meu Carrinho</h6>

                      <div className="item">
                        <div>
                          <img
                            src="Imagens/White-Sneakers-PNG-Clipart 2.png"
                            alt="tenis"
                          />
                          <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
                          <small>Qtd: 1</small>
                        </div>
                        <span style={{ color: "#C92071" }}>R$219</span>
                      </div>

                      <div className="item">
                        <div>
                          <img
                            src="Imagens/White-Sneakers-PNG-Clipart 2.png"
                            alt="tenis"
                          />
                          <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
                          <small>Qtd: 1</small>
                        </div>
                        <span style={{ color: "#C92071" }}>R$219</span>
                      </div>

                      <div className="total">
                        <strong>
                          Total:{" "}
                          <span style={{ color: "#C92071" }}>R$ 438</span>
                        </strong>
                      </div>

                      <Link to="/carrinho">
                        <button className="btn-ver">Ver Carrinho</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Mobile Colapsável */}
            <div className="collapse navbar-collapse d-lg-none" id="navbarNav">
              <ul className="navbar-nav mt-2">
                <li className="nav-item">
                  <Link to="/Cadastro" className="nav-link fw-bold">
                    Cadastre-se
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Entrar" className="nav-link">
                    Entrar
                  </Link>
                </li>
                <li>
                  <form className="d-flex">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Pesquisar produto..."
                      aria-label="Search"
                    />
                    <button className="btn" type="submit">
                      <img src="/Search.png" alt="Buscar" height="20" />
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Menu de Navegação Secundário */}
        <div className="container mt-3">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                style={{ color: "#C92071" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/Projeto-final-equipe-5/Lista de produtos/lista_de_produtos.html"
                style={{ color: "black" }}
              >
                Produtos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "black" }}>
                Categorias
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/Projeto-final-equipe-5/Detalhes/detalhes.html"
                style={{ color: "black" }}
              >
                Meus Pedidos
              </a>
            </li>
          </ul>
        </div>
        {/* CSS Styles */}
        <style jsx>{`
          .carrinho-hover {
            position: relative;
          }

          .carrinho-numero {
            position: absolute;
            top: -5px;
            right: -5px;
            background: #c92071;
            color: white;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .carrinho-lista {
            position: absolute;
            top: 40px;
            right: 0;
            width: 280px;
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            display: none;
            z-index: 1000;
          }

          .carrinho-lista-mobile {
            width: 300px;
            right: -150px;
          }

          /* Hover do carrinho removido */

          .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px solid #eee;
          }

          .item p {
            margin: 0;
            font-size: 14px;
          }

          .item small {
            color: #666;
          }

          .total {
            padding-top: 10px;
            text-align: center;
            margin-top: 10px;
            border-top: 1px solid #eee;
          }

          .btn-ver {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            background: #c92071;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .btn-ver:hover {
            background: #a1156f;
          }

          /* Mobile Specific Styles */
          @media (max-width: 991px) {
            .navbar-brand img {
              height: 25px;
            }

            .nav.nav-underline {
              flex-wrap: nowrap;
              overflow-x: auto;
              padding-bottom: 5px;
            }

            .nav.nav-underline .nav-item {
              flex-shrink: 0;
            }

            .nav.nav-underline .nav-link {
              white-space: nowrap;
              padding: 8px 12px;
              font-size: 14px;
            }
          }

          /* Extra small screens */
          @media (max-width: 576px) {
            .carrinho-lista-mobile {
              width: 280px;
              right: -120px;
            }

            .item p {
              font-size: 12px;
              line-height: 1.2;
            }

            .nav.nav-underline .nav-link {
              padding: 6px 10px;
              font-size: 13px;
            }
          }
        `}</style>
        <footer className="bg-dark text-white pt-5 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h5 className="mb-3">
                  <img src="/logo-do-site-branca.png" alt="logo branca" />{" "}
                  Digital Store
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div>
                  <a href="#" className="text-white me-2">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-white me-2">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-3">
                <h6 className="text-uppercase mb-3 border-start border-primary ps-2">
                  Informação
                </h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Sobre Drip Store
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Segurança
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Trabalhe conosco
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Meus Pedidos
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <h6 className="text-uppercase mb-3">Categorias</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Camisetas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Calças
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Bonés
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Headphones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Tênis
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <h6 className="text-uppercase mb-3">Contato</h6>
                <p className="mb-1">
                  Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                  60150-161
                </p>
                <p>(85) 3051-3411</p>
              </div>
            </div>

            <hr className="border-secondary mt-4" />
            <div className="text-center">
              <small>&copy; 2025 Digital College</small>
            </div>
          </div>
        </footer>
        ;
      </>
    );
  }
};

export default detalhes;
