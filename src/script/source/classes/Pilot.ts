export type TSexo = 'M' | 'F'

export interface IPilot {
  nome?: string,
  sexo?: TSexo,
  nacionalidade?: string,
  habilidade?: number,
  src?: string
}

export default class Pilot {
  private nome: string
  private sexo: TSexo
  private nacionalidade: string
  private habilidade: number
  private src: string

  constructor({ src = '', habilidade = 0, nacionalidade = '', sexo = 'M', nome = 'nulo' }: IPilot) {
    this.nome = nome
    this.src = src
    this.sexo = sexo
    this.nacionalidade = nacionalidade
    this.habilidade = habilidade
  }

  get getNome() {
    return this.nome
  }
  get getSexo() {
    return this.sexo
  }
  get getNacionalidade() {
    return this.nacionalidade
  }
  get getHabilidade() {
    return this.habilidade
  }
  get getSrc() {
    return this.src
  }
}

