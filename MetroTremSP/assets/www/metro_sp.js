
Sistema = {
    grafo: {},
    linha_da_estacao: {},
    estacoes_terminais_da_linha: {},
    tempo_das_estacoes: {},
    tempo_das_linhas: {},
    
    adicionar_linha:function(linha,tempo,estacoes) {
        var that = this
        var enumerate = _.zip(_.range(_.size(estacoes)),estacoes)
        
        _.each(enumerate,function(item){
            var i = item[0]
            var estacao = item[1]
            var estacao_anterior
            var proxima_estacao
            
            if (estacao != _.first(estacoes)) {
                estacao_anterior = estacoes[i-1]
            }
            
            if (estacao != _.last(estacoes)) {
                proxima_estacao = estacoes[i+1]
            }
            
            if (estacao in that.grafo) {
                var linhas = that.linha_da_estacao[estacao]
                linhas.push(linha)

                var conexoes = that.grafo[estacao]
                if (estacao_anterior)
                    conexoes.push(estacao_anterior)

                if (proxima_estacao)
                    conexoes.push(proxima_estacao)

                if (!estacao_anterior || !proxima_estacao)
                    that.adicionar_estacao_terminal(linha,estacao,estacao)

                that.adicionar_estacao_de_integracao(estacao,linhas,conexoes)
            } else {
                if (!estacao_anterior)
                    that.adicionar_estacao_terminal(linha,estacoes[0],estacoes[1])
                
                if (!proxima_estacao)
                    that.adicionar_estacao_terminal(linha,_.last(estacoes),_.last(estacoes,2)[0])
                
                if (estacao_anterior && proxima_estacao) {
                    that.adicionar_estacao(estacao,estacao_anterior,proxima_estacao,linha)
                }
            }
                
        })
        
        this.tempo_das_linhas[linha] = tempo
    
    },
    
    adicionar_estacao:function(nome, anterior, proxima, linha) {
        this.grafo[nome] = [anterior, proxima]
        this.linha_da_estacao[nome] = [linha]
    },
     
         
    adicionar_estacao_terminal:function(linha,nome,anterior) {
        this.grafo[nome] = [anterior]
        
        if (!this.estacoes_terminais_da_linha[linha])
            this.estacoes_terminais_da_linha[linha] = [nome]
        else {
            var outro_terminal = this.estacoes_terminais_da_linha[linha][0]
            this.estacoes_terminais_da_linha[linha] =  [outro_terminal, nome]
        }
            
        this.linha_da_estacao[nome] = [linha]
    },
    
    adicionar_estacao_de_integracao:function(nome,linhas,conexoes) {
        this.linha_da_estacao[nome] = linhas
        this.grafo[nome] = conexoes
    },
    
    estacao_e_de_integracao:function(estacao) {
        return _.size(this.grafo[estacao]) > 2
    },
    
    caminhos_entre:function(estacao_origem,estacao_destino,caminho) {
        var that = this
        var caminho_local = []
        _.each(caminho,function(i){caminho_local.push(i)})
        caminho_local.push(estacao_origem)
        caminho = caminho_local
        
        if (estacao_origem == estacao_destino)
            return [caminho]
            
        if (!(_.has(this.grafo,estacao_origem)))
            return []
            
        var caminhos = []
        _.each(this.grafo[estacao_origem], function(vertice) {
            if (caminho.indexOf(vertice) == -1) {
                var novos_caminhos = that.caminhos_entre(vertice, estacao_destino, caminho)
                _.each(novos_caminhos,function(novo_caminho) {
                    caminhos.push(novo_caminho)
                })
            }
                
        })
               
        return caminhos
        
    },
    
    caminhos_mais_curtos_entre:function(estacao_origem,estacao_destino) {
        var caminhos = this.caminhos_entre(estacao_origem,estacao_destino)
        return _.sortBy(caminhos, 'length')
    },
    
    caminho_mais_curto_entre:function(estacao_origem,estacao_destino) {
        var caminhos = this.caminhos_entre(estacao_origem,estacao_destino)
        return _.min(caminhos, function(caminho){return _.size(caminho)});
    },
    sentido_do_percurso_na_mesma_linha:function(linha,estacao,estacao_adjacente) {
        var terminal1 = this.estacoes_terminais_da_linha[linha][0]
        var terminal2 = this.estacoes_terminais_da_linha[linha][1]
        
        if (_.size(this.caminho_mais_curto_entre(estacao,terminal1)) > 
            _.size(this.caminho_mais_curto_entre(estacao_adjacente,terminal1)) )
                return terminal1
                
        return terminal2
    },
    sentido_inicial:function(caminho) {
        var primeira_estacao = caminho[0]
        var segunda_estacao = caminho[1]
        
        return sistema.sentido_do_percurso_na_mesma_linha(
            sistema.linha_da_estacao[primeira_estacao][0],
            primeira_estacao,
            segunda_estacao
        )
    },
    transferencias_no_caminho:function(caminho) {
        var that = this
        var transferencias = {}
        var linha_atual = that.linha_da_estacao[caminho[0]][0]
        var estacao_anterior = ''
        
        _.each(caminho,function(estacao) {
            var linha_desta_estacao = that.linha_da_estacao[estacao]
                if (linha_desta_estacao.indexOf(linha_atual) == -1) {
                    
                    linha_atual = _.intersect(linha_desta_estacao, that.linha_da_estacao[estacao_anterior])[0]
                    
                    var sentido = that.sentido_do_percurso_na_mesma_linha(
                        linha_atual,
                        estacao_anterior,
                        estacao
                    )
                        
                    var texto = 'Transferência para linha ' + linha_atual + ', no sentido ' + sentido
                    
                    transferencias[estacao_anterior] = texto
                }
                
            estacao_anterior = estacao
            
        })

            
        return transferencias
        
    },
    tempo:function(caminho,transferencias) {
        var that = this
        var tempo = _.size(transferencias) * 2
        
        _.each(caminho,function(estacao){
            var tempo_da_linha = that.tempo_das_linhas[that.linha_da_estacao[estacao][0]]
            if(_.has(that.tempo_das_estacoes,estacao)) {
                tempo += that.tempo_das_estacoes[estacao]
            } 
            tempo += tempo_da_linha
        }) 
        
        if (tempo >= 60) {
            var horas = parseInt(tempo / 60,10)
            var minutos = (tempo - horas * 60)
            if (horas > 0) {
                tempo = horas + 'h'
            }
            if (minutos > 0) {
                tempo += minutos
            }
        }
        
        return tempo + 'm'
    }
    
}





