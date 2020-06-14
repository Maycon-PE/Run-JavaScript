//======CONSTANTES CONTENDO AS INFORMAÇÕES NECESSARIAS PARA O INSTÂNCIAMENTO DA CLASS CARRO DENTRO DA FUNCTION CORRIDA()======\\
export function cars() {
    // Nome, velocidade máxima, aceleração, resistência, turbo
    const Peogeot = { modelo: 'Peogeot', velocidade: 212, delta: 160, qualidade: 20, nitro: 5 };
    const Mustang = { modelo: 'Mustang', velocidade: 307, delta: 200, qualidade: 40, nitro: 8 };
    const Golf = { modelo: 'Golf', velocidade: 200, delta: 109, qualidade: 20, nitro: 7 };
    const Brasilia = { modelo: 'Brasília', velocidade: 199, delta: 99, qualidade: 10, nitro: 16 };
    const Uno = { modelo: 'Uno', velocidade: 199, delta: 110, qualidade: 20, nitro: 5 };
    const Ford = { modelo: 'Ford', velocidade: 202, delta: 150, qualidade: 28, nitro: 6 };
    const Camaro = { modelo: 'Camaro', velocidade: 290, delta: 190, qualidade: 50, nitro: 10 };
    const Hyundai = { modelo: 'Hyundai', velocidade: 210, delta: 160, qualidade: 30, nitro: 9 };
    const Fiat = { modelo: 'Fiat', velocidade: 199, delta: 130, qualidade: 20, nitro: 5 };
    const Honda_Civic = { modelo: 'Honda', velocidade: 220, delta: 150, qualidade: 25, nitro: 6 };
    const Nissan_360Z = { modelo: 'Nissan', velocidade: 299, delta: 190, qualidade: 60, nitro: 12 };
    const lamborghini = { modelo: 'Lamborghini', velocidade: 310, delta: 210, qualidade: 70, nitro: 15 };
    const Bugatti = { modelo: 'Bugatti', velocidade: 401, delta: 200, qualidade: 80, nitro: 9 };
    const Skyline = { modelo: 'Skyline', velocidade: 320, delta: 220, qualidade: 77, nitro: 14 };
    const BMW = { modelo: 'BMW', velocidade: 260, delta: 190, qualidade: 66, nitro: 9 };
    const F1_Red_Bull = { modelo: 'Red Bull', velocidade: 390, delta: 240, qualidade: 88, nitro: 8 };
    const Paganni = { modelo: 'Paganni', velocidade: 288, delta: 220, qualidade: 68, nitro: 7 };
    const Alfa_Romeo = { modelo: 'Alfa Romeo', velocidade: 230, delta: 200, qualidade: 55, nitro: 10 };
    const Audi = { modelo: 'Audi', velocidade: 277, delta: 170, qualidade: 50, nitro: 8 };
    const Ferrari = { modelo: 'Ferrari', velocidade: 299, delta: 213, qualidade: 60, nitro: 12 };
    const Land_Rover = { modelo: 'Land Rover', velocidade: 220, delta: 160, qualidade: 54, nitro: 9 };
    const Mercedes_Benz = { modelo: 'Mercedes', velocidade: 320, delta: 180, qualidade: 77, nitro: 12 };
    const Porshe = { modelo: 'Porshe', velocidade: 289, delta: 202, qualidade: 69, nitro: 12 };
    const Jaguar = { modelo: 'Jaguar', velocidade: 310, delta: 220, qualidade: 80, nitro: 14 };
    const Maserati = { modelo: 'Maserati', velocidade: 277, delta: 200, qualidade: 75, nitro: 9 };
    const KIA = { modelo: 'KIA', velocidade: 233, delta: 170, qualidade: 40, nitro: 7 };
    const Rolls_Royce = { modelo: 'Rolls Royce', velocidade: 236, delta: 180, qualidade: 66, nitro: 7 };
    const Bentley = { modelo: 'Bentley', velocidade: 260, delta: 180, qualidade: 60, nitro: 7 };
    const Lexus = { modelo: 'Lexus', velocidade: 320, delta: 208, qualidade: 71, nitro: 9 };
    const Aston_Martin = { modelo: 'Aston Martin', velocidade: 330, delta: 200, qualidade: 65, nitro: 10 };
    const FOX = { modelo: 'Fox', velocidade: 230, delta: 160, qualidade: 21, nitro: 7 };
    const Hass = { modelo: 'Hass', velocidade: 388, delta: 310, qualidade: 79, nitro: 9 };
    const Williams = { modelo: 'Williams', velocidade: 400, delta: 299, qualidade: 99, nitro: 9 };
    const STR = { modelo: 'STR', velocidade: 388, delta: 310, qualidade: 88, nitro: 8 };
    const Renault = { modelo: 'Renault', velocidade: 396, delta: 300, qualidade: 71, nitro: 10 };
    const Mercedes = { modelo: 'Mercedes F1', velocidade: 403, delta: 310, qualidade: 87, nitro: 12 };
    const Racing_Point = { modelo: 'Racing', velocidade: 390, delta: 289, qualidade: 69, nitro: 9 };
    const McLarem = { modelo: 'MacLarem', velocidade: 402, delta: 299, qualidade: 88, nitro: 11 };
    const F1_Ferrari = { modelo: 'Ferrari F1', velocidade: 412, delta: 310, qualidade: 90, nitro: 12 };
    const Fumaca = { modelo: 'Fumaça', velocidade: 370, delta: 360, qualidade: 60, nitro: 4 };
    const Sombra = { modelo: 'Shadow', velocidade: 450, delta: 250, qualidade: 40, nitro: 25 };
    const Fusca = { modelo: 'Fusca_51', velocidade: 220, delta: 190, qualidade: 30, nitro: 7 };
    //======VETOR COM TODOS OS CARROS EM ORDEM ALFABÉTICA======\\
    const cars = [Aston_Martin, Alfa_Romeo, Audi, Bentley, BMW, Brasilia, Bugatti, Camaro, FOX, Fusca, F1_Ferrari, Hass, McLarem, Mercedes, Racing_Point, Ferrari, Fiat, Ford, Fumaca, F1_Red_Bull, STR, Renault, Williams, Golf, Honda_Civic, Hyundai, Jaguar, KIA, lamborghini, Land_Rover, Lexus, Maserati, Mercedes_Benz, Mustang, Nissan_360Z, Paganni, Peogeot, Porshe, Rolls_Royce, Sombra, Skyline, Uno];
    return cars.map((car) => {
        const power = car.velocidade + (car.delta / 2) + (car.qualidade * 2) + (car.nitro * 4);
        if (power < 400) {
            car.categoria = 'C';
        }
        else if (power < 500) {
            car.categoria = 'R';
        }
        else if (power < 590) {
            car.categoria = 'S';
        }
        else if (power < 620) {
            car.categoria = 'SS';
        }
        else {
            car.categoria = 'A';
        }
        car.forca = power;
        return car;
    });
}
//======CONSTANTES CONTENDO AS INFORMAÇÕES NECESSARIAS PARA O INSTÂNCIAMENTO DA CLASS PILOTO DENTRO DA FUNCTION CORRIDA()======\\
export function pilots() {
    // Veloses e Furiosos
    const letty = { nome: 'Letty', sexo: 'F', nacionalidade: 'EUA', habilidade: 41, src: 'letty' };
    const bryan = { nome: 'Bryan', sexo: 'M', nacionalidade: 'EUA', habilidade: 47, src: 'bryan' };
    const don = { nome: 'Dominic', sexo: 'M', nacionalidade: 'EUA', habilidade: 48, src: 'don' };
    const mia = { nome: 'Mia', sexo: 'F', nacionalidade: 'EUA', habilidade: 33, src: 'mia' };
    const roman = { nome: 'Roman', sexo: 'M', nacionalidade: 'EUA', habilidade: 44, src: 'roman' };
    // Z-Nation
    const z10k = { nome: '10k', sexo: 'M', nacionalidade: 'EUA', habilidade: 29, src: '10k' };
    const kassandra = { nome: 'Kassandra', sexo: 'F', nacionalidade: 'EUA', habilidade: 22, src: 'kassandra' };
    const dock = { nome: 'Dock', sexo: 'M', nacionalidade: 'EUA', habilidade: 31, src: 'dock' };
    const warren = { nome: 'Warren', sexo: 'F', nacionalidade: 'EUA', habilidade: 35, src: 'warren' };
    // Animais
    const alice = { nome: 'Alice', sexo: 'F', nacionalidade: 'BR', habilidade: 8, src: 'alice' };
    const catatau = { nome: 'Catatau', sexo: 'M', nacionalidade: 'BR', habilidade: 10, src: 'catatau' };
    const estopinha = { nome: 'Estopinha', sexo: 'M', nacionalidade: 'BR', habilidade: 12, src: 'estopinha' };
    // Super Heróis
    const alerquina = { nome: 'Alerquina', sexo: 'F', nacionalidade: 'EUA', habilidade: 29, src: 'alerquina' };
    const aquaman = { nome: 'Aquaman', sexo: 'M', nacionalidade: 'EUA', habilidade: 22, src: 'aquaman' };
    const superMan = { nome: 'Super Man', sexo: 'M', nacionalidade: 'EUA', habilidade: 15, src: 'superman' };
    const batman = { nome: 'Batman', sexo: 'M', nacionalidade: 'EUA', habilidade: 44, src: 'batman' };
    const maravilha = { nome: 'Maravilha', sexo: 'F', nacionalidade: 'EUA', habilidade: 21, src: 'mulhermaravilha' };
    const robin = { nome: 'Robin', sexo: 'M', nacionalidade: 'EUA', habilidade: 18, src: 'robin' };
    // Famosos
    const theRock = { nome: 'The Rock', sexo: 'M', nacionalidade: 'EUA', habilidade: 38, src: 'therock' };
    const bob = { nome: 'Bob', sexo: 'M', nacionalidade: 'JM', habilidade: 31, src: 'bob' };
    // Pessoas reais
    const julio = { nome: 'Júlio', sexo: 'M', nacionalidade: 'BR', habilidade: 28, src: 'julio' };
    const maycon = { nome: 'Maycon', sexo: 'M', nacionalidade: 'BR', habilidade: 31, src: 'maycon' };
    const rafael = { nome: 'Rafael', sexo: 'M', nacionalidade: 'BR', habilidade: 33, src: 'rafael' };
    const winnie = { nome: 'Winnie', sexo: 'F', nacionalidade: 'BR', habilidade: 21, src: 'winnie' };
    const merielle = { nome: 'Merielle', sexo: 'F', nacionalidade: 'BR', habilidade: 24, src: 'merielle' };
    const benice = { nome: 'Benice', sexo: 'F', nacionalidade: 'BR', habilidade: 27, src: 'benice' };
    const aninha = { nome: 'Aninha', sexo: 'F', nacionalidade: 'BR', habilidade: 19, src: 'aninha' };
    const thiego = { nome: 'Thiego', sexo: 'M', nacionalidade: 'BR', habilidade: 22, src: 'thiego' };
    const julia = { nome: 'Júlia', sexo: 'F', nacionalidade: 'BR', habilidade: 20, src: 'julia' };
    const geyse = { nome: 'Geyse', sexo: 'F', nacionalidade: 'BR', habilidade: 21, src: 'geyse' };
    //======VETOR COM TODOS OS PILOTOS EM ORDEM ALFABÉTICA======\\
    const pilotos = [z10k, alerquina, alice, aninha, aquaman, batman, benice, bob, bryan, catatau, dock, don, estopinha, geyse, julia, julio, letty, kassandra, maravilha, maycon, merielle, mia, rafael, robin, roman, superMan, theRock, thiego, warren, winnie];
    return pilotos;
}
export const carsList = cars();
export const pilotsList = pilots();
