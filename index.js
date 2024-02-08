const perguntas = [
    {
      pergunta: "Qual é a palavra-chave correta para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Como se chama a estrutura condicional que executa um bloco de código se a condição for verdadeira e outro se for falsa?",
      respostas: [
        "if-else",
        "switch-case",
        "for-in",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método `indexOf` em JavaScript?",
      respostas: [
        "Encontrar o índice de um elemento em um array",
        "Adicionar um elemento no final de um array",
        "Remover um elemento de um array",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Igualdade estrita",
        "Menor ou igual",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método `map` em arrays?",
      respostas: [
        "Filtrar elementos de um array",
        "Mapear elementos para um novo array",
        "Reduzir um array para um único valor",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é chamada no início do programa",
        "Uma função que retorna um valor",
        "Uma função passada como argumento para outra função",
      ],
      correta: 2
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Java Script Object Notation",
        "JavaScript Online Network",
        "JavaScript Object Navigator",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do operador ternário em JavaScript?",
      respostas: [
        "Concatenar strings",
        "Substituir o operador de atribuição",
        "Criar uma expressão condicional em uma única linha",
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')  //Seleciona a div com id=quiz
  const template = document.querySelector('template') //Como se fosse um import para a constante template
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
      
      const estaCorreta = event.target.value==item.correta
  
      corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    
    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }