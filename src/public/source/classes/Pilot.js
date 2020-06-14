export default class Pilot {
    constructor({ src = '', habilidade = 0, nacionalidade = '', sexo = 'M', nome = 'nulo' }) {
        this.nome = nome;
        this.src = src;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
        this.habilidade = habilidade;
    }
    get getNome() {
        return this.nome;
    }
    get getSexo() {
        return this.sexo;
    }
    get getNacionalidade() {
        return this.nacionalidade;
    }
    get getHabilidade() {
        return this.habilidade;
    }
    get getSrc() {
        return this.src;
    }
}
