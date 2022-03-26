class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; // ao fazer um getter e um setter colocar underline depois do this.
    }

    get saldo(){
        return this._saldo
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar (valor){
        if(valor > this._saldo){
            return 'Operação inválida, saldo abaixo do valor do saque'
        }

        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoDeCredito){
        super(agencia, numero);
        this.tipo = 'corrente'
        this._cartaoDeCredito = cartaoDeCredito;
    }

    get cartaoDeCredito(){
        return this._cartaoDeCredito
    }

    set cartaoDeCredito(valor){
        this._cartaoDeCredito = valor;
    }
}

class ContaPoucanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca'
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária'
    }

    sacar (valor){
        if (valor > 500){
            return 'Operação acima do valor permitido'
        } 

        this._saldo = this._saldo - valor;

        return this._saldo
    }
}