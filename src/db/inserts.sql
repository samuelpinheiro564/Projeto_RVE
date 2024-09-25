INSERT INTO `Usuarios` (`Nome`,`Email`,`Senha`,`Telefone`,`Tipo`) VALUES
('John Doe','123456',12345678,'Admin'),
('Jane Doe','123456',12345678,'Admin'),
('João Silva','123456',12345678,'Admin'),
('Maria Silva','123456',12345678,'Admin');

INSERT INTO `Atestado` (`NomeAluno`,`Curso`,`Turma`,`ImagemAtestado`,`AlunoRA`,`CID`,`DataInicio`,`DataFim`,`AssinaturaAnaq`,`AssinaturaProf1`,`AssinaturaProf2`,`AssinaturaProf3`,`AssinaturaProf4`) VALUES
('João Silva','DS','1A','imagem1','123456','A01','2021-01-01','2021-01-02',1,1,1,1,1),
('Maria Silva','DS','1A','imagem2','123457','A02','2021-01-01','2021-01-02',1,1,1,1,1),
('John Doe','Mecanica','2B','imagem3','123458','A03','2021-01-01','2021-01-02',1,1,1,1,1),
('Jane Doe','Mecanica','2B','imagem4','123459','A04','2021-01-01','2021-01-02',1,1,1,1,1);

INSERT INTO `Saida` (`NomeAluno`,`Curso`,`DataSaida`,`HoraSaida`,`Turma`,`AlunoRA`,`MaiorIdade`,`LiberadoSec`,`AssinaturaAnaq`,`AssinaturaProf`) VALUES
('João Silva','DS','2021-01-01','12:00:00','1A','123456',1,1,1,1),
('Maria Silva','DS','2021-01-01','12:00:00','1A','123457',1,1,1,1),
('John Doe','Mecanica','2021-01-01','12:00:00','2B','123458',1,1,1,1),
('Jane Doe','Mecanica','2021-01-01','12:00:00','2B','123459',1,1,1,1);

INSERT INTO  `RVE` (`Autor`,`Estudante`,`Curso`,`Turma`,`Data`,`Hora`,`Motivo`,`OrientaçõesEstudante`,`DescricaoOcorrido`,`DocentesEnvolvidos`,`Assinaturas`,`Elogios`,`Dificuldades`,`Presença`) VALUES
('João Silva','Maria Silva','DS','1A','2021-01-01','12:00:00','Motivo1','OrientaçõesEstudante1','DescricaoOcorrido1','DocentesEnvolvidos1','Assinaturas1','Elogios1','Dificuldades1','Presença1'),
('Maria Silva','João Silva','DS','1A','2021-01-01','12:00:00','Motivo2','OrientaçõesEstudante2','DescricaoOcorrido2','DocentesEnvolvidos2','Assinaturas2','Elogios2','Dificuldades2','Presença2'),
('John Doe','Jane Doe','Mecanica','2B','2021-01-01','12:00:00','Motivo3','OrientaçõesEstudante3','DescricaoOcorrido3','DocentesEnvolvidos3','Assinaturas3','Elogios3','Dificuldades3','Presença3'),
('Jane Doe','John Doe','Mecanica','2B','2021-01-01','12:00:00','Motivo4','OrientaçõesEstudante4','DescricaoOcorrido4','DocentesEnvolvidos4','Assinaturas4','Elogios4','Dificuldades4','Presença4');

INSERT INTO `CampoTexto` (`NifTextoDocente,Texto,Assinado`) VALUES
(123456,'Texto1',1),
(123457,'Texto2',1),
(123458,'Texto3',1),
(123459,'Texto4',1);

INSERT INTO `Forum` ('IDRVE','IDCampoTexto','Hora') VALUES
(1,1,'12:00:00'),
(2,2,'12:00:00'),
(3,3,'12:00:00'),
(4,4,'12:00:00');