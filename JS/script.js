function ex1(){
    // Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.


function lerValor() {
    let valor = parseFloat(prompt("Digite um valor:"));
    while (valor <= 0) {
        valor = parseFloat(prompt("O valor não pode ser zero ou negativo. Digite um novo valor:"));
    }
    return valor;
}

function dividirValores(valor1, valor2) {
    return valor1 / valor2;
}

let valor1 = lerValor();
let valor2 = lerValor();

while (valor2 <= 0) {
    valor2 = lerValor();
}

let resultado = dividirValores(valor1, valor2);
alert("O resultado da divisão é: " + resultado);

}

function ex2(){
    // Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

function bombaRelogio() {
    let segundos = 30;
    while (segundos >= 0) {
        document.write(segundos + "<br>");
        segundos--;
    }
    document.write("EXPLOSÃO");
}

bombaRelogio();

}

function ex3(){
    //Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
    // Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

    let numero = 10
    
    while (numero <= 10 && numero >= 1){
        document.write(numero +",")
        numero--;
    }
}

function ex4(){
    // Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).
let soma = 0;
let contador = 0;

for (let i = 15; i <= 100; i++) {
    soma += i; 
    contador++; 
}

let media = soma / contador;

alert("A média aritmética dos números entre 15 e 100 é: " + media);

}

function ex5(){
    // Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.


let primeiroNumero = parseInt(prompt("Digite o primeiro número inteiro:"));
let segundoNumero = parseInt(prompt("Digite o segundo número inteiro (maior que o primeiro):"));

if (primeiroNumero >= segundoNumero) {
    alert("O primeiro número deve ser menor que o segundo número.");
} else {
    let soma = primeiroNumero + segundoNumero;
    let contador = 2;


    for (let i = primeiroNumero + 1; i < segundoNumero; i++) {
        soma += i; 
        contador++; 
    }

    let media = soma / contador;

    alert("A média aritmética dos números entre " + primeiroNumero + " e " + segundoNumero + " é: " + media);
    }
}

function ex6(){
    // Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.
 
    
    let alunosAprovados = 0;
    let resposta = 'S';
    
    while (resposta === 'S' || resposta === 's') {
        let nota1 = parseFloat(prompt("Digite a primeira nota do aluno: "));
        let nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));
    
        let media = (nota1 + nota2) / 2;
    
        if (media >= 9.5) {
            document.write("Aluno aprovado!");
            alunosAprovados++;
        } else {
            document.write("Aluno reprovado.");
        }
    
        resposta = prompt("Calcular a média de outro aluno? (S/N): ");
    }
    
    alert("Quantidade de alunos aprovados: " + alunosAprovados);
 

}

function ex7(){
    //Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
    // Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

    let soma = 0;

for (let i = 0; i < 6; i++) {
    let nota;
    do {
        nota = parseFloat(prompt("Digite a nota " + (i + 1) + ": "));
    } while (nota < 0 || nota > 10 || isNaN(nota));

    soma += nota;
}

let media = soma / 6;
media = parseInt(media * 100) / 100;
alert("A média do aluno é: " + media);

}

function ex8(){
    // Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário

    let N = parseInt(prompt("Digite um valor para N: "));

    for (let i = 1; i <= N; i++) {
        document.write(i + "<br>");
    }

}

function ex9(){
    //Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

    let contador = 0;
    let numero = 101;

    while (contador < 10) {
        document.write(numero + "<br>");
        numero++;
        contador++;
    }

}

function ex10(){
    //Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

    let N = parseInt(prompt("Digite um número para N: "));

    for (let i = 1; i <= N; i++) {
        document.write("<br>" + "Tabuada do ", i + ":" + "<br>");
        for (let j = 1; j <= 10; j++) {
            document.write(i + " x " + j + " = " + (i * j) + "<br>");
        }
        document.write();
}

}

function ex11(){
    // Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

    let dentroIntervalo = 0;
    let foraIntervalo = 0;

    for (let i = 0; i < 10; i++) {
        let valor = parseFloat(prompt("Digite o valor " + (i + 1) + ": "));

        if (valor >= 24 && valor <= 42) {
            dentroIntervalo++;
        } else {
            foraIntervalo++;
        }
}

alert("Valores dentro do intervalo [24, 42]: " + dentroIntervalo);
alert("Valores fora do intervalo [24, 42]: " + foraIntervalo);

}