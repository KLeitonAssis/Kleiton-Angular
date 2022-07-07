export interface Processo {
    ID: number,
    Matricula: string,
    Reclamante: string,
    Advogado_Reclamante: string,
    NroProcesso: string,
    Vara: string,
    Comarca: string,
    DtDistribuicao: Date,
    Escritorio: string,
    Sentenca1: string,
    DtPublicacao: Date,
    Embargos: string,
    TpProcesso: string,
    Categoria: number,
    Site: number,
    DtStatus: Date,
    Status: number,
    VlrCausa: number,
    VlrEstimativaProcesso: number,
    VlrTotalProcesso: number,
    AdvogadoTMKT: number,
    AdvogadoExecutor: number,
    Risco: number,
    Produto: number,
    Observacao:number,
    DtAtualizacao: Date,
    UsuCodigo: number,
    DataHora: Date,
    FlagAtivo: number,
    ModPagamento: number,
    ChaveImp: number,
    CodEncerrado: number,
    DtEncerrado: Date,
    Reclamado: string,
    PrimeiroReu: string,
    SegundoReu: string,
    Revisado: number,
    NomeUsuario: string,
    OABAdvogadoReclamante: string,
    Competancia: string,
    CPFAdvogadoEmpresa: string,
    OABAdvogadoEmpresa: string,
    CPFAdvogadoExecutor: string,
    OABAdvogadoExecutor: string,
    EscritorioAdvocacia: number,
}