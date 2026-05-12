import { Link } from "react-router-dom";

function Login() {
  return (
    <div>

      <h1>Login</h1>

      <input type="email" placeholder="Digite seu email" />

      <input type="password" placeholder="Digite sua senha" />

      <button>Entrar</button>

      <Link to="/cadastro">
        Criar conta
      </Link>

    </div>
  );
}

export default Login;