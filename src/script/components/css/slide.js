function move(elemento, inicio, fim, passo, callback) {
  const novoInicio = inicio - passo
  if (novoInicio > fim) {
    elemento.style.left = `${novoInicio}px`
    setTimeout(() => move(elemento, novoInicio, fim, passo, callback), 7)
  } else {
    callback()
  }
}

export default function slide() {
  const nodeList = document.querySelectorAll('[apresentacao-slide]')
  const spans = Array.from(nodeList)

  exibirSlider(spans, spans[0])
}

function exibirSlider(spans, spanAtual) {
  spanAtual.style.display = 'block'
  const inicio = document.getElementById('lideres').clientWidth + 20
  const fim = -spanAtual.clientWidth

  move(spanAtual, inicio, fim, 1, () => {
    spanAtual.style.display = 'none'
    exibirSlider(spans, getProximo(spans, spanAtual))
  })
}

function getProximo(spans, spanAtual) {
  const proximoSpan = spans.indexOf(spanAtual) + 1

  if (proximoSpan < spans.length) {
    return spans[proximoSpan]
  } else {
    return spans[0]
  }
}
