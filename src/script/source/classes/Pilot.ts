export type TSexo = 'M' | 'F'

export interface IPilot {
  nome: string,
  sexo: TSexo,
  nacionalidade: string,
  habilidade: number,
  src: string
}

export default class Pilot {
  readonly nome: string
  readonly sexo: TSexo
  readonly nacionalidade: string
  readonly habilidade: number
  readonly src: string

  constructor({ src, habilidade, nacionalidade, sexo, nome }: IPilot) {
    this.nome = nome
    this.src = src
    this.sexo = sexo
    this.nacionalidade = nacionalidade
    this.habilidade = habilidade
  }
}

