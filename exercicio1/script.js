/*- [ ]  A soma dos dois números;
-   [ ]  A subtração dos dois números;
-   [ ]  A multiplicação dos dois números;
-   [ ]  A divisão dos dois números;
-   [ ]  O resto da divisão dos dois números;
*/

let n1 = Number(prompt('Informe o primeiro número: '))
let n2 = Number(prompt('Informe o segundo número: '))

alert(`A soma dos numeros é: ${n1 + n2} `)
alert(`A Subtração dos numeros é: ${n1 - n2} `)
alert(`A multiplicação dos numeros é: ${n1 * n2} `)
alert(`A divisão dos numeros é: ${n1 / n2} `)
alert(`O resto da divisão dos numeros é: ${n1 % n2} `)


let ImparPar = (n1+n2)

if (ImparPar % 2 === 0 ){
  alert('O numero é par')
}else{
  alert('o numero é ímpar')
}if(n1 === n2){
  alert('Os números são iguais')
}else{
  alert('Os número são diferentes ')
}