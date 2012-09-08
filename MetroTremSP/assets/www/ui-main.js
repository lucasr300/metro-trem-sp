
$(document).ready(function(){
    
    var exibirPagina = function(pagina) {
        $('section').hide()
        $('section'+pagina).show()
    }
    
    var estacao_origem = $('select#origem')
    var estacao_destino = $('select#destino')
    
    var onLoad = function() {
        exibirPagina(':first')


        _.each(_.keys(sistema.grafo),function(estacao){
            var option = '<option>' + estacao + '</option>'
            estacao_origem.append(option)
            estacao_destino.append(option)
        })
    }();
    
    $('button#go').on('click',function(){
        if (estacao_origem.val() == estacao_destino.val())
            return false
        
        exibirPagina('#loading')

        var estacoes = $('section#estacoes ul')
        var trajeto = sistema.caminho_mais_curto_entre(estacao_origem.val(),estacao_destino.val())
        var transferencias = sistema.transferencias_no_caminho(trajeto)
        var sentido_inicial = sistema.sentido_inicial(trajeto)
        var tempo = sistema.tempo(trajeto,transferencias)

        estacoes.html('')
        estacoes.append('<li class="info">Embarque no sentido '+sentido_inicial+'</li>')
        estacoes.append('<li class="info">O tempo previsto é de '+tempo+'</li>')
        
        _.each(trajeto,function(estacao){
            estacoes.append('<li class="estacao">'+estacao+'</li>')
            
            if (estacao in transferencias) {
                estacoes.append('<li class="transferencia">'+transferencias[estacao]+'</li>')
            }
        })
        
        exibirPagina('#estacoes')
    })
    
     $('a[href="#status"]').on('click',function(){
         exibirPagina('#loading')
         $('#status span').html('')
         $('#status span').html('<iframe src="http://www.metro.sp.gov.br/Sistemas/direto-do-metro/diretodoMetroHome.aspx"></iframe>')
         exibirPagina('#status')
         return false;
     })
})
