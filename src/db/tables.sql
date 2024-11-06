
CREATE TABLE Saida(
id SERIAL PRIMARY KEY ,
NomeALuno VARCHAR(255),
Curso VARCHAR(255),
DataSaida DATE,
HoraSaida TIME,
Turma VARCHAR(255),
AlunoRA INT,
MaiorIdade BOOLEAN,
justificativa VARCHAR(255),
AssinaturaAnaq VARCHAR(255),
AssinaturaProf VARCHAR(255)
);

CREATE TABLE Usuarios(
    Nif INT PRIMARY KEY ,
    Nome VARCHAR(255),
    Email VARCHAR(255),
    Senha VARCHAR(255),
    Telefone VARCHAR(19),
    Tipo VARCHAR(255) NOT NULL
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
 DocentesEnvolvidos TEXT[],-- Array de texto para docentes envolvidos Assinaturas TEXT[], -- Array de texto para assinaturas Elogios TEXT,  
 Dificuldades TEXT,  
 nifDocentes INT,
 FOREIGN KEY (nifDocentes) REFERENCES Usuarios(Nif) ON DELETE CASCADE,  -- Referência à tabela Usuarios);
 assinaturas BOOLEAN[],
 Presenca TEXT
 );

 CREATE TABLE rve_usuarios(
    id SERIAL PRIMARY KEY,
    id_rve INT,
    usuario_nif INT,
    

 );


CREATE TABLE CampoTexto (  
 Id INT PRIMARY KEY,
 nifUsuario INT, -- Usar SERIAL para auto incremento NifTextoDocente INT, -- Presumindo que Nif seja um inteiro Texto TEXT,    
 CampoTexto VARCHAR(255),
 hora TIME,
 data DATE,
 FOREIGN KEY (nifUsuario) REFERENCES Usuarios(Nif),
  IdRVE INT,
  FOREIGN KEY (IdRVE) REFERENCES rves(Id)
 ); -- Referência à tabela Usuarios);  



faça um select que pegue todos os comentarios de uma determinada rve 

