/* Array de carros e pilotos */import { carros, pilotos } from './components/elements/'
/* Class carro e piloto */import { carro, piloto } from './components/class/'
/* Info dos carros e pilotos */import { infoCarros, infoPilotos } from './components/renderHTML/base-info'
/* Criando os selects */import { selectCarro, selectPiloto } from './components/selecao/'
/* Definindo os carros */import { escCarro1, escCarro2, escCarro3, escCarro4 } from './components/selecao/escolhi/'
/* Definindo os pilotos */import { escPiloto1, escPiloto2, escPiloto3, escPiloto4 } from './components/selecao/escolhi/'
/* Contêm todas as funções scroll */import efeitosScroll from './components/css/efeitos-scroll'
/* Exibi um letrero na telinha de lideres */import slide from './components/css/slide'
/* Exibir e esconder informações */import detalhes from './components/css/exibirInformacoes'
/* Exibi informções rápidas dos carros */import efeitoInfoDoCarro from './components/css/info-rapidas'
/* Script que renderiza a barra lateral */import lateral from './components/renderHTML/lateral'
/* Script que renderiza a parte do placar */import lideranca from './components/renderHTML/placar'
/* Script que renderiza a parte principal */import principal from './components/renderHTML/principal'


// Scripts css
detalhes()
document.querySelector('.area-placar').innerHTML = lideranca()
slide()
efeitosScroll()

lateral(pilotos(), carros())
  .then(html =>document.querySelector('.area-info').innerHTML = html)
  .then(() =>{
    document.querySelectorAll('[exibir-popup]').forEach(li =>{
      li.onmousemove = () => {
        li.childNodes[1].style.display = 'block'
      }
      li.onmouseout = () => {
        li.childNodes[1].style.display = 'none'
      }
    })
  })

  infoCarros(carros())
  infoPilotos(pilotos())

principal()
  .then(html => document.querySelector('.principal').innerHTML = html)
  .then(() => {
    selectCarro(carros())
    selectPiloto(pilotos())

    const classCarro = carro()
    const classPiloto = piloto()

    const funcoesDeDefinicaoCarros = [escCarro1(), escCarro2(), escCarro3(), escCarro4()]
    const funcoesDeDefinicaoPilotos = [escPiloto1(), escPiloto2(), escPiloto3(), escPiloto4()]
    for (let func = 0; func <= 3; func++) {
      funcoesDeDefinicaoPilotos[func]()
      funcoesDeDefinicaoCarros[func]()
      document.getElementById(`escolhendoCarro${func + 1}`).addEventListener('change', funcoesDeDefinicaoCarros[func])
      document.getElementById(`escolhendoPiloto${func + 1}`).addEventListener('change', funcoesDeDefinicaoPilotos[func])
    }

    function start() {
      document.querySelectorAll('[apresentacao-slide]').forEach(span => span.style.top = '100%')
      document.querySelectorAll('.botoes input').forEach(input => input.classList.add('desabilitado'))

      document.querySelectorAll('.velocidade').forEach(span => span.innerHTML = '')
      document.querySelectorAll('.quebra').forEach(div => div.innerHTML = '')
      document.querySelectorAll('.cambio').forEach(img => img.src = 'imagens/importantes/cambio_desligado.png')

      document.querySelectorAll('.principal table').forEach(table => table.style.height = '158px')
      document.querySelectorAll('[area-select]').forEach(area => area.style.display = 'none')
      document.querySelectorAll('.aproveitamento').forEach(area => area.style.background = ``)
      document.querySelectorAll('.nitro').forEach(div => div.childNodes.forEach(span => span.style.opacity = '1'))
    }

    function instanciar(random = true) {
      start()
      if (!random) {
        const carro1 = new classCarro(...carros()[funcoesDeDefinicaoCarros[0]()])
        const carro2 = new classCarro(...carros()[funcoesDeDefinicaoCarros[1]()])
        const carro3 = new classCarro(...carros()[funcoesDeDefinicaoCarros[2]()])
        const carro4 = new classCarro(...carros()[funcoesDeDefinicaoCarros[3]()])
        const piloto1 = new classPiloto(...pilotos()[funcoesDeDefinicaoPilotos[0]()])
        const piloto2 = new classPiloto(...pilotos()[funcoesDeDefinicaoPilotos[1]()])
        const piloto3 = new classPiloto(...pilotos()[funcoesDeDefinicaoPilotos[2]()])
        const piloto4 = new classPiloto(...pilotos()[funcoesDeDefinicaoPilotos[3]()])
        const limit = document.querySelector('[limite]').value

        Corrida(carro1, carro2, carro3, carro4, piloto1, piloto2, piloto3, piloto4, limit <= 0? 2: limit)
      } else {
        const carro1 = new classCarro(...carros()[((carros().length - 1) - Math.random() * (carros().length - 1)).toFixed(0)])
        const carro2 = new classCarro(...carros()[((carros().length - 1) - Math.random() * (carros().length - 1)).toFixed(0)])
        const carro3 = new classCarro(...carros()[((carros().length - 1) - Math.random() * (carros().length - 1)).toFixed(0)])
        const carro4 = new classCarro(...carros()[((carros().length - 1) - Math.random() * (carros().length - 1)).toFixed(0)])
        const piloto1 = new classPiloto()
        const piloto2 = new classPiloto()
        const piloto3 = new classPiloto()
        const piloto4 = new classPiloto()
        const limit = (Math.random() * (10 - 2) + 2).toFixed(0)

        Corrida(carro1, carro2, carro3, carro4, piloto1, piloto2, piloto3, piloto4, limit <= 0? 2: limit)
      }
    }

    document.querySelector('[correr]').addEventListener('click', () => instanciar(false))
    document.querySelector('[aleatorio]').addEventListener('click', instanciar)
    document.querySelectorAll('.nitro').forEach(div => div.childNodes.forEach(span => span.style.opacity = '0'))

    function Corrida(carro1Param, carro2Param, carro3Param, carro4Param, piloto1Param, piloto2Param, piloto3Param, piloto4Param, distancia) {
        const limite = distancia

        const carro1 = carro1Param
        const carro2 = carro2Param
        const carro3 = carro3Param
        const carro4 = carro4Param

        let piloto1 = piloto1Param
        let piloto2 = piloto2Param
        let piloto3 = piloto3Param
        let piloto4 = piloto4Param

        let soltouTurbo1 = false
        let soltouTurbo2 = false
        let soltouTurbo3 = false
        let soltouTurbo4 = false

        let parar = false

        //======EVITANDO PILOTOS IGUAIS======\\
        while (piloto1.getNome() === piloto2.getNome() || piloto1.getNome() === piloto3.getNome() || piloto1.getNome() === piloto4.getNome() || piloto2.getNome() === piloto3.getNome() || piloto2.getNome() === piloto4.getNome() || piloto3.getNome() === piloto4.getNome()) {
          piloto1 = new classPiloto(...pilotos()[((pilotos().length - 1) - Math.random() * (pilotos().length - 1)).toFixed(0)])
          piloto2 = new classPiloto(...pilotos()[((pilotos().length - 1) - Math.random() * (pilotos().length - 1)).toFixed(0)])
          piloto3 = new classPiloto(...pilotos()[((pilotos().length - 1) - Math.random() * (pilotos().length - 1)).toFixed(0)])
          piloto4 = new classPiloto(...pilotos()[((pilotos().length - 1) - Math.random() * (pilotos().length - 1)).toFixed(0)])
        }
        const modelos = [carro1, carro2, carro3, carro4]
        const nomesPilotos = [piloto1, piloto2, piloto3, piloto4]
        informacoes()

        function conometro() {
          this.segundos = 0
          this.minutos = 0
          this.horas = 0
          this.allTime = 0

          this.setTempo = () => {
            this.allTime += 1
            if (this.segundos <= 60) this.segundos += 1
            if (this.segundos == 60) {
              this.minutos += 1
              this.segundos = 0
            }
            if (this.minutos == 60) {
              this.horas += 1
              this.minutos = 0
            }
          }

          this.getTempo = () => {
            return `${this.horas < 10? '0' + this.horas: this.horas}:${this.minutos < 10? '0' + this.minutos: this.minutos}:${this.segundos < 10? '0' + this.segundos: this.segundos}`
          }
        }

        let tempoAtual = 0

        const tempo = new conometro()

        //======FUNÇÃO QUE PARA A CORRIDA QUANDO TODOS TIVEREM CHEGADO AO LIMITE======\\
        let cf = 0
        let p = 4
        let f = 1
        let carro1f = false
        let carro2f = false
        let carro3f = false
        let carro4f = false
        function completude(carrosFinalizados, c = 0) {
          cf += carrosFinalizados
          if (cf === 10) {
            parar = true
            Reset()
          }
          switch (c) {
            case 1:
              carro1.setDistanciaPecorrida(p)
              changePosition(1, `${f}° ${piloto1.getNome()} [${carro1.getModelo()}] <span style='color: deeppink;'>100%</span> - ${tempo.getTempo()}`, f)
              carro1f = true
              f++
              --p
              break;
            case 2:
              carro2.setDistanciaPecorrida(p)
              changePosition(2, `${f}° ${piloto2.getNome()} [${carro2.getModelo()}] <span style='color: deeppink;'>100%</span> - ${tempo.getTempo()}`, f)
              carro2f = true
              f++
              --p
              break;
            case 3:
              carro3.setDistanciaPecorrida(p)
              changePosition(3, `${f}° ${piloto3.getNome()} [${carro3.getModelo()}] <span style='color: deeppink;'>100%</span> - ${tempo.getTempo()}`, f)
              carro3f = true
              f++
              --p
              break;
            case 4:
              carro4.setDistanciaPecorrida(p)
              changePosition(4, `${f}° ${piloto4.getNome()} [${carro4.getModelo()}] <span style='color: deeppink;'>100%</span> - ${tempo.getTempo()}`, f)
              carro4f = true
              f++
              --p;
          }
        }
        //======FIM FUNÇÃO COMPLETUDE======\\

        //======FUNÇÃO QUE MOSTRA A POSIÇÃO DOS CARROS NO PLACAR======\\
        function changePosition(carro, string, posicao) {
          document.querySelector(`[carro${carro}]`).innerHTML = string
          document.querySelector(`[carro${carro}]`).className = `posicao${posicao}`
        }
        let minhaPosicao = function (distancia = 0, eu = 1) {
          let minhaPosicaoAgr = 4
          switch (eu) {
            case 1:
              if (!carro2f) {
                if (distancia > carro2.getDistanciaPecorrida()) {
                  minhaPosicaoAgr--
                }
              }
              if (!carro3f) {
                if (distancia > carro3.getDistanciaPecorrida()) {
                    minhaPosicaoAgr--
                }
              }
              if (!carro4f) {
                if (distancia > carro4.getDistanciaPecorrida()) {
                    minhaPosicaoAgr--
                }
              }
              changePosition(1, `${minhaPosicaoAgr}° ${piloto1.getNome()} [${carro1.getModelo()}] <span>${(carro1.getDistanciaPecorrida() * 100 / limite).toFixed(0)}%</span> - ${(carro1.getVelocidadeAtual()).toFixed(0)} km/h`, minhaPosicaoAgr)
              break;
            case 2:
              if (!carro1f) {
                if (distancia > carro1.getDistanciaPecorrida()) {
                    minhaPosicaoAgr--
                }
              }
              if (!carro3f) {
                if (distancia > carro3.getDistanciaPecorrida()) {
                    minhaPosicaoAgr--
                }
              }
              if (!carro4f) {
                if (distancia > carro4.getDistanciaPecorrida()) {
                    minhaPosicaoAgr--
                }
              }
              changePosition(2, `${minhaPosicaoAgr}° ${piloto2.getNome()} [${carro2.getModelo()}] <span>${(carro2.getDistanciaPecorrida() * 100 / limite).toFixed(0)}%</span> - ${(carro2.getVelocidadeAtual()).toFixed(0)} km/h`, minhaPosicaoAgr)
              break;
            case 3:
              if (!carro1f) {
                if (distancia > carro1.getDistanciaPecorrida()) {
                    minhaPosicaoAgr--
                }
              }
              if (!carro2f) {
                if (distancia > carro2.getDistanciaPecorrida()) {
                    minhaPosicaoAgr--
                }
              }
              if (!carro4f) {
                if (distancia > carro4.getDistanciaPecorrida()) {
                    minhaPosicaoAgr--
                }
              }
              changePosition(3, `${minhaPosicaoAgr}° ${piloto3.getNome()} [${carro3.getModelo()}] <span>${(carro3.getDistanciaPecorrida() * 100 / limite).toFixed(0)}%</span> - ${(carro3.getVelocidadeAtual()).toFixed(0)} km/h`, minhaPosicaoAgr)
              break;
            case 4:
              if (!carro1f) {
                if (distancia > carro1.getDistanciaPecorrida()) {
                    minhaPosicaoAgr--
                }
              }
              if (!carro2f) {
                if (distancia > carro2.getDistanciaPecorrida()) {
                    minhaPosicaoAgr--
                }
              }
              if (!carro3f) {
                if (distancia > carro3.getDistanciaPecorrida()) {
                    minhaPosicaoAgr--
                }
              }
              changePosition(4, `${minhaPosicaoAgr}° ${piloto4.getNome()} [${carro4.getModelo()}] <span>${(carro4.getDistanciaPecorrida() * 100 / limite).toFixed(0)}%</span> - ${(carro4.getVelocidadeAtual()).toFixed(0)} km/h`, minhaPosicaoAgr)
            }
        }

        //=====FUNCAO QUE EXECUTA O SOM NA HORA DO NITRO=====\\
        function somNitro(carro) {
            document.getElementById(`nitro${carro}`).innerHTML = "<audio autoplay><source src='som/nitro.mp3' type='audio/ogg'></audio>"
        }
        //=====FIM SOM DO NITRO======\\

        //======FOR EVITANDO QUE O PONTEIRO FIQUE DISREGULADO=====\\
        for (let c = 1; c <= 4; c++) {
            document.querySelector(`#ponteiro${c} img`).style.transform = 'translate(0px, 0px) rotate(0deg)'
        }
        //======FIM DO FOR======\\

        //======FUNÇÃO PARA MOSTRAR AS INFORMAÇÕES NO HTML======\\
        function informacoes() {
          const corCategorias = {
            c: 'linear-gradient(100deg, rgba(7, 134, 9, .4), rgb(7, 134, 9), rgba(7, 134, 9, .4))',
            // verde
            r: 'linear-gradient(100deg, rgba(33, 52, 167, 0.59), rgb(33, 52, 167), rgba(33, 52, 167, 0.59))',
            // azul
            s: 'linear-gradient(100deg, rgba(72, 79, 84, 0.62), rgb(72, 79, 84), rgba(72, 79, 84, 0.62))',
            // cinza
            ss: 'linear-gradient(100deg, rgba(79, 31, 134, 0.69), rgb(79, 31, 134), rgba(79, 31, 134, 0.69))',
            // roxo
            a: 'linear-gradient(100deg, rgba(0,0,0, .6), rgb(0,0,0), rgba(0,0,0, .6))'
            // preto
          }

          nomesPilotos.forEach((piloto, index) => {
            //Mostrando os pilotos
            document.getElementById(`piloto${index + 1}`).innerHTML = `${piloto.getNome()} nvl°${piloto.getHabilidade()}`
          })

          modelos.forEach((carro, index) => {

            //Mostrando os modelos
            document.getElementById(`modelo${index + 1}`).innerHTML = `${carro.getModelo()} <span><i class="fas fa-eye"></i></span>`

            //Mostrando categorias
            document.getElementById(`categoria${index + 1}`).innerHTML = `[${carro.getCategoriaFormatada()}]`
            document.getElementById(`categoria${index + 1}`).style.background = corCategorias[carro.getCategoriaFormatada().toLowerCase()]

            //Setanco configurações defaults
            document.getElementById(`distancia${index + 1}`).innerHTML = `${(carro.getDistanciaPecorrida()).toFixed(3)} km`

            // info rápida
            document.querySelector(`[info-rapida-velocidade${index + 1}]`).innerHTML = `Vel. max.: ${carro.getVelocidade()} km/h`
            document.querySelector(`[info-rapida-aceleracao${index + 1}]`).innerHTML = `Aceleração: ${carro.getDelta()}`
            document.querySelector(`[info-rapida-resistencia${index + 1}]`).innerHTML = `Resistência: ${carro.getQualidade()}`
            document.querySelector(`[info-rapida-turbo${index + 1}]`).innerHTML = `Turbo: ${carro.getNitro()}`
            document.querySelector(`[info-rapida-forca${index + 1}]`).innerHTML = `Força: ${carro.getCategoria()}`
          })
          document.querySelectorAll('.barras-nitros').forEach((span, index) =>{
            span.style.height = '100%'
            document.querySelector(`[chama${index + 1}]`).style.display = 'none'
          })

          document.querySelectorAll('.grau span').forEach(tag =>tag.style.width = '0%')
          document.querySelectorAll('.nitro').forEach(tag =>tag.style.display = 'none')

          //Mostrando limite no lugar do botão de parar(em outra função o botão aparece ao lado do limite), tirando um botão e um input
          document.querySelector('[distancia]').innerHTML = `${limite} km`
        }
        //======FIM DA FUNÇÃO DE INFORMAÇÕES======\\

        // Efeito de mostrar as informções rápidas do carro
        efeitoInfoDoCarro(true)

        const runs = []
        const turbos = [soltouTurbo1, soltouTurbo2, soltouTurbo3, soltouTurbo4]

        modelos.forEach((carro, index) => {
          //======FUNÇÕES PRINCIPAIS======\\
          runs.push(() => {
            carro.acelerar()
            if (!turbos[index]){
              if (carro.getBtnNitro()) {
                  somNitro(index + 1)
                  turbos[index] = true
              }
            }
            if (carro.getCilindro()) carro.turbo()
            document.getElementById(`distancia${index + 1}`).innerHTML = `${(carro.getDistanciaPecorrida()).toFixed(3)} km`
            minhaPosicao(carro.getDistanciaPecorrida(), index + 1)
            document.querySelectorAll(`.aproveitamento${index + 1}`).forEach(area =>area.style.background = `linear-gradient(to bottom, #909090, rgb(255, ${carro.getAproveitamento()}, ${carro.getAproveitamento()}))`)
            document.querySelector(`#ponteiro${index + 1} img`).style.transform = `translate(0px, 0px) rotate(${carro.getVelocidadeAtual() * 180 / (carro.getVelocidade() * (carro.getMarcha() * 20) / 100)}deg)`
            document.getElementById(`velocidade${index + 1}`).innerHTML = `${(carro.getVelocidadeAtual()).toFixed(0)} km/h`
            document.getElementById(`quebra${index + 1}`).innerHTML = `${(100 * carro.getResistencia() / carro.getQualidade()).toFixed(0)}%`
            document.getElementById(`cambio${index + 1}`).src = `imagens/importantes/cambio_${carro.getMarcha()}.png`
            document.querySelector(`#grau${index + 1} span`).style.width = `${(carro.getDistanciaPecorrida() * 100 / limite).toFixed(0)}%`
            if (carro.getCilindro() === true && carro.getBtnNitro() === false) {
              document.querySelector(`[nitro${index + 1}]`).style.height = `${100 - 100 * carro.getTanque() / carro.getNitro()}%`
              document.querySelector(`[nitro${index + 1}]`).style.background = `linear-gradient(to bottom, #909090, rgb(255, ${carro.getAproveitamento()}, ${carro.getAproveitamento()}))`
            } else if (carro.getBtnNitro() === true && carro.getTanque() <= (carro.getNitro() / 4 + carro.getNitro()) && carro.getCilindro() === true) {
              document.querySelector(`[nitro${index + 1}]`).style.height = `${0 + 100 * (carro.getTanque() - carro.getNitro()) / (carro.getNitro() / 4)}%`
              document.querySelector(`[nitro${index + 1}]`).style.background = `linear-gradient(to bottom, #909090, rgb(255, ${carro.getAproveitamento()}, ${carro.getAproveitamento()}))`
              document.querySelector(`[chama${index + 1}]`).style.display = 'block'
            } else if (carro.getCilindro() === false) {
              document.querySelector(`[chama${index + 1}]`).style.display = 'none'
              document.getElementById(`div-nitro${index + 1}`).style.display = 'none'
            }
            if (carro.getDistanciaPecorrida() <= limite) {
              if (parar != true) {
                window.requestAnimationFrame(runs[index])
              }
            } else {
              completude(index + 1, index + 1)
            }
          })
          //======FIM FUNÇÕES PRINCIPAIS======\\
        })

        //======CRIANDO UMA INICIALIZAÇÃO ALEATÓRIA======\\

        //======Vetores com as informações necessária pra cada inicialização======\\
        //======[musica, mostrar botão, primeira tabela, segunda, terceira, quarta, tempo da primeira, segunda, terceira, quarta, se necessita piscar alguma tabela, tempo pra isso]======\\

        const start1 = [1, 22000, 19800, 1, 4, 2, 3, 1200, 10300, 14200, 18000, false, 0]
        const start2 = [2, 29000, 26000, 2, 3, 1, 4, 3000, 5900, 14000, 21500, false, 0]
        const start3 = [3, 33000, 30000, 2, 3, 4, 1, 1900, 11000, 20700, 27000, false, 0]
        const start4 = [4, 39000, 36000, 4, 1, 3, 2, 2000, 11000, 24400, 31000, true, 18800]
        const starts = [start1, start2, start3, start4]
        let inicioPiloto = 0

        preparacaoCorrida(...starts[(Math.random() * (starts.length - 1) + 0).toFixed(0)])

        //======Função que faz a preparação dos carros (efeitos)======\\
        function preparacaoCorrida(music, showBtn, runCarros, ordem1, ordem2, ordem3, ordem4, runTable1, runTable2, runTable3, runTable4, treme, timeTremer) {
          //======FUNÇÃO DE MEXER O PONTEIRO=====\\
          let arranque = false
          let pronto = false
          let start = 0
          let me = ''
          function zerar() {
            arranque = false
            pronto = false
            start = 0
          }
          function minhaVez(meParam) {
            me = meParam
            document.querySelector(`#div-nitro${me}`).style.display = 'block'
            document.querySelector(`[nitro${me}]`).style.background = `linear-gradient(to bottom, #909090, rgb(255, 255, 255), rgb(255, 255, 255))`
            document.getElementById(`velocidade${me}`).innerHTML = '0 km/h'
            document.getElementById(`quebra${me}`).innerHTML = '0%'
            document.getElementById(`cambio${me}`).src = 'imagens/importantes/cambio_morto.png'
            document.querySelectorAll(`.aproveitamento${me}`).forEach(area => area.style.background = 'linear-gradient(to bottom, #909090, white)')
          }
          function efeitoVelocimetro() {
            document.querySelector(`#ponteiro${me} img`).style.transform = `translate(0px, 0px) rotate(${start}deg)`
            if (start < 180 && arranque === false) {
              start += 20
            } else {
              arranque = true
            }
            if (start == 1) {
              pronto = true
            } else {
              start--
            }
            if (pronto === false) {
              window.requestAnimationFrame(efeitoVelocimetro)
            } else {
              zerar()
            }
          }
          //======FIM FUNÇÃO DO PONTEIRO======\\
          inicioPiloto = runCarros
          document.getElementById('musica').innerHTML = `<audio autoplay='true'><source id='src_musica' src='som/corrida${music}.mp3' type='audio/ogg'></audio>`
          setTimeout(() => {
            document.querySelector('[parar]').classList.remove('desabilitado')
            document.querySelector('[parar]').addEventListener('click', stop)
          }, showBtn)
          for (let set = 0; set < 4; set++) {
            setTimeout(runs[set], runCarros)
          }
          setTimeout(() =>{
            tempoAtual = setInterval(() =>{
              tempo.setTempo()
              document.querySelector('[tempo]').innerHTML = tempo.getTempo()
            }, 1000)
          }, runCarros)

          setTimeout(() => {
            minhaVez(ordem1)
            efeitoVelocimetro()
          }, runTable1)
          setTimeout(() => {
            minhaVez(ordem2)
            efeitoVelocimetro()
          }, runTable2)
          if (treme) {
            setTimeout(() => {
              let timePiscando = 0
              let piscar = true
              function piscandoFunction() {
                document.querySelectorAll(`.aproveitamento${ordem3}`).forEach(div => div.classList.toggle('ligar'))
                timePiscando++
                if (timePiscando === 270) {
                  piscar = false
                  document.querySelectorAll(`.aproveitamento${ordem3}`).forEach(div => div.classList.remove('ligar'))
                }
                if (piscar === true) {
                  setTimeout(piscandoFunction, 100)
                }
              }
              piscandoFunction()
            }, timeTremer)
          }
          setTimeout(() => {
            minhaVez(ordem3)
            efeitoVelocimetro()
          }, runTable3)
          setTimeout(() => {
            minhaVez(ordem4)
            efeitoVelocimetro()
          }, runTable4)
        }
        //======FIM DA CRIAÇÃO DE INICIALIZAÇÃO ALEATÓRIA======\\

        //======SCRIPT DE FREAR O CARRO NUM TEMPO DETERMINADO PELA HABILIDADE DO PILOTO======\\
        setTimeout(() => {
          const freios = []
          for (let f = 0; f < 4; f++) {
            freios.push(setInterval(() =>{
              modelos[f].frear()
              pararDeFreiar()
            }, nomesPilotos[f].getHabilidade() * 500))
          }
          function pararDeFreiar() {
            if (parar) {
              freios.forEach(temporizador => {
                clearInterval(temporizador)
              })
            }
          }
        }, inicioPiloto)
        //======FIM SCRIPT DE FREAR O CARRO======\\

        function Reset() {
          clearInterval(tempoAtual)
          document.getElementById('musica').innerHTML = "<audio autoplay='true'><source id='src_musica' src='som/fimCorrida.mp3' type='audio/ogg'></audio>";
          setTimeout(() => {
            document.getElementById('musica').innerHTML = "<audio autoplay='true' loop='true'><source src='som/fundo-nfsu1.mp3' type='audio/ogg'></audio>"

            document.querySelectorAll('[area-select]').forEach(area => area.style.display = 'table-cell')
            document.querySelectorAll('.principal table').forEach(table => table.style.height = '194px')

            document.querySelector('[parar]').classList.add('desabilitado')
            document.querySelector('[correr]').classList.remove('desabilitado')
            document.querySelector('[aleatorio]').classList.remove('desabilitado')
            document.querySelector('[limite]').classList.remove('desabilitado')
          }, 2000)
        }

    function stop() {
        parar = true
        clearInterval(tempoAtual)
        efeitoInfoDoCarro(false)
        document.querySelector('[tempo]').innerHTML = '00:00:00'
        document.getElementById('musica').innerHTML = "<audio autoplay='true'><source id='src_musica' src='som/pararBatendo.mp3' type='audio/ogg'></audio>"
        setTimeout(() => {
          document.getElementById('musica').innerHTML = "<audio autoplay='true' loop='true'><source src='som/musica-fundo.mp3' type='audio/ogg'></audio>"
          document.querySelectorAll('[apresentacao-slide]').forEach(span => span.style.top = '40%')
          document.querySelector('[distancia]').innerHTML = ''
          document.querySelectorAll('.aproveitamento').forEach(area =>area.style.background = ``)
          document.querySelectorAll('.div-ponteiro').forEach(div => div.childNodes[0].style.transform = 'translate(0px, 0px) rotate(0deg)')
          document.querySelectorAll('.grau span').forEach(tag =>tag.style.width = '0%')
          document.querySelectorAll('.nitro').forEach(tag =>tag.style.display = 'none')
          document.querySelectorAll('.categoria').forEach(tag => {
            tag.innerHTML = ''
            tag.style.background = 'transparent'
          })
          document.querySelectorAll('.velocidade').forEach(tag => tag.innerHTML = '')
          document.querySelectorAll('.td-nome').forEach(td => td.innerHTML = '')
          document.querySelectorAll('[td-base]').forEach(td => td.innerHTML = '')
          document.querySelectorAll('[area-select]').forEach(area => area.style.display = 'table-cell')
          document.querySelectorAll('.principal table').forEach(table => table.style.height = '148px')

          document.querySelectorAll('#placar p ').forEach(p =>p.innerHTML = '')
          document.querySelectorAll('.cambio').forEach(img => img.src = 'imagens/importantes/cambio_desligado.png')
          document.querySelectorAll('.quebra').forEach(tag => tag.innerHTML = '')

          document.querySelector('[parar]').classList.add('desabilitado')
          document.querySelector('[correr]').classList.remove('desabilitado')
          document.querySelector('[aleatorio]').classList.remove('desabilitado')
          document.querySelector('[limite]').classList.remove('desabilitado')
        }, 2000)
      }
    }
  })
