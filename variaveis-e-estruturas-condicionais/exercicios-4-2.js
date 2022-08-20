/* 1. Descubra a idade mínima
Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza.
Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:
"x é a pessoa mais jovem e possui y anos de idade" */

function idadeMinima (idade1, idade2, idade3) {
  if(idade1 < idade2 && idade1 < idade3) {
    return `Marina é a pessoa mais jovem e possui ${idade1} anos de idade.`
  } else if(idade2 < idade3) {
    return `Silvia é a pessoa mais jovem e possui ${idade2} anos de idade.`
  } else {
    return `Iza é a pessoa mais jovem e possui ${idade3} anos de idade.`
  }
}

console.log(idadeMinima(15,5,10));



/* 2. Taxa Metabólica Basal
Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal) em seu site, vamos ajudá-la escrevendo um algoritmo.
Ele recebe os seguintes dados:
age: número maior que 0
sexo: M ou F
weight: Em (kg) com número maior que 0
height: Em (cm) com número maior que 0
A fórmula para homens:
(altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5
A fórmula para mulheres:
(altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161
Imprima no terminal o resultado do cálculo no formato:
"A taxa metabólica basal é: x Kcal" */

function calculadoraBMR(sexo, idade, altura, peso) {
  if(sexo == 'M') {
    return `A taxa metabólica basal é:  ${((altura * 6.25) + (peso * 9.99) - (idade * 4.92) + 5).toFixed(2)} Kcal" `;
  } else if(sexo == 'F') {
    return `A taxa metabólica basal é:  ${((altura * 6.25) + (peso * 9.99) - (idade * 4.92) - 161).toFixed(2)} Kcal" `;
  } else {
    return 'Informação incorreta';
  }
}

console.log(calculadoraBMR('m', 18, 180, 80));



/* 3. Lanchonete da Trybe
A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.
Para isso escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo e imprima no terminal a mensagem de acordo com a opção escolhida.
Tabela:
"1 - Trybe Lanche Feliz"
"2 - McTrybe"
"3 - TrybeWooper"
"4 - X-Trybe"
"5 - Triplo Trybe com JS"
Caso a pessoa escolha uma opção inexistente, imprima no terminal:
"Ainda não possuímos esta opção :(" */

function lanchonete(opcao) {

  switch (opcao) {
    case 1:
      return "1 - Trybe Lanche Feliz";
      break;
    case 2:
      return "2 - McTrybe";
      break;
    case 3:
      return "3 - TrybeWooper";
      break;
    case 4:
      return "4 - X-Trybe";
      break;
    case 5:
      return "5 - Triplo Trybe com JS";
      break;
    default:
      return "Ainda não possuímos esta opção :(";
  }

}

console.log(lanchonete(3));

