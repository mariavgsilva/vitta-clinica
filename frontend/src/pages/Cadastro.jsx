async function cadastrarUsuario() {

  const resposta = await fetch("http://localhost:3000/cadastro", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      nome,
      email,
      senha
    })

  });

  const dados = await resposta.json();

  console.log(dados);

}