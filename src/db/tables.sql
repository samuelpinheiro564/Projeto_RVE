CREATE TABLE Saida(
id INT PRIMARY KEY ,
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
    Telefone INT,
    Tipo VARCHAR(255)
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
    imagem TEXT,   
    cid TEXT NOT NULL  
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
 DocentesEnvolvidos TEXT,
 Assinaturas Text,
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
    IDCampoTexto INT,
    Hora Time,
   FOREIGN KEY (IdRVE) REFERENCES RVES(Id),
   FOREIGN KEY (IDCampoTexto) REFERENCES CampoTexto(ID)
);

