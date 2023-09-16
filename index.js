//lib para ler arquivos da maquina
import fs from 'fs';
import chalk from "chalk";

//Tratamento de erros
function trataErro(erro){ 
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

//Primeira forma - promises com then()
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding) //Devolve uma promise
//         .then((texto) => console.log(chalk.green(texto))) //método que serve para trabalhar com promises
//         .catch((erro) => trataErro(erro)) //tratar erros com catch
// }


//Segunda forma - async/await
 async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    } catch(erro){
        trataErro(erro)
    }
    
}

pegaArquivo('./arquivos/texto.md');