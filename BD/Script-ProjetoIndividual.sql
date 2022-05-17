CREATE DATABASE ma;
USE ma;
CREATE TABLE Usuario(
idUsuario int primary key auto_increment,
nomeUser VARCHAR(50),
email VARCHAR(20),
senha VARCHAR(20),
fkFavoritos INT,
foreign key (fkFavoritos) references Favoritos (idFavorito)
);

CREATE TABLE Favoritos(
idFavorito INT auto_increment,
nomeFilme VARCHAR (50),
nomepersFAV VARCHAR(50),
fkFilmes INT,
foreign key (fkFilmes) references Filmes(idFilmes),
primary key (idFavorito, fkFilmes)
);

CREATE TABLE Filmes(
idFilmes int primary key auto_increment,
nomeFilme VARCHAR(50),
dtLancamento DATE,
diretore VARCHAR(100)
);
 CREATE TABLE Personagens(
 idPersonagem int auto_increment,
 nomePersonagem VARCHAR(50),
 idade INT,
 genero char(10),
 constraint chkgen CHECK (genero in('feminino', 'masculino')),
 ax_filmes INT,
 foreign key (ax_filmes) references Filmes(idfilmes),
 primary key (idPersonagem, ax_filmes)
 );