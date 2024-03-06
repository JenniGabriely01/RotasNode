const chalk = require('chalk');
const inquirer = require('inquirer');

/* function principal que executa */
function main() {
    console.log("ola");
    console.log(chalk.bgRed.white('bem vindo ao questionario'));

    /* perguntar ao usuario seu nome */
    inquirer.prompt({
        name: 'name',
        message: 'Qual é seu nome?'
    })

        /* promise - javaSCript */
        .then((nomeResponder) => {
            /* Pergunta ao usuario sua idade */
            return inquirer.prompt({
                name: 'age',
                message: 'Quantos anos você tem?'
            })
            .then((idadeResponder) => {

                /* imprimir mensagem na tela */
                console.log(chalk.bgRed.black(`Olá ${nomeResponder.name}! você tem ${idadeResponder.age} anos!`))
            })
        })
};

main();