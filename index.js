/* configs do servidor*/
// carregar p modulo express
const express = require("express")
//executar modulo express
const app = express()
//definir files ejs
app.set('views', './')
//criar uma instancia local
app.listen(3050, ()=>{
    console.log("servidor local em http://localhost:3050")
})

/* configuraçoes do servidor - fim */

//imortAR mongoose
const mongoose = require('mongoose')

//congig o script de conexão
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:cookie123456@fiaptecnico.b869f.mongodb.net/revisao')
}
//config o modelo para colecaso alunos
const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina: String,
})
//fenir model a cole
const alunos = mongoose.model("alunos",modelo)

/*config do banco de dados*/

/* rota to requisiçao*/
app.get('/',async(req,res)=>{
    conexao()
    //pesquisar os doc dos alu
    const resultado = await alunos.find()
    console.log(resultado)
   // res.send('Funcionando')
   res.render('index.ejs', {resultado})
})