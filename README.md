<!--PERFIL HTML-->
<!--CSS-->
<link href="tiaw.css" rel="stylesheet"> <!--CONECTA AO CSS-->
<!--HEAD-->
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
            <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons">
            <link rel="stylesgeet" href="https://rawgit.com/creativetimofficial/material-kit/master/assets/css/material-kit.css">
            <title>Perfil</title>
        </head>

<!--BODY-->
    <body class="profile-page">
        <nav class="navbar .navbar-nav .nav-item .nav-link .material-icons">
            <!--Quando eu coloco o header ele fica grande e as letras ficam umas em baixo das outras, talvez se eu colocar um p-->
            <div class="container px-lg-5">
                    <a class="navbar-brand" img scr="#!"></a>
                    <a class="nav-link active" aria-current="page" href="http://127.0.0.1:5501/.vscode/TIAW.html">Perfil</a></li> <!--PAGINA ATIVA-->
                    <a class="nav-link" href="http://127.0.0.1:5501/.vscode/TIAW.html">Pagina inicial</a></li>
                    <a class="nav-link" href="https://www.youtube.com/watch?v=o0LaNit1ts8">Chat</a></li>
                    <a class="nav-link" href="#!">Forúm</a></li></a>
            </div>
            
        </nav>
        
        <div class="page-header header-filter" data-parallax="true"></div>
                        <div class="main main-raised">
                        <div class="profile-content">
                        <div class="container">
                        <div class="row">
                        <div class="col-md-6 ml-auto mr-auto">
                        <div class="profile">
                            
                        <div class="avatar">
                        <img src="https://relvado.rs.leg.br/site/custom/default/img/no-avatar.png" alt="Image" class="img-raised img-fluid">
                        <!--usuario tem que poder mudar a imagem-->
                        </div>
                        <!--NOME DA EMPRESA GRANDE, TEM QUE SER MUDADO ASSIM QUE TODOS FOREM MUDADOS-->
                        <form>
                        <div class="name">
                        <h3 class="title">Nome da Empresa</h3>
                        </div>
                        </form> 
                        <!--FORMS-->
                        </div>
                        </div>
                    </div>
                        <form>
                            <div class="description text-center">
                            <p>Sobre a empresa</p>
                            </div>
                        </form>
                    <div class="row"> 
                        <div class="col-md-6 ml-auto mr-auto">
                        <div class="profile-tabs">
                        <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                        <li class="nav-item">
                        <a class="nav-link active" href="#vagas" role="tab" data-toggle="tab">
                        <i class="material-icons">favorite</i> <!--imagem-->
                                    Vagas
                        </a>
                        </li>
                                <!--EDITAR PERFIL-->
                        <li class="nav-item">
                        <a class="nav-link" href="#editperfil" role="tab" data-toggle="tab">
                        <i class="material-icons">palette</i>
                                        Editar Perfil
                        </a>
                        </li>
                                    <!--<li class="nav-item">
                                    <a class="nav-link" href="#favorite" role="tab" data-toggle="tab">
                                    <i class="material-icons">favorite</i>
                                        Favoritos
                                    </a>
                                    </li>-->
                        </ul>
                        </div>
                    </div>
                    </div>
            
                    <!--VAGAS-->
            <div class="tab-content tab-space">
                <div class="tab-pane active text-center gallery" id="vagas"> <!--VAGAS-->
                <div class="container">
                <div class="row"> <!--ANTES DE EDITAR TUDO-->
               
                        <div class="col-lg-12 col-xxl-4 mb-5">
                            <!--COLOCAR CARD AQUI-->

                             <!--CARD-->

                             <div class="title">
                                <h2>CRIAR NOVA VAGA</h2>
                                <!--BOTÃO QUE ENVIA PARA A OUTRA PAGINA-->

                                <a href="Vagas.html"><input type="button"
                                    style="background-color: transparent; border-color: black; color: black;"
                                    class="btn btn-warning" id="btnClear" value="clique aqui para criar uma nova vaga"></a>
                            </div> 
            <!--PARTE EM COMENTARIO PARA EDITAR DEPOIS-->
            <!--
            <div class="card">

            <div class="lineInput">
               <label>Informações sobre a vaga</label>
               <input type="text" id="vaga" placeholder="Exemplo: horas de trabalho, turno..">
           </div>
           <div class="lineInput">
                   <label>Requisitos</label>
                   <input type="text" id="valor" placeholder="Exemplo: idade, nivel de inglês, escolaridade...">
            </div>

            <div class="lineInput">
                   <label>Número de vagas</label>
                   <input type="number" id="inf" placeholder="Digite o número de vagas aqui">
            </div>

           <button onclick="produto.salvar()" id="btn1">Salvar</button>
           <button onclick="produto.cancelar()">Cancelar</button>
           
           </div> 
           -->
           <!--
           
           <div class="content">
               <table border="1">
                   <thead>
                       <th class="center">Vaga</th>
                       <th class="center">Informações</th>
                       <th class="center">Requisistos</th>
                       <th class="center">Número de vagas</th>
                       <th class="center">Ações</th>
                   </thead>
                   <tbody id="tbody">
                   
                   </tbody>
               </table>
           </div> 

        -->
            

            
     </div> <!--fecha a 1 class-->
                </div> <!--FECHA ROW-->
                </div> <!--FECHA CONTAINER-->
                </div> <!--GALERRY-->
                <div class="tab-pane text-center gallery" id="editperfil">
                    <div class="container">
                        <form id="form-contato">
                            <div class="form-group">
                              <input type="text" class="form-control" id="empresinha" placeholder="Nome da empresa">
                            </div>
                            <div class="form-group">
                              <input type="text" class="form-control" id="sobrep" placeholder="Sobre a empresa">
                            </div>
                            <div class="form-group">
                                <input type="number" class="form-control" id="ano" placeholder="Ano de criação da empresa">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="contato" placeholder="Telefone de contato da empresa">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" placeholder="Email de contato da empresa">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="endereco" placeholder="Endereço da empresa">
                            </div>
                            <div class="form-group">
                                <label for="objetivo">Nome para contato: </label>
                                <input type="text" class="form-control" id="contato>
                            </div>
                            <div class="form-group">
                                <label for="formacao">Area: </label>
                                <input type="text" class="form-control" id="area">
                            </div>
                            <div class="form-group">
                                <label for="experiencia">Experiências: </label>
                                <input type="text" class="form-control" id="experiencia">
                            </div>
                            <input type="button" class="btn btn-success" id="btnInsert" value="Enviar">
                          </form>
                        </div>
                    
                        <script>
                            function init() {
                                // Adiciona funções para tratar os eventos 
                                $("#btnInsert").click(function () {
                    
                                    // Obtem os valores dos campos do formulário
                                    let campoEmpresa = $("#empresinha").val();
                                    let campoSobre = $("#sobrep").val();
                                    let campoAno = $('#ano').val();
                                    let campoTelefone = $("#contato").val();
                                    let campoEmail = $('#email').val();
                                    let campoEndereco = $('#endereco').val();
                                    let campoContato = $('#contato').val();
                                    let campoArea = $('#area').val();
                                    let campoExperiencia = $('#experiencia').val();
                                    let empresa = { 
                                        empresinha: campoEmpresa, 
                                        sobrep: campoSobre, 
                                        ano: campoAno, 
                                        contato: campoTelefone, 
                                        email: campoEmail,
                                        endereco: campoEndereco,
                                        contato: campoContato,
                                        area: campoArea,
                                        experiencia: campoExperiencia };
                    
                                    insertEmpresa(empresa);
                                });
                            }
                        </script>       

            
                </div> <!--fecha edit perfil-->
            </div> <!--fecha vagas-->
        </div>

    
        <script src="tiaw.javascript.js"></script>
        <script src="java.2.js"></script>
        
        <!--CONECTA AO JAVA-->
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
        

    

    </body>
