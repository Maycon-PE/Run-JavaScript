export default function showAndHideInfo() {
  document.querySelector('.detalhes').addEventListener('click', () => {
    document.querySelector('.lendo-informacoes').style.top = '0px'
  })

  document.querySelectorAll('.sair-detalhes').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.lendo-informacoes').style.top = '-200vh'
    })
  })
}
