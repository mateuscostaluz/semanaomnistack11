import React from 'react';

import './global.css';

import Routes from './routes';

function App() {
  return (
    <Routes />
  )
}

export default App;

// ANOTAÇÕES

// Live reload -> quando a atualização ocorre quando o arquivo é salvo

// Renderização -> colocar em tela

// Compomente -> função que retorna HTML

// JSX (JavaScript XML) -> HTML escrito dentro do arquivo JavaScript

// Propriedade -> quase a mesma coisa que o conceito de atributo em HTML
//                atributos repassados para componentes ao invés de elementos em HTML
//                todos os componentes sempre com letra maiúscula no começo
//                para injetar uma variável, função ou qualquer coisa JavaScript dentro do HTML usa-se {}
//                .children retorna todo o conteúdo (seja ele texto ou HTML) onde se utiliza a propriedade
//                fazer uma desestruturação nas propriedades para saber quais propriedades o Header recebe

// Estado -> uma informação que vai ser mantida pelo componente
//           quando o componente precisa armazenar uma informação (input do usuário ou algo que vem de uma API externa)
//           e precisa modificar essa informação, lidar com ela, adicionar itens, excluir
//           toda vez que o estado for alterado o componente precisa se remontar (renderizar novamente) exibindo as informações em tela

// Imutabilidade -> dentro do React, por uma questão de performance, não se pode manipular a variável do estado (o valor do estado) de uma forma direta
//                  é necessário sobrepor o valor da variável do estado
//                  quando se usa o método useState ele retorna um Array [valor, funçãoDeAtualização (deste valor)]
//                  toda vez que o componente precisar armazenar uma informação dentro dele, não se cria uma variável comum
//                  cria-se um estado para atualizar a informação e refletir as alterações na interface

/*
function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  // quando o botão precisa chamar uma função cria-se a função dentro da outra função

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
    // quando não há conteúdo a tag pode ser fechada nela mesma com < />
    // é necessário ter algo por volta dos componentes
    // não pode existir um elemento abaixo do outro sem ter algo em volta
    // por isso foi utilizado o <div> </div>
    // sempre chave {} por volta quando se usa uma variável ou função dentro do HTML
    // para se chamar a função "increment" toda vez que o usuário clicar no botão, pode-se utilizar o onClick
  );
}
*/

// export default é utilizado para que todos os arquivos consigam importar esse arquivo

// axios é um cliente HTTP, responsável por conseguir fazer chamadas à API do backend e obter respostas, bastante utilizado

// service é todo tipo de arquivo que vai prover algum tipo de integração com algum serviço externo

// incidents.map(incidents => ())
// .map -> percorre todos os elementos retornando alguma informação
// => () ao invés de => {} -> para retornar um conteúdo JSX

// Intl -> classe global do JavaScript para internacionalização (formatação de datas e valores)

// .filter -> filtra a partir de um determinado parâmetro (comparação lógica)

// handle -> funções que tem a ver com alguma ação do usuário
