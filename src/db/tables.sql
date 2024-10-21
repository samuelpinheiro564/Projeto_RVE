
CREATE TABLE Saida(
id SERIAL PRIMARY KEY ,
NomeALuno VARCHAR(255),
Curso VARCHAR(255),
DataSaida DATE,
HoraSaida TIME,
Turma VARCHAR(255),
AlunoRA INT,
MaiorIdade BOOLEAN,
LiberadoSec BOOLEAN,
AssinaturaAnaq BOOLEAN,
AssinaturaProf BOOLEAN
);


CREATE TABLE Usuarios(
    Nif INT PRIMARY KEY ,
    Nome VARCHAR(255),
    Email VARCHAR(255),
    Senha VARCHAR(255),
    Telefone VARCHAR(19),
    Tipo VARCHAR(255) NOT NULL
);

CREATE TABLE atestado (  
    id SERIAL PRIMARY KEY,  
    nome_aluno VARCHAR(100) NOT NULL,  
    turma VARCHAR(50) NOT NULL,  
    curso VARCHAR(100) NOT NULL,  
    data_inicial DATE NOT NULL,  
    data_final DATE NOT NULL,  
    imagem BYTEA,
    cid VARCHAR(255)
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

