CREATE TABLE Saida (  
    id SERIAL PRIMARY KEY,  
    nomealuno VARCHAR(255),  
    curso VARCHAR(255),  
    datasaida DATE,  
    horasaida TIME,  
    turma VARCHAR(255),  
    alunora VARCHAR(255),  
    maioridade BOOLEAN, 
    justificativa VARCHAR(255), 
    assinaturaAnaq VARCHAR(255),  
    assinaturaProf VARCHAR(255)  
);  

CREATE TABLE Usuarios(
    Nif INT PRIMARY KEY ,
    Nome VARCHAR(255),
    Email VARCHAR(255),
    Senha VARCHAR(255),
    Telefone VARCHAR(19),
    Tipo VARCHAR(255) NOT NULL
);

CREATE TABLE atestados (  
    id SERIAL PRIMARY KEY,  
    aluno TEXT NOT NULL,  
    turma TEXT NOT NULL,  
    curso TEXT NOT NULL,  
    ra TEXT NOT NULL,  
    data_inicial DATE NOT NULL,  
    data_final DATE NOT NULL,  
    justificativa TEXT NOT NULL, 
      cid TEXT NOT NULL , 
    imagem BYTEA     
);

CREATE TABLE RVES(
 Id SERIAL PRIMARY KEY ,
 Autor VARCHAR(255),
 Estudante VARCHAR(255),
 Curso VARCHAR(255),
 Turma VARCHAR(255),
 Data DATE,
 Hora TIME,
 Motivo VARCHAR(255),
 OrientacoesEstudante TEXT,
 DescricaoOcorrido TEXT,
 DocentesEnvolvidos TEXT[],
 Assinaturas Text[],
 Elogios TEXT,
 Dificuldades TEXT,
 Presenca TEXT
);
CREATE TABLE CampoTexto(
    Id INT PRIMARY KEY ,
    NifTextoDocente INT,
    Texto TEXT,
    Assinado BOOLEAN,
    FOREIGN KEY (NifTextoDocente) REFERENCES Usuarios(Nif)
);
CREATE TABLE Forum(
    Id INT PRIMARY KEY ,
    IDRVE INT,
    IDCampoTexto INT REFERENCES FROM  CampoTexto(Id) CASCADE,
    Data DATE,
   FOREIGN KEY (IdRVE) REFERENCES RVES(Id)
);

