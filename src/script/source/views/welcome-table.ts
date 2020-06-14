export default function(): Promise<void> {
  return new Promise((resolve) => {
    const data =  new Date()
    let html = `
      <div id="lideres">
        <div class='titulo-lideranca'>
          <span tempo>00:00:00</span>
          <i class="fas fa-car-alt"></i> <i class="fas fa-car-crash"></i> &nbsp
          <span class='span-liderea'>Lideres</span> &nbsp
          <i class="fas fa-car-alt"></i> &nbsp <i class="fas fa-car-alt"></i>
          <span distancia></span>
        </div>
        <div class='liderancas' id="placar">
      `
    for (let p = 1; p <= 4; p++) {
      html += placar(p)
    }
    html += `<span apresentacao-slide>Bem-vindo(a)</span>`
    html += '<span apresentacao-slide>Criado por Maycon Silva</span>'
    if (data.getHours() < 12) {
      html += `<span apresentacao-slide>Tenha um bom dia!</span>`
    } else if (data.getHours() < 18) {
      html += `<span apresentacao-slide>Tenha uma boa tarde!</span>`
    } else {
      html += `<span apresentacao-slide>Tenha uma boa noite!</span>`
    }
    html += `<span apresentacao-slide>${data.getDate() < 10? '0' + data.getDate(): data.getDate()}/${data.getMonth() + 1 < 10? '0' + (data.getMonth() + 1): (data.getMonth() + 1)}/${data.getFullYear()}</span>`
    html += '</div></div>'

    document.querySelector('.area-placar').innerHTML = html

    resolve()
  })
}

function placar(chave: number) {
  return `<p carro${chave} class='posicao${chave}'></p>`
}
