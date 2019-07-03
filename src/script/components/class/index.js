//======CLASS CARRO======\\
export const carro = () => {
    class Carro {
        constructor(modeloParam = undefined, velocidadeMax = 200, deltaParam = 5, qualidadeParam = 0, nitroParam = 5) {
            //======Atributos principais======\\
            this.modelo = modeloParam
            this.velocidade = velocidadeMax
            this.delta = deltaParam
            this.qualidade = qualidadeParam
            this.nitro = nitroParam
            //======Atributos extras======\\
            this.resistencia = 0
            this.freio = 10
            this.marcha = 1
            this.arranque = 0.02
            this.velocidadeAtual = 0
            this.tanque = 0
            this.btnNitro = false
            this.cilindro = true
            this.preTurbo = 0
            this.aproveitamento = 0
            this.distanciaPecorrida = 0.000
            this.categoria = this.velocidade + (this.delta / 2) + (this.qualidade * 2) + (this.nitro * 4)
            this.categoriaFormatado = 'N'
        }

        //======Métodos======\\
        acelerar(turbo = this.getArranque() * this.getDelta() / 2) {
            if (this.getVelocidadeAtual() <= this.getVelocidade() * 20.9 / 100) {
                this.setMarcha(1)
                this.setArranque(0.02)
                this.setFreio(30)
            } else if (this.getVelocidadeAtual() <= this.getVelocidade() * 40.9 / 100) {
                this.setMarcha(2)
                this.setFreio(25)
                this.setArranque(0.007)
            } else if (this.getVelocidadeAtual() <= this.getVelocidade() * 60.9 / 100) {
                this.setMarcha(3)
                this.setFreio(20)
                this.setArranque(0.003)
            } else if (this.getVelocidadeAtual() <= this.getVelocidade() * 80.9 / 100) {
                this.setMarcha(4)
                this.setFreio(15)
                this.setArranque(0.0008)
            } else {
                this.setMarcha(5)
                this.setFreio(10)
                this.setArranque(0.0003)
            }
            if (this.getVelocidadeAtual() + (0.02 * this.getDelta() / 2) <= this.getVelocidade()) {
                this.setVelocidadeAtual(this.getVelocidadeAtual() + turbo)
            } else {
                this.setVelocidadeAtual(this.getVelocidade())
                this.setResistencia(this.getResistencia() + 0.0166666666 * 3600 / 3600)
                if (this.getResistencia() >= this.getQualidade()) {
                    this.setResistencia(0)
                    this.quebra()
                }
            }
            this.setAproveitamento(600 - 600 * this.getVelocidadeAtual() / this.getVelocidade())
            this.setDistanciaPecorrida(this.getDistanciaPecorrida() + (this.getVelocidadeAtual() / 59 / 3481))
        }

        quebra() {
            this.setVelocidadeAtual(this.getVelocidade() * 70 / 100)
        }

        frear() {
            this.setVelocidadeAtual(this.getVelocidadeAtual() - this.getFreio())
        }

        turbo() {
            if (this.getTanque() <= this.getNitro()) {
                this.setTanque(this.getTanque() + 0.0166666666)
            }
            if (this.getVelocidadeAtual() < this.getVelocidade()) {
                if (this.getBtnNitro() === false && this.getCilindro() === true) {
                    if (this.getTanque() >= this.getNitro()) {
                        this.setBtnNitro(true)
                        this.setPreTurbo(this.getVelocidadeAtual())
                    }
                } else if (this.getBtnNitro() === true && this.getTanque() <= this.getNitro() / 4 + this.getNitro() && this.getCilindro() === true) {
                    this.setTanque(this.getTanque() + 0.0166666666)
                    this.acelerar((this.getVelocidade() / this.getMarcha()) / this.getVelocidade())
                } else {
                    this.setCilindro(false)
                    this.getTanque(this.getNitro())
                    this.setBtnNitro(false)
                }
            }
        }

        //======Gets======\\
        getVelocidadeAtual() {
            return this.velocidadeAtual
        }
        getDistanciaPecorrida() {
            return this.distanciaPecorrida
        }
        getModelo() {
            return this.modelo
        }
        getVelocidade() {
            return this.velocidade
        }
        getDelta() {
            return this.delta
        }
        getQualidade() {
            return this.qualidade / 2
        }
        getNitro() {
            return this.nitro
        }
        getTanque() {
            return this.tanque
        }
        getBtnNitro() {
            return this.btnNitro
        }
        getCilindro() {
            return this.cilindro
        }
        getPreTurbo() {
            return this.preTurbo
        }
        getResistencia() {
            return this.resistencia
        }
        getFreio() {
            return this.freio
        }
        getMarcha() {
            return this.marcha
        }
        getArranque() {
            return this.arranque
        }
        getAproveitamento() {
            return this.aproveitamento
        }
        getCategoria() {
            return this.categoria
        }
        getCategoriaFormatada() {
            if (this.categoria < 400) {
                this.categoriaFormatado = 'C'
                return this.categoriaFormatado
            } else if (this.categoria < 500) {
                this.categoriaFormatado = 'R'
                return this.categoriaFormatado
            } else if (this.categoria < 590) {
                this.categoriaFormatado = 'S'
                return this.categoriaFormatado
            } else if (this.categoria < 620) {
                this.categoriaFormatado = 'SS'
                return this.categoriaFormatado
            } else {
                this.categoriaFormatado = 'A'
                return this.categoriaFormatado
            }
        }

        //======Sets======\\
        setVelocidadeAtual(va) {
            this.velocidadeAtual = va
        }
        setDistanciaPecorrida(d) {
            this.distanciaPecorrida = d
        }
        setModelo(m) {
            this.modelo = m
        }
        setVelocidade(v) {
            this.velocidade = v
        }
        setDelta(d) {
            this.delta = d
        }
        setQualidade(q) {
            this.qualidade = q
        }
        setNitro(n) {
            this.nitro = n
        }
        setTanque(t) {
            this.tanque = t
        }
        setBtnNitro(n) {
            this.btnNitro = n
        }
        setCilindro(c) {
            this.cilindro = c
        }
        setPreTurbo(p) {
            this.preTurbo = p
        }
        setResistencia(r) {
            this.resistencia = r
        }
        setFreio(f) {
            this.freio = f
        }
        setMarcha(m) {
            this.marcha = m
        }
        setArranque(ar) {
            this.arranque = ar
        }
        setAproveitamento(a) {
            this.aproveitamento = a
        }

    }

    return Carro
}
//======FIM CLASS CARRO======\\

//======CLASS PILOTO======\\
export const piloto = () => {
    class Piloto {
        constructor(nome = 'Num', sexo = 'Und', nacionalidade = 'Und', habilidade = 0, src = 'null') {
            //======Atributos======\\
            this.atributos = [nome, sexo, nacionalidade, habilidade, src]
        }
        //======Gets======\\
        getNome() {
            return this.atributos[0]
        }
        getSexo() {
            return this.atributos[1]
        }
        getNacionalidade() {
            return this.atributos[2]
        }
        getHabilidade() {
            return this.atributos[3]
        }
        getSrc() {
            return this.atributos[4]
        }
    }
    return Piloto
}
//======FIM CLASS PILOTO======\\
