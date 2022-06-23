// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "sobre": "Sobre a vaga aqui",
            "estado": "MG",
            "area": "Exatas",
            "turno": "Tarde",
            "email": "Empresa@gmail.com",
            "horas": "5:30",
            "salario": "2500",
            "site": "Empresa.com"
        }
        
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "sobre": contato.sobre,
        "email" : contato.email,
        "horas": contato.horas,
        "salario": contato.salario,
        "estado" : contato.estado,
        "area": contato.area,
        "turno": contato.turno,
        "site": contato.site
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Vaga inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].sobre = contato.sobre,
    db.data[index].email = contato.email,
    db.data[index].horas = contato.horas,
    db.data[index].salario = contato.salario,
    db.data[index].estado = contato.estado,
    db.data[index].area = contato.area,
    db.data[index].turno = contato.turno,
    db.data[index].site = contato.site

    displayMessage("Vaga alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Vaga removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}