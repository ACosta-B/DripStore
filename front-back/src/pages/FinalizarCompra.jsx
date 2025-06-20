import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FinalizarCompra = () => {
  const [formaPagamento, setFormaPagamento] = useState("credito");
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    celular: "",
    endereco: "",
    bairro: "",
    cidade: "",
    cep: "",
    complemento: "",
    cardname: "",
    cardnumber: "",
    validade: "",
    cvv: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleform = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        "api/front-back/src/pages/FinalizarComprasjsx",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const JSON = await response.json();
      console.log(response.status);
      console.log(JSON);
    } catch (error) {
      console.error("Erro ao processar o formulário:", error);
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Pagamento processado com sucesso!");
      };
    }

    return (
      <>
        {/* Header */}
        <header className="header">
          <div className="header-container">
            <div className="logo">
              <div className="logo-icon">◆</div>
              Digital Store
            </div>
            <div className="header-right">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Pesquisar produto..."
                  className="search-input"
                />
                <span className="search-icon">🔍</span>
              </div>
              <div className="header-buttons">
                <a href="#" className="btn-outline">
                  Cadastre-se
                </a>
                <a href="#" className="btn-primary">
                  Entrar
                </a>
                <div className="cart-icon">
                  🛒
                  <span className="cart-badge">2</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="nav-menu">
          <div className="nav-container">
            <ul className="nav-links">
              <li>
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link active">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Meus Pedidos
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="main-container">
          <h1 className="page-title">Finalizar Compra</h1>
          {/* Form Section */}
          <form className="form-section" onSubmit={handleSubmit}>
            {/* Informações Pessoais */}
            <div className="section">
              <h2 className="section-title">Informações Pessoais</h2>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Nome Completo <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Insira seu nome"
                    required
                    Value={formData.name}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    CPF <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    placeholder="Insira seu CPF"
                    required-value={formData.cpf}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    E-mail <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Insira seu email"
                    required-value={formData.email}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Celular <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    name="celular"
                    value={formData.celular}
                    onChange={handleInputChange}
                    placeholder="Insira seu celular"
                    required-value={formData.celular}
                  />
                </div>
              </div>
            </div>

            {/* Informações de Entrega */}
            <div className="section" style={{ marginTop: "40px" }}>
              <h3 className="section-title">Informações de Entrega</h3>
              <div className="form-group">
                <label className="form-label">
                  Endereço <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleInputChange}
                  placeholder="Insira seu endereço"
                  required-value={formData.endereco}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Bairro <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="bairro"
                    value={formData.bairro}
                    onChange={handleInputChange}
                    placeholder="Insira seu bairro"
                    required-value={formData.bairro}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Cidade <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    placeholder="Insira sua cidade"
                    required-value={formData.cidade}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    CEP <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="cep"
                    value={formData.cep}
                    onChange={handleInputChange}
                    placeholder="Insira seu CEP"
                    required-value={formData.cep}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Complemento</label>
                  <input
                    type="text"
                    className="form-input"
                    name="complemento"
                    value={formData.complemento}
                    onChange={handleInputChange}
                    placeholder="Insira complemento"
                  />
                </div>
              </div>
            </div>

            {/* Informações de Pagamento */}
            <div className="section" style={{ marginTop: "40px" }}>
              <h2 className="section-title">Informações de Pagamento</h2>
              <div className="form-group">
                <label className="form-label">Forma de Pagamento</label>
                <div className="payment-options">
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio-input"
                      name="pagamento"
                      id="credito"
                      value="credito"
                      checked={formaPagamento === "credito"}
                      onChange={(e) => setFormaPagamento(e.target.value)}
                    />
                    <label className="radio-label" htmlFor="credito">
                      Cartão de Crédito
                    </label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      className="radio-input"
                      name="pagamento"
                      id="boleto"
                      value="boleto"
                      checked={formaPagamento === "boleto"}
                      onChange={(e) => setFormaPagamento(e.target.value)}
                    />
                    <label className="radio-label" htmlFor="boleto">
                      Boleto Bancário
                    </label>
                  </div>
                </div>
              </div>
              {formaPagamento === "credito" && (
                <>
                  <div className="form-group">
                    <label className="form-label">
                      Nome do Cartão <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      name="cardname"
                      value={formData.cardname}
                      onChange={handleInputChange}
                      placeholder="Insira o nome do Cartão"
                      required
                    />
                  </div>
                  <div className="card-fields">
                    <div className="form-group">
                      <label className="form-label">
                        Número do Cartão <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        name="cardnumber"
                        value={formData.cardnumber}
                        onChange={handleInputChange}
                        placeholder="Insira o número do Cartão"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Validade <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        name="validade"
                        value={formData.validade}
                        onChange={handleInputChange}
                        placeholder="Insira a validade do Cartão"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      CVV <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="CVV *"
                      style={{ width: "50%" }}
                      required
                    />
                  </div>
                </>
              )}
            </div>

            {/* Finalizar Compra */}
            <div className="final-section">
              <h2 className="section-title">Finalizar Compra</h2>
              <div className="final-total">
                <span className="label">Total</span>
                <span className="value">R$ 219,00</span>
              </div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#666",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                ou 10x de R$ 21,90 sem juros
              </p>
              <button className="btn-payment" type="submit">
                Realizar Pagamento
              </button>
            </div>
          </form>

          {/* Summary Card */}
          <div className="summary-card">
            <h2 className="summary-title">RESUMO</h2>
            <div className="product-item">
              <div className="product-image">👟</div>
              <div className="product-details">
                <h6>Tênis Nike Revolution 6 Next Nature Masculino</h6>
              </div>
            </div>
            <div className="summary-line">
              <span>Subtotal:</span>
              <span className="price">R$ 219,00</span>
            </div>
            <div className="summary-line">
              <span>Frete:</span>
              <span className="price">R$ 0,00</span>
            </div>
            <div className="summary-line">
              <span>Desconto:</span>
              <span className="price">R$ 30,00</span>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <span>R$ 219,00</span>
            </div>
            <div className="installments">ou 10x de R$ 21,90 sem juros</div>
            <button className="btn-payment" onClick={handleSubmit}>
              Realizar Pagamento
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <div className="logo" style={{ marginBottom: "15px" }}>
                <div className="logo-icon">◆</div>
                Digital Store
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolor.
              </p>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  f
                </a>
                <a href="#" className="social-icon">
                  📷
                </a>
                <a href="#" className="social-icon">
                  🐦
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Informação</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Sobre Drip Store</a>
                </li>
                <li>
                  <a href="#">Segurança</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Trabalhe conosco</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Categorias</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Camisetas</a>
                </li>
                <li>
                  <a href="#">Calças</a>
                </li>
                <li>
                  <a href="#">Bonés</a>
                </li>
                <li>
                  <a href="#">Headphones</a>
                </li>
                <li>
                  <a href="#">Tênis</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <p>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </p>
              <p>(85) 3051-3411</p>
            </div>
          </div>
        </footer>
        {/* Você pode colocar o CSS em um arquivo separado ou usar styled-components */}
      </>
    );
  };
};
