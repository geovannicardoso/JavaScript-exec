const prompt = require('prompt-sync')();

const dias = prompt ('Quantos dias está vivo?');

const dias1 = Number(dias);
const totalanos = (dias /365 );
const totalmeses = (dias / 30) ;

console.log (`você viveu: ${totalanos} anos`);
console.log ( `A quantidade de meses vividos foi: ${totalmeses}meses`);
console.log ( `A quantidade de dias vividos foi: ${ dias1 }dias`);