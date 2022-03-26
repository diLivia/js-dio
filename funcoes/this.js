function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

let pessoa1 =
    {
        nome: "Maria",
        idade: 15
    }

let pessoa2 = {
    nome: "Fernando",
    idade: 25
}

let pessoa3 = {
    nome: "Gabriela",
    idade: 20
}

let pessoa4 = {
    nome: "Letícia",
    idade: 34
}

let pessoa5 = {
    nome: "Carlos",
    idade: 10
}

console.log(calculaIdade.apply(pessoa3, [15]));