// function escolhaFilme(){
//     var Filmes_lista = Number(TodosFilmes.value);
//     if(Filmes_lista == !0){
//         Sel1.style.display = "block";
//     }else if(Filmes_lista == 2){
//         Sel1.style.display = "block";
//     }else if(Filmes_lista == 3){
//         Sel1.style.display = "block";
//     }else if(Filmes_lista == 4){
//         Sel1.style.display = "block";
//     }else if(Filmes_lista == 5){
//             Sel1.style.display = "block";
//     }else if(Filmes_lista == 6){
//             Sel1.style.display = "block";
//     }else if(Filmes_lista == 7){
//             Sel1.style.display = "block";
//     }else if(Filmes_lista == 8){
//             Sel1.style.display = "block";
//     }else if(Filmes_lista == 9){
//             Sel1.style.display = "block";
//     }else if(Filmes_lista == 10){
//             Sel1.style.display = "block";
//     }else{

//     }
// }
function confirmar(){
    var id = sessionStorage.ID_USUARIO;
    var AllFilmesVar = TodosFilmes.value;
    // var Select1Var = Sel1.value;
    fetch("/usuarios/confirmar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            IdServer: id,
            filmeServer: AllFilmesVar,
            // Select1Server: Select1Var
        })

    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert('Voto realizado com sucesso!!')
            // window.location = "login.html";
        } else {
            throw ("ERRO ao realizar o voto!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}
// function sumirMensagem() {
//     erro.style.display = "none"
// }
