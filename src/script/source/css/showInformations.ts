export default () => {
  const informationsElement: HTMLDivElement = document.querySelector('.lendo-informacoes')

  document.querySelector('.detalhes').addEventListener('click', () => {
    informationsElement.style.top = '0px'

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') informationsElement.style.top = '-200vh'
    })
  })

  document.querySelector('.sair-detalhes').addEventListener('click', () => {
    informationsElement.style.top = '-200vh'
  })

}