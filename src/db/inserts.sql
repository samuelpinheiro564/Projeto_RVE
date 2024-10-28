INSERT INTO Saida (id, NomeALuno, Curso, DataSaida, HoraSaida, Turma, AlunoRA, MaiorIdade, LiberadoSec, AssinaturaAnaq, AssinaturaProf) VALUES 
(1, 'João Silva', 'Matemática', '2024-09-01', '08:30:00', 'A', 123456, TRUE, TRUE, FALSE, TRUE),
(2, 'Maria Oliveira', 'Biologia', '2024-09-02', '09:00:00', 'B', 654321, TRUE, FALSE, TRUE, TRUE),
(3, 'Pedro Santos', 'Química', '2024-09-03', '10:15:00', 'C', 112233, FALSE, TRUE, FALSE, FALSE),
(4, 'Ana Costa', 'História', '2024-09-04', '11:00:00', 'D', 445566, TRUE, TRUE, TRUE, TRUE),
(5, 'Lucas Pereira', 'Física', '2024-09-05', '12:30:00', 'E', 778899, FALSE, FALSE, TRUE, FALSE);

INSERT INTO SaidaProfessor (id, NomeProfessor, Curso, DataSaida, HoraSaida, Turma, ProfessorRA, MaiorIdade, LiberadoSec, AssinaturaAnaq, AssinaturaProf) VALUES 
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

INSERT INTO atestado (nome_aluno, turma, curso, data_inicial, data_final, imagem,cid) VALUES   
('João da Silva', '1A', 'Engenharia', '2023-01-01', '2023-06-30', NULL,'A01'),  
('Maria Oliveira', '2B', 'Medicina', '2023-02-01', '2023-08-31', NULL,'B02'),  
('Pedro Santos', '3C', 'Direito', '2023-03-01', '2023-12-31', NULL,'C03'),  
('Ana Costa', '1D', 'Arquitetura', '2023-04-15', '2023-09-15', NULL,'D04'),  
('Lucas Pereira', '2E', 'Biologia', '2023-05-01', '2023-11-01', NULL,'E05');
-- Insert into RVES
INSERT INTO RVES (
    id,
    Autor, 
    Estudante, 
    Curso, 
    Turma, 
    Data, 
    Hora, 
    Motivo, 
    OrientacoesEstudante, 
    DescricaoOcorrido, 
    DocentesEnvolvidos, 
    Dificuldades, 
    assinaturas, 
    Presenca
) VALUES (

    11,
    123456789, 
    'Estudante Exemplo', 
    'Curso Exemplo', 
    'Turma Exemplo', 
    '2024-10-21', 
    '10:00:00', 
    'Motivo Exemplo', 
    'Orientações para o estudante', 
    'Descrição do ocorrido', 
    ARRAY['Docente1', 'Docente2'], 
    'Dificuldades Exemplo', 
    ARRAY[true, false], 
    'Presença Exemplo'
);

-- Insert into CampoTexto
INSERT INTO CampoTexto (
    id,
 nifUsuario, 
 CampoTexto 
) VALUES (
    15151155,
    123456789, 
    'Campo de texto exemplo'
);

INSERT INTO CampoTexto (
    id,
 nifUsuario, 
 CampoTexto 
) VALUES (
    121212,
    987654321, 
    'Campo de texto exemplo'
);

-- Insert into Forum
INSERT INTO Forum (
    IdRVE, 
    IdCampoTexto
) VALUES (
    11111111, -- Assuming this ID exists in RVES
   121212
);