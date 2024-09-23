CREATE TABLE Saida(
id INT PRIMARY KEY AUTO_INCREMENT,
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

CREATE TABLE Usuario(
    Nif INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255),
    Email VARCHAR(255),
    Senha VARCHAR(255),
    Telefone INT,
    Tipo VARCHAR(255)
);

CREATE TABLE Atestado(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    NomeAluno VARCHAR(255),
    Curso VARCHAR(255),
    Turma VARCHAR(255),
    ImagemAtestado TEXT,
    Aluno RA INT,
    CID VARCHAR(255),
    DataInicio DATE,
    DataFim DATE,
    AssinaturaAnaq BOOLEAN,
    AssinaturaProf1 BOOLEAN,
    AssinaturaProf2 BOOLEAN,
    AssinaturaProf3 BOOLEAN,
    AssinaturaProf4 BOOLEAN
);

CREATE TABLE RVE(
 Id INT PRIMARY KEY AUTO_INCREMENT,
 Autor VARCHAR(255),
 Estudante VARCHAR(255),
 Curso VARCHAR(255),
 Turma VARCHAR(255),
 Data DATE,
 Hora TIME,
 Motivo VARCHAR(255),
 OrientaçõesEstudante TEXT,
 DescricaoOcorrido TEXT,
 DocentesEnvolvidos TEXT,
 Assinaturas Text,
 Elogios TEXT,
 Dificuldades TEXT,
 Presença TEXT
);
CREATE TABLE CampoTexto(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    NifTextoDocente INT,
    Texto TEXT,
    Assinado BOOLEAN,
    FOREIGN KEY (NifTextoDocente) REFERENCES Usuario(Nif)
);
CREATE TABLE Forum(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    IdRVE INT,
    IDCampoTexto INT,
   FOREIGN KEY (IdRVE) REFERENCES RVE(Id),
   FOREIGN KEY (IDCampoTexto) REFERENCES CampoTexto(ID)
);

