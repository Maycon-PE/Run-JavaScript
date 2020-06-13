
export interface ICar {
  modelo: string,
  velocidade: number,
  delta: number,
  qualidade: number,
  nitro: number,
  categoria?: 'C' | 'R' | 'S' | 'SS' | 'A',
  forca?: number
}

export default class Car {
  private __numero_magico__: number

  readonly modelo: string
  readonly velocidade: number
  readonly delta: number
  readonly qualidade: number
  readonly nitro: number
  readonly forca: number
  readonly categoria: 'C' | 'R' | 'S' | 'SS' | 'A'

  private resitencia: number
  private freio: number
  private marcha: 0 | 1 | 2 | 3 | 4 | 5
  private arranque: number 
  private velocidade_atual: number
  private tanque: number
  private btn_nitro: Boolean
  private cilindro: Boolean
  private pre_turbo: number
  private aproveitamento: number
  private distancia_pecorrida: number  

  constructor({ modelo, delta, velocidade, qualidade, nitro, forca, categoria }: ICar) {
    this.__numero_magico__ = 0.166666666

    this.modelo = modelo
    this.velocidade = velocidade
    this.delta = delta
    this.qualidade = qualidade
    this.nitro = nitro
    this.forca = forca
    this.categoria = categoria

    this.resitencia = 0
    this.freio = 0
    this.marcha = 0
    this.arranque = 0
    this.velocidade_atual = 0
    this.tanque = 0
    this.pre_turbo = 0
    this.aproveitamento = 0
    this.distancia_pecorrida = 0

    this.btn_nitro = false
    this.cilindro = true
  }

  private marcha1() {
    return this.marcha === 1 && this.arranque === 0.02 && this.freio === 30 && (this.velocidade_atual <= this.velocidade * 20.9 / 100)
  }

  private marcha2() {
    return this.marcha === 2 && this.arranque === 0.007 && this.freio === 25 && (this.velocidade_atual <= this.velocidade * 40.9 / 100)
  }

  private marcha3() {
    return this.marcha === 3 && this.arranque === 0.003 && this.freio === 20 && (this.velocidade_atual <= this.velocidade * 60.9 / 100)
  }

  private marcha4() {
    return this.marcha === 4 && this.arranque === 0.0008 && this.freio === 15 && (this.velocidade_atual <= this.velocidade * 80.9 / 100)
  }

  private marcha5() {
    return this.marcha === 5 && this.arranque === 0.0003 && this.freio === 10
  }

  private quebrar() {
    this.velocidade_atual = (this.velocidade * 70 / 100)
  }

  private turbo() {
    // if (this.tanque <= this.nitro)
    //   this.tanque += this.__numero_magico__

    if (this.velocidade_atual < this.velocidade) {
      if (!this.btn_nitro && this.cilindro) {
        if (this.tanque >= this.nitro) {
          this.btn_nitro = true
          this.pre_turbo = this.velocidade_atual
        }
      } else if (this.btn_nitro && this.tanque <= this.nitro / 4 + this.nitro && this.cilindro) {
        this.tanque += this.__numero_magico__
        this.start((this.velocidade / this.marcha) / this.velocidade)
      } else {
        this.cilindro = false
        this.tanque = this.nitro
        this.btn_nitro = false
      }
    } 
  }

  start(turbo: number | undefined = this.arranque * this.delta / 2) {
    const trocaDeMarcha = () => {

      if (!this.marcha1()) {
        this.marcha = 1
        this.arranque = 0.02
        this.freio = 30

        return
      } 

      if (!this.marcha2()) {
        this.marcha = 2
        this.arranque = 0.007
        this.freio = 25

        return
      }

      if (!this.marcha3()) {
        this.marcha = 3
        this.arranque = 0.003
        this.freio = 20

        return
      }

      if (!this.marcha4()) {
        this.marcha = 4
        this.arranque = 0.0008
        this.freio = 15

        return
      }

      if (!this.marcha5()) {
        this.marcha = 5
        this.arranque = 0.0003
        this.freio = 10
      }
    }

    const acelerar = () => {
      if (this.velocidade_atual + (0.02 * this.delta / 2) <= this.velocidade) {
        this.velocidade_atual += turbo
      } else {
        if (this.velocidade_atual !== this.velocidade) this.velocidade_atual = this.velocidade

        this.resitencia += this.__numero_magico__ * 3600 / 3600
        if (this.resitencia >= this.qualidade) {
          this.resitencia = 0
          this.quebrar()
        }
      }
    }

    const status = () => {
      this.aproveitamento = 600 - 600 * this.velocidade_atual / this.velocidade
      this.distancia_pecorrida += this.velocidade / 59 / 3481
    }
    acelerar()
    status()

    if (this.marcha < 5)  trocaDeMarcha()
  }

  get distanciaPecorrida(): string {
    return this.distancia_pecorrida + ' km/h'
  }

}
