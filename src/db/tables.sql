
CREATE TABLE Saida(
    id SERIAL PRIMARY KEY,
    NomeALuno VARCHAR(255),
    Curso VARCHAR(255),
    DataSaida DATE,
    HoraSaida TIME,
    Turma VARCHAR(255),
    AlunoRA INT,
    MaiorIdade BOOLEAN,
    justificativa VARCHAR(255),
    AssinaturaAnaq TEXT,  -- Alterado para TEXT, pode ser base64
    AssinaturaProf TEXT[]   -- Alterado para TEXT, pode ser base64
);


CREATE TABLE Usuarios(
    Nif INT PRIMARY KEY ,
    Nome VARCHAR(255),
    Email VARCHAR(255),
    Senha VARCHAR(255),
    Telefone VARCHAR(19),
    Tipo VARCHAR(255) NOT NULL
);

CREATE TABLE refresh_tokens (
    id SERIAL PRIMARY KEY,
    token TEXT NOT NULL,
    user_nif INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE rves(
    Id INT PRIMARY KEY,
    NifAutor INT,
    FOREIGN KEY (NifAutor) REFERENCES Usuarios(nif) ON DELETE CASCADE,
    Estudante VARCHAR(255),
    Curso VARCHAR(255),
    Turma VARCHAR(255),
    Data DATE,
    Hora TIME,
    Motivo VARCHAR(255),
    OrientacoesEstudante TEXT,
    DescricaoOcorrido TEXT,  
    Assinaturas TEXT[],  -- Assinaturas armazenadas como array de texto (base64)
    Elogios TEXT,
    Dificuldades TEXT,
    Presenca TEXT,
    numberusers INT
);

 CREATE TABLE rve_usuarios(
    id SERIAL PRIMARY KEY,
    id_rve INT,
    usuario_nif INT,
    FOREIGN KEY (id_rve) REFERENCES rves(Id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_nif) REFERENCES Usuarios(Nif) ON DELETE CASCADE
 );


CREATE TABLE CampoTexto (  
 Id SERIAL PRIMARY KEY,
 nifUsuario INT, -- Usar SERIAL para auto incremento NifTextoDocente INT, -- Presumindo que Nif seja um inteiro Texto TEXT,    
 CampoTexto VARCHAR(255),
 nomeUsuario VARCHAR(255),
 hora TIME,
 data DATE,
 FOREIGN KEY (nifUsuario) REFERENCES Usuarios(Nif),
  IdRVE INT,
    FOREIGN KEY (IdRVE) REFERENCES rves(Id)
 ); -- Referência à tabela Usuarios);  


faça um select que pegue todos os comentarios de uma determinada rve 

