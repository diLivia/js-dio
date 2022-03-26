function calculaSaldo(saldo, itens){
	if(!itens || !itens.length) return 'Envie todos os parâmetros';

	const SALDOFINAL = itens.reduce((current, item) => current - item.preco, saldo);

	return `O saldo final será de R$${SALDOFINAL}`
}

const LISTA = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, LISTA));