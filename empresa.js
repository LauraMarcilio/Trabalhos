// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "empresinha": "Google",
            "sobrep": "Empresa de tecnologia",
            "ano": 1995,
            "contato": "2197141542",
            "email": "felipefresteiro@hotmail.com",
            "endereco": "rua rio de janeiro, 1599",
            "contato": "Fale com a fulana de tal",
            "area": "area de extas",
            "experiencia": "expreciencia em banco de daos"
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

function insertEmpresa(empresa) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoEmpresa = {
        "id": novoId,
        "empresinha": empresa.empresinha,
        "sobrep" : empresa.sobrep,
        "ano": empresa.ano,
        "contato" : empresa.contato,
        "email": empresa.email,
        "endereco": empresa.endereco,
        "contato": empresa.contato,
        "area": empresa.formacao,
        "experiencia": empresa.experiencia
    };

    // Insere o novo objeto no array
    db.data.push(novoEmpresa);

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
    console.log(localStorage.getItem('db_contato'));
}

