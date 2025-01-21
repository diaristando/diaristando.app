enum Genero {
    MASCULINO = 'MASCULINO',
    FEMININO = 'FEMININO',
    OUTRO = 'OUTRO',
}

enum Tipo {
    CLIENTE = 'CLIENTE',
    DIARISTA = 'DIARISTA',
}

export type userDTO = {
    tipo: Tipo;
    imageURL: string;
    identificacaoGeneroForm: {
        nomeVisivel: string;
        genero: Genero;
    };
    dadosPessoaisForm: {
        nome: string;
        nomeSocial: string;
        email: string;
        cpf: string;
        telefone: string;
        dataNascimento: string;
    };
};
