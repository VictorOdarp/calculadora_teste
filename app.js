function calcular(){
    let nomeMateria = document.getElementById("nome_materia").value;
    let comprimento = parseFloat(document.getElementById("comprimento_material").value) / 1000;
    let comprimentoProduto = parseFloat(document.getElementById("comprimento_produto").value) / 1000;
    let resultado = comprimento / comprimentoProduto;
    let campo = document.getElementById("output_resultado");
    campo.innerHTML = `${resultado.toFixed(0)} unidades serão produzidas com ${nomeMateria}`;

    listaMaterial.push(nomeMateria);
    listaResultado.push(resultado);
    let campoRegistro = document.getElementById ("registro");
    let tituloRegistro = document.getElementById("titulo-registro")
    let itemDiv = document.createElement("div")
    let materialDiv = document.createElement("div")

    let ultimoResultado = listaResultado[listaResultado.length - 1];
    let ultimoMaterial = listaMaterial[listaMaterial.length - 1];
    
    if (listaResultado.length < 4){
        itemDiv = document.createElement("div")
        itemDiv.className = "item-resultado";

        itemDiv.textContent = `${ultimoResultado.toFixed[0]} unidades`;

        materialDiv = document.createElement("div")
        materialDiv.className = "item-material";
    
        materialDiv.textContent = ultimoMaterial;

        campoRegistro.appendChild(itemDiv);
        campoRegistro.appendChild(materialDiv);
        console.log(listaResultado)
    }
    else if (listaResultado.length == 4){
        campoRegistro.innerHTML = "";
        campoRegistro.appendChild(tituloRegistro);

        itemDiv = document.createElement("div")
        itemDiv.className = "item-resultado";

        itemDiv.textContent = listaResultado[listaResultado.length - 1];

        materialDiv = document.createElement("div")
        materialDiv.className = "item-material";
    
        materialDiv.textContent = listaMaterial[listaMaterial.length - 1];

        campoRegistro.appendChild(itemDiv);
        campoRegistro.appendChild(materialDiv);

        listaResultado = [];
        console.log("teste")
    }
    
}

function resetar(){
    document.getElementById("nome_materia").value = null;
    document.getElementById("comprimento_material").value = null;
    document.getElementById("comprimento_produto").value = null;
    document.querySelector("output").value = "";
    resultado = null;
    let campoRegistro = document.getElementById ("registro");
    campoRegistro.innerHTML = "";
}

let listaResultado = [];
let listaMaterial = [];