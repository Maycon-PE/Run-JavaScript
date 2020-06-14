export default class Car {
    constructor({ modelo, delta, velocidade, qualidade, nitro, forca, categoria }) {
        this.__numero_magico__ = 0.166666666;
        this.modelo = modelo;
        this.velocidade = velocidade;
        this.delta = delta;
        this.qualidade = qualidade;
        this.nitro = nitro;
        this.forca = forca;
        this.categoria = categoria;
        this.resitencia = 0;
        this.freio = 0;
        this.marcha = 0;
        this.arranque = 0;
        this.velocidade_atual = 0;
        this.tanque = 0;
        this.pre_turbo = 0;
        this.aproveitamento = 0;
        this.distancia_pecorrida = 0;
        this.btn_nitro = false;
        this.cilindro = true;
        this.soltando_nitro = false;
    }
    marcha1() {
        return (this.velocidade_atual <= this.velocidade * 20.9 / 100) ? () => {
            if (this.marcha === 1)
                return;
            this.arranque = 0.02;
            this.freio = 30;
            this.marcha = 1;
        } : undefined;
    }
    marcha2() {
        return (this.velocidade_atual <= this.velocidade * 40.9 / 100) ? () => {
            if (this.marcha === 2)
                return;
            this.arranque = 0.007;
            this.freio = 25;
            this.marcha = 2;
        } : undefined;
    }
    marcha3() {
        return (this.velocidade_atual <= this.velocidade * 60.9 / 100) ? () => {
            if (this.marcha === 3)
                return;
            this.arranque = 0.003;
            this.freio = 20;
            this.marcha = 3;
        } : undefined;
    }
    marcha4() {
        return (this.velocidade_atual <= this.velocidade * 80.9 / 100) ? () => {
            if (this.marcha === 4)
                return;
            this.arranque = 0.0008;
            this.freio = 15;
            this.marcha = 4;
        } : undefined;
    }
    marcha5() {
        this.arranque = 0.0003;
        this.freio = 10;
        this.marcha = 5;
    }
    quebrar() {
        const nova_velocidade = (this.velocidade * 50 / 100);
        this.velocidade_atual = nova_velocidade <= 1 ? 1 : nova_velocidade;
    }
    frear() {
        const nova_velocidade = this.velocidade_atual - this.freio;
        this.velocidade_atual = nova_velocidade <= 1 ? 1 : nova_velocidade;
    }
    turbo() {
    }
    correr(turbo = this.arranque * (this.delta / 2)) {
        const trocaDeMarcha = () => {
            if (this.marcha1())
                return this.marcha1()();
            if (this.marcha2())
                return this.marcha2()();
            if (this.marcha3())
                return this.marcha3()();
            if (this.marcha4())
                return this.marcha4()();
            if (this.marcha !== 5)
                this.marcha5();
        };
        const encherTanque = (cb) => {
            if (this.tanque <= this.nitro)
                this.tanque += .02;
            if (this.velocidade_atual < this.velocidade) {
                if (!this.btn_nitro && this.cilindro) {
                    if (this.tanque >= this.nitro) {
                        this.btn_nitro = true;
                        this.pre_turbo = this.velocidade_atual;
                    }
                }
                else if (this.btn_nitro && this.tanque <= this.nitro / 3 + this.nitro && this.cilindro) {
                    this.soltando_nitro = true;
                    this.tanque += .009;
                    turbo = ((this.velocidade_atual * 2) / this.marcha) / this.pre_turbo;
                }
                else {
                    this.soltando_nitro = false;
                    this.cilindro = false;
                    this.tanque = this.nitro;
                    this.btn_nitro = false;
                }
            }
            cb(turbo);
        };
        const acelerar = (v) => {
            if (this.velocidade_atual + (0.02 * this.delta / 2) <= this.velocidade) {
                this.velocidade_atual += v;
            }
            else {
                if (this.velocidade_atual !== this.velocidade)
                    this.velocidade_atual = this.velocidade;
                this.resitencia += this.__numero_magico__ * 3600 / 3600;
                if (this.resitencia >= this.qualidade) {
                    this.resitencia = 0;
                    this.quebrar();
                }
            }
        };
        const status = () => {
            this.aproveitamento = 600 - 600 * this.velocidade_atual / this.velocidade;
            this.distancia_pecorrida += this.velocidade_atual / 59 / 3481;
        };
        encherTanque(acelerar);
        status();
        if (this.marcha < 5)
            trocaDeMarcha();
    }
    get distanciaPecorrida() {
        return this.distancia_pecorrida + ' km/h';
    }
    set setDistanciaPecorrida(v) {
        this.distancia_pecorrida = v;
    }
    get getVelocidadeAtual() {
        return this.velocidade_atual;
    }
    get getTanque() {
        return this.tanque;
    }
    get getResistencia() {
        return this.resitencia;
    }
    get getMarcha() {
        return this.marcha;
    }
    get getAproveitamento() {
        return this.aproveitamento;
    }
    get getBtnNitro() {
        return this.btn_nitro;
    }
    get getCilindro() {
        return this.cilindro;
    }
    get getDistanciaPecorrida() {
        return this.distancia_pecorrida;
    }
    get getNitro() {
        return this.nitro;
    }
    get getSoltandoNitro() {
        return this.soltando_nitro;
    }
}
