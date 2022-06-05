function escolhaFilme(){
    var Filmes_lista = Number(TodosFilmes.value);
    if(Filmes_lista == 1){
        Sel1.style.display = "block";
        Sel2.style.display = "none";
        Sel3.style.display = "none";
        Sel4.style.display = "none";
        Sel5.style.display = "none";
        Sel6.style.display = "none";
        Sel7.style.display = "none";
        Sel8.style.display = "none";
        Sel9.style.display = "none";
        Sel10.style.display = "none";
        Sel11.style.display = "none";
    }else if(Filmes_lista == 2){
        Sel1.style.display = "none";
        Sel2.style.display = "block";
        Sel3.style.display = "none";
        Sel4.style.display = "none";
        Sel5.style.display = "none";
        Sel6.style.display = "none";
        Sel7.style.display = "none";
        Sel8.style.display = "none";
        Sel9.style.display = "none";
        Sel10.style.display = "none";
        Sel11.style.display = "none";
    }else if(Filmes_lista == 3){
        Sel1.style.display = "none";
        Sel2.style.display = "none";
        Sel3.style.display = "block";
        Sel4.style.display = "none";
        Sel5.style.display = "none";
        Sel6.style.display = "none";
        Sel7.style.display = "none";
        Sel8.style.display = "none";
        Sel9.style.display = "none";
        Sel10.style.display = "none";
        Sel11.style.display = "none";
    }else if(Filmes_lista == 4){
        Sel1.style.display = "none";
        Sel2.style.display = "none";
        Sel3.style.display = "none";
        Sel4.style.display = "block";
        Sel5.style.display = "none";
        Sel6.style.display = "none";
        Sel7.style.display = "none";
        Sel8.style.display = "none";
        Sel9.style.display = "none";
        Sel10.style.display = "none";
        Sel11.style.display = "none";
    }else if(Filmes_lista == 5){
        Sel1.style.display = "none";
        Sel2.style.display = "none";
        Sel3.style.display = "none";
        Sel4.style.display = "none";
        Sel5.style.display = "block";
        Sel6.style.display = "none";
        Sel7.style.display = "none";
        Sel8.style.display = "none";
        Sel9.style.display = "none";
        Sel10.style.display = "none";
        Sel11.style.display = "none";
    }else if(Filmes_lista == 6){
        Sel1.style.display = "none";
        Sel2.style.display = "none";
        Sel3.style.display = "none";
        Sel4.style.display = "none";
        Sel5.style.display = "none";
        Sel6.style.display = "block";
        Sel7.style.display = "none";
        Sel8.style.display = "none";
        Sel9.style.display = "none";
        Sel10.style.display = "none";
        Sel11.style.display = "none";
    }else if(Filmes_lista == 7){
        Sel1.style.display = "none";
        Sel2.style.display = "none";
        Sel3.style.display = "none";
        Sel4.style.display = "none";
        Sel5.style.display = "none";
        Sel6.style.display = "none";
        Sel7.style.display = "block";
        Sel8.style.display = "none";
        Sel9.style.display = "none";
        Sel10.style.display = "none";
        Sel11.style.display = "none";
    }else if(Filmes_lista == 8){
        Sel1.style.display = "none";
        Sel2.style.display = "none";
        Sel3.style.display = "none";
        Sel4.style.display = "none";
        Sel5.style.display = "none";
        Sel6.style.display = "none";
        Sel7.style.display = "none";
        Sel8.style.display = "block";
        Sel9.style.display = "none";
        Sel10.style.display = "none";
        Sel11.style.display = "none";
    }else if(Filmes_lista == 9){
        Sel1.style.display = "none";
        Sel2.style.display = "none";
        Sel3.style.display = "none";
        Sel4.style.display = "none";
        Sel5.style.display = "none";
        Sel6.style.display = "none";
        Sel7.style.display = "none";
        Sel8.style.display = "none";
        Sel9.style.display = "block";
        Sel10.style.display = "none";
        Sel11.style.display = "none";
    }else if(Filmes_lista == 10){
        Sel1.style.display = "none";
        Sel2.style.display = "none";
        Sel3.style.display = "none";
        Sel4.style.display = "none";
        Sel5.style.display = "none";
        Sel6.style.display = "none";
        Sel7.style.display = "none";
        Sel8.style.display = "none";
        Sel9.style.display = "none";
        Sel10.style.display = "block";
        Sel11.style.display = "none";
    }else{
        Sel1.style.display = "none";
        Sel2.style.display = "none";
        Sel3.style.display = "none";
        Sel4.style.display = "none";
        Sel5.style.display = "none";
        Sel6.style.display = "none";
        Sel7.style.display = "none";
        Sel8.style.display = "none";
        Sel9.style.display = "none";
        Sel10.style.display = "none";
        Sel11.style.display = "block";
    }
}
function confirmar(){
    var id = sessionStorage.ID_USUARIO;
    var All_FilmesVar = TodosFilmes.value;
    var Select1Var = Number(Sel1.value);
    var Select2Var = Number(Sel2.value);
    var Select3Var = Number(Sel3.value);
    var Select4Var = Number(Sel4.value);
    var Select5Var = Number(Sel5.value);
    var Select6Var = Number(Sel6.value);
    var Select7Var = Number(Sel7.value);
    var Select8Var = Number(Sel8.value);
    var Select9Var = Number(Sel9.value);
    var Select10Var = Number(Sel10.value);
    var Select11Var = Number(Sel11.value);
    var Personagem = Select1Var.value +  Select2Var.value+  Select3Var.value+  Select4Var.value
+  Select5Var.value+  Select6Var.value+  Select7Var.value+  Select8Var.value +  Select9Var.value
+  Select10Var.value+  Select11Var.value; 
    fetch("/usuarios/confirmar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            IdServer: id,
            All_FilmesServer: All_FilmesVar,
            PersonagemServer: Personagem
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
