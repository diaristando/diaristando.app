enum Genero {
    MASCULINO = 'MASCULINO',
    FEMININO = 'FEMININO',
    OUTRO = 'OUTRO',
}

export enum Tipo {
    CLIENTE = 'CLIENTE',
    DIARISTA = 'DIARISTA',
}

export type userDTO = {
    id: string;
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
