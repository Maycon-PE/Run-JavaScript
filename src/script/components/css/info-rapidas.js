export default function efeitoInfoDoCarro(colocar = true) {
  if (colocar) {
    document.querySelectorAll('.nomes-modelos').forEach((td, index) =>{
      const span = [...td.childNodes]
      td.onmousemove = (e) => {
        span[1].style.color = 'green'
        document.querySelector(`[info-rapida-carro${index + 1}]`).style.display = 'block'
        document.querySelector(`[info-rapida-carro${index + 1}]`).style.left = `${e.clientX - (td.clientWidth / 2)}px`
        document.querySelector(`[info-rapida-carro${index + 1}]`).style.top = `${e.clientY + document.documentElement.scrollTop + 50}px`
      }
      td.onmouseleave = () => {
        span[1].style.color = 'red'
        document.querySelector(`[info-rapida-carro${index + 1}]`).style.display = 'none'
      }
    })
  } else {
    document.querySelectorAll('.nomes-modelos').forEach((td) =>{
      td.onmousemove = undefined
      td.onmouseleave = undefined
    })
  }
}
