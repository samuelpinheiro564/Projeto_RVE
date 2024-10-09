INSERT INTO Saida (id, NomeALuno, Curso, DataSaida, HoraSaida, Turma, AlunoRA, MaiorIdade, LiberadoSec, AssinaturaAnaq, AssinaturaProf) VALUES 
(1, 'João Silva', 'Matemática', '2024-09-01', '08:30:00', 'A', 123456, TRUE, TRUE, FALSE, TRUE),
(2, 'Maria Oliveira', 'Biologia', '2024-09-02', '09:00:00', 'B', 654321, TRUE, FALSE, TRUE, TRUE),
(3, 'Pedro Santos', 'Química', '2024-09-03', '10:15:00', 'C', 112233, FALSE, TRUE, FALSE, FALSE),
(4, 'Ana Costa', 'História', '2024-09-04', '11:00:00', 'D', 445566, TRUE, TRUE, TRUE, TRUE),
(5, 'Lucas Pereira', 'Física', '2024-09-05', '12:30:00', 'E', 778899, FALSE, FALSE, TRUE, FALSE);

INSERT INTO Usuarios (Nif, Nome, Email, Senha, Telefone, Tipo) VALUES 
(123456789, 'Carlos Almeida', 'carlos@example.com', 'senha123', 987654321, 'Docente'),
(987654321, 'Fernanda Lima', 'fernanda@example.com', 'senha456', 123456789, 'Aluno'),
(567890123, 'Rafael Gomes', 'rafael@example.com', 'senha789', 234567890, 'Docente'),
(234567890, 'Sofia Martins', 'sofia@example.com', 'senha101', 345678901, 'Aluno'),
(345678901, 'Gustavo Ribeiro', 'gustavo@example.com', 'senha202', 456789012, 'Docente');

INSERT INTO atestados (  
    aluno,  
    turma,  
    curso,  
    ra,  
    data_inicial,  
    data_final,  
    justificativa,  
    imagem,  
    cid  
) VALUES (  
    'Maria Oliveira',  
    '10B',  
    'Ensino Médio',  
    '654321',  
    '2024-10-01',  
    '2024-10-15',  
    'Problemas de Saúde',  
    'caminho/para/imagem.jpg',   
    'A12'  
);
INSERT INTO RVES (Id, Autor, Estudante, Curso, Turma, Data, Hora, Motivo, OrientaçõesEstudante, DescricaoOcorrido, DocentesEnvolvidos, Assinaturas, Elogios, Dificuldades, Presença) VALUES 
(1, 'Prof. Ana', 'Tiago Silva', 'Matemática', 'A', '2024-09-01', '08:30:00', 'Faltou à aula', 'Estudar mais', 'Faltou por motivo de saúde', 'Prof. Ana', 'Assinado', 'Bom aluno', 'Dificuldade em entender', 'Presente'),
(2, 'Prof. Carlos', 'Juliana Costa', 'História', 'B', '2024-09-02', '09:00:00', 'Comportamento', 'Melhorar postura', 'Comportamento inadequado', 'Prof. Carlos', 'Assinado', 'Participativa', 'Nenhuma', 'Presente'),
(3, 'Prof. Rafael', 'Marcos Santos', 'Química', 'C', '2024-09-03', '10:15:00', 'Nota abaixo da média', 'Revisar conteúdo', 'Desempenho insatisfatório', 'Prof. Rafael', 'Assinado', 'Dedicado', 'Dificuldade em química', 'Presente'),
(4, 'Prof. Beatriz', 'Beatriz Lima', 'Física', 'D', '2024-09-04', '11:00:00', 'Faltou ao teste', 'Estudar para o próximo', 'Faltou ao teste sem justificativa', 'Prof. Beatriz', 'Assinado', 'Inteligente', 'Falta de interesse', 'Presente'),
(5, 'Prof. Gustavo', 'Eduardo Pereira', 'Biologia', 'E', '2024-09-05', '12:30:00', 'Problemas de saúde', 'Consultar médico', 'Problemas recorrentes', 'Prof. Gustavo', 'Assinado', 'Responsável', 'Dificuldade em biologia', 'Presente');

INSERT INTO CampoTexto (Id, NifTextoDocente, Texto, Assinado) VALUES 
(1, 123456789, 'Texto de exemplo 1', TRUE),
(2, 987654321, 'Texto de exemplo 2', FALSE),
(3, 567890123, 'Texto de exemplo 3', TRUE),
(4, 234567890, 'Texto de exemplo 4', FALSE),
(5, 345678901, 'Texto de exemplo 5', TRUE);

INSERT INTO Forum (Id, IDRVE, IDCampoTexto, Hora) VALUES 
(1, 1, 1, '08:30:00'),
(2, 2, 2, '09:00:00'),
(3, 3, 3, '10:15:00'),
(4, 4, 4, '11:00:00'),
(5, 5, 5, '12:30:00');