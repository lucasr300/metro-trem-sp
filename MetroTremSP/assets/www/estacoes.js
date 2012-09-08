sistema = Sistema

sistema.adicionar_linha(1,2,["Jabaquara", "Conceição", "São Judas", "Saúde", "Praça da Árvore", "Santa Cruz", "Vila Mariana", "Ana Rosa", "Paraíso", "Vergueiro", "São Joaquim", "Liberdade", "Sé", "São Bento", "Luz", "Tiradentes", "Armênia", "Portuguesa-Tietê", "Carandiru", "Santana", "Jardim São Paulo-Ayrton Senna", "Parada Inglesa", "Tucuruvi"])

sistema.adicionar_linha(2,2,["Vila Prudente", "Tamanduateí", "Sacomã", "Alto do Ipiranga", "Santos-Imigrantes", "Chácara Klabin", "Ana Rosa", "Paraíso", "Brigadeiro", "Trianon-Masp", "Consolação", "Clínicas", "S. N. Sra. de Fátima-Sumaré", "Vila Madalena"])
 
sistema.adicionar_linha(3,2,["Corinthians-Itaquera", "Artur Alvim", "Patriarca", "Guilhermina-Esperança", "Vila Matilde", "Penha", "Carrão", "Tatuapé", "Belém", "Bresser-Mooca", "Brás", "Pedro II", "Sé", "Anhangabaú", "República", "Santa Cecília", "Marechal Deodoro", "Palmeiras-Barra Funda"])
 
sistema.adicionar_linha(4,2,["Luz", "República", "Paulista", "Faria Lima", "Pinheiros", "Butantã"])

sistema.adicionar_linha(5,2,["Capão Redondo", "Campo Limpo", "Vila das Belezas", "Giovanni Gronchi", "Santo Amaro", "Largo Treze"])

sistema.adicionar_linha(7,4,["Luz", "Palmeiras-Barra Funda", "Água Branca", "Lapa (Linha 7 - Rubi)", "Piqueri", "Pirituba", "Vila Clarice", "Jaraguá", "Perus", "Caieiras", "Franco da Rocha", "Baltazar Fidelis", "Francisco Morato", "Botujuru", "Campo Limpo Paulista", "Várzea Paulista", "Jundiaí"])

sistema.adicionar_linha(8,3,["Júlio Prestes", "Palmeiras-Barra Funda", "Lapa (Linha 8 - Diamante)", "Domingos de Moraes", "Imperatriz Leopoldina", "Presidente Altino", "Osasco", "Comandante Sampaio", "Quitaúna", "General Miguel Costa", "Carapicuiba", "Santa Terezinha", "Antonio João", "Barueri", "Jardim Belval", "Jardim Silveira", "Jandira", "Sagrado Coração", "Engº. Cardoso", "Itapevi"])

sistema.adicionar_linha("Ônibus Especial CPTM",3,["Itapevi","Santa Rita","Cimenrita","Ambuitá","Amador Bueno"])

sistema.adicionar_linha(9,3,["Osasco", "Presidente Altino", "Ceasa", "Vila Lobos-Jaguaré", "Cidade Universitária", "Pinheiros", "Hebraica-Rebouças", "Cidade Jardim", "Vila Olímpia", "Berrini", "Morumbi", "Granja Julieta", "Santo Amaro", "Socorro", "Jurubatuba", "Autódromo", "Primavera-Interlagos", "Grajaú"])

sistema.adicionar_linha(10,4,["Brás", "Mooca", "Ipiranga", "Tamanduateí", "São Caetano", "Utinga", "Prefeito Saladino", "Pref.Celso Daniel-Sto André", "Capuava", "Mauá", "Guapituba", "Ribeirão Pires", "Rio Grande da Serra"])

sistema.adicionar_linha(11,4,["Luz", "Brás", "Tatuapé", "Corinthians-Itaquera", "Dom Bosco", "José Bonifácio", "Guaianazes", "Antonio Gianetti Neto", "Ferraz de Vasconcelos", "Poá", "Calmon Viana", "Suzano", "Jundiapeba", "Brás Cubas", "Mogi das Cruzes", "Estudantes"])

sistema.adicionar_linha(12,4,["Brás", "Tatuapé", "Eng. Goulart", "USP Leste", "Comendador Ermelino", "São Miguel Paulista", "Jardim Helena-Vila Mara", "Itaím Paulista", "Jardim Romano", "Engº. Manoel Feio", "Itaquaquecetuba", "Aracaré", "Calmon Viana"])

sistema.adicionar_linha("Esteiras Rolantes",5,["Paulista","Consolação"])


sistema.tempo_das_estacoes = {
    'Vila Mariana': 1,

    'Clínicas': 1,
    'Brigadeiro': 1,
    'Vila Prudente': 1,
    'Chácara Klabin': 1,
    'Alto do Ipiranga': 1,
    'Sacomã': 1,
    
    'Carrão': 2,
    
    'Caieiras': 8,
    'Jaraguá': 7,
    'Piqueri': 6,
    'Francisco Morato': 8,
    
    
    'Ribeirão Pires': 5,
    'Capuava': 5,
    'São Caetano': 5,
    'Santo André': 5,
    'Guapituba': 4,
    'Mauá': 3,
    'Ipiranga': 4,
    
    'Guaianazes': 4,
    'Antonio Gianetti Neto': 4,
    'Ferraz de Vasconcelos': 6,
    'Poá': 4,
    
    'Eng. Goulart': 10,
    'Aracaré': 6
}