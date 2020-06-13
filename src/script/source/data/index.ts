import { ICar } from '../classes/Car'
import { IPilot } from '../classes/Pilot'

//======CONSTANTES CONTENDO AS INFORMAÇÕES NECESSARIAS PARA O INSTÂNCIAMENTO DA CLASS CARRO DENTRO DA FUNCTION CORRIDA()======\\

export function cars(): ICar[] {
    // Nome, velocidade máxima, aceleração, resistência, turbo
    const Peogeot: ICar = { modelo: 'Peogeot', velocidade: 212, delta: 160, qualidade: 12, nitro: 5 }
    const Mustang: ICar = { modelo: 'Mustang', velocidade: 307, delta: 200, qualidade: 15, nitro: 8 }
    const Golf: ICar = { modelo: 'Golf', velocidade: 200, delta: 109, qualidade: 20, nitro: 7 }
    const Brasilia: ICar = { modelo: 'Brasília', velocidade: 199, delta: 99, qualidade: 19, nitro: 16 }
    const Uno: ICar = { modelo: 'Uno', velocidade: 199, delta: 110, qualidade: 11, nitro: 5 }
    const Ford: ICar = { modelo: 'Ford', velocidade: 202, delta: 150, qualidade: 14, nitro: 6 }
    const Camaro: ICar = { modelo: 'Camaro', velocidade: 290, delta: 190, qualidade: 18, nitro: 10 }
    const Hyundai: ICar = { modelo: 'Hyundai', velocidade: 210, delta: 160, qualidade: 16, nitro: 9 }
    const Fiat: ICar = { modelo: 'Fiat', velocidade: 199, delta: 130, qualidade: 9, nitro: 5 }
    const Honda_Civic: ICar = { modelo: 'Honda', velocidade: 220, delta: 150, qualidade: 12, nitro: 6 }
    const Nissan_360Z: ICar = { modelo: 'Nissan', velocidade: 299, delta: 190, qualidade: 20, nitro: 12 }
    const lamborghini: ICar = { modelo: 'Lamborghini', velocidade: 310, delta: 210, qualidade: 19, nitro: 15 }
    const Bugatti: ICar = { modelo: 'Bugatti', velocidade: 401, delta: 200, qualidade: 22, nitro: 9 }
    const Skyline: ICar = { modelo: 'Skyline', velocidade: 320, delta: 220, qualidade: 18, nitro: 14 }
    const BMW: ICar = { modelo: 'BMW', velocidade: 260, delta: 190, qualidade: 16, nitro: 9 }
    const F1_Red_Bull: ICar = { modelo: 'Red Bull', velocidade: 390, delta: 240, qualidade: 22, nitro: 8 }
    const Paganni: ICar = { modelo: 'Paganni', velocidade: 288, delta: 220, qualidade: 18, nitro: 7 }
    const Alfa_Romeo: ICar = { modelo: 'Alfa Romeo', velocidade: 230, delta: 200, qualidade: 17, nitro: 10 }
    const Audi: ICar = { modelo: 'Audi', velocidade: 277, delta: 170, qualidade: 16, nitro: 8 }
    const Ferrari: ICar = { modelo: 'Ferrari', velocidade: 299, delta: 213, qualidade: 17, nitro: 12 }
    const Land_Rover: ICar = { modelo: 'Land Rover', velocidade: 220, delta: 160, qualidade: 14, nitro: 9 }
    const Mercedes_Benz: ICar = { modelo: 'Mercedes', velocidade: 320, delta: 180, qualidade: 18, nitro: 12 }
    const Porshe: ICar = { modelo: 'Porshe', velocidade: 289, delta: 202, qualidade: 15, nitro: 12 }
    const Jaguar: ICar = { modelo: 'Jaguar', velocidade: 310, delta: 220, qualidade: 18, nitro: 14 }
    const Maserati: ICar = { modelo: 'Maserati', velocidade: 277, delta: 200, qualidade: 15, nitro: 9 }
    const KIA: ICar = { modelo: 'KIA', velocidade: 233, delta: 170, qualidade: 13, nitro: 7 }
    const Rolls_Royce: ICar = { modelo: 'Rolls Royce', velocidade: 236, delta: 180, qualidade: 18, nitro: 7 }
    const Bentley: ICar = { modelo: 'Bentley', velocidade: 260, delta: 180, qualidade: 17, nitro: 7 }
    const Lexus: ICar = { modelo: 'Lexus', velocidade: 320, delta: 208, qualidade: 14, nitro: 9 }
    const Aston_Martin: ICar = { modelo: 'Aston Martin', velocidade: 330, delta: 200, qualidade: 20, nitro: 10 }
    const FOX: ICar = { modelo: 'Fox', velocidade: 230, delta: 160, qualidade: 19, nitro: 7 }
    const Hass: ICar = { modelo: 'Hass', velocidade: 388, delta: 310, qualidade: 24, nitro: 9 }
    const Williams: ICar = { modelo: 'Williams', velocidade: 400, delta: 299, qualidade: 26, nitro: 9 }
    const STR: ICar = { modelo: 'STR', velocidade: 388, delta: 310, qualidade: 20, nitro: 8 }
    const Renault: ICar = { modelo: 'Renault', velocidade: 396, delta: 300, qualidade: 24, nitro: 10 }
    const Mercedes: ICar = { modelo: 'Mercedes', velocidade: 403, delta: 310, qualidade: 26, nitro: 12 }
    const Racing_Point: ICar = { modelo: 'Racing', velocidade: 390, delta: 289, qualidade: 21, nitro: 9 }
    const McLarem: ICar = { modelo: 'MacLarem', velocidade: 402, delta: 299, qualidade: 25, nitro: 11 }
    const F1_Ferrari: ICar = { modelo: 'Ferrari', velocidade: 412, delta: 310, qualidade: 26, nitro: 12 }
    const Fumaca: ICar = { modelo: 'Fumaça', velocidade: 370, delta: 360, qualidade: 17, nitro: 4 }
    const Sombra: ICar = { modelo: 'Shadow', velocidade: 450, delta: 250, qualidade: 22, nitro: 25 }
    const Fusca: ICar = { modelo: 'Fusca_51', velocidade: 220, delta: 190, qualidade: 5, nitro: 7 }

    //======VETOR COM TODOS OS CARROS EM ORDEM ALFABÉTICA======\\
    const cars: ICar[] = [Aston_Martin, Alfa_Romeo, Audi, Bentley, BMW, Brasilia, Bugatti, Camaro, FOX, Fusca, F1_Ferrari, Hass, McLarem, Mercedes, Racing_Point, Ferrari, Fiat, Ford, Fumaca, F1_Red_Bull, STR, Renault, Williams, Golf, Honda_Civic, Hyundai, Jaguar, KIA, lamborghini, Land_Rover, Lexus, Maserati, Mercedes_Benz, Mustang, Nissan_360Z, Paganni, Peogeot, Porshe, Rolls_Royce, Sombra, Skyline, Uno]

    return cars.map((car) => {
        const power = car.velocidade + (car.delta / 2) + (car.qualidade * 2) + (car.nitro * 4)

        if (power < 400) {
          car.categoria = 'C'
        } else if (power < 500) {
          car.categoria = 'R'
        } else if (power < 590) { 
          car.categoria = 'S'
        } else if (power < 620) {
          car.categoria = 'SS'
        } else {
          car.categoria = 'A'  
        }

        car.forca = power
        
        return  car
    })
}

//======CONSTANTES CONTENDO AS INFORMAÇÕES NECESSARIAS PARA O INSTÂNCIAMENTO DA CLASS PILOTO DENTRO DA FUNCTION CORRIDA()======\\
export function pilots(): IPilot[] {
  // Veloses e Furiosos
  const letty: IPilot = { nome: 'Letty', sexo: 'F', nacionalidade: 'EUA', habilidade: 41, src: 'letty' }
  const bryan: IPilot = { nome: 'Bryan', sexo: 'M', nacionalidade: 'EUA', habilidade: 47, src: 'bryan' }
  const don: IPilot = { nome: 'Dominic', sexo: 'M', nacionalidade: 'EUA', habilidade: 48, src: 'don' }
  const mia: IPilot = { nome: 'Mia', sexo: 'F', nacionalidade: 'EUA', habilidade: 33, src: 'mia' }
  const roman: IPilot = { nome: 'Roman', sexo: 'M', nacionalidade: 'EUA', habilidade: 44, src: 'roman' }
  // Z-Nation
  const z10k: IPilot = { nome: '10k', sexo: 'M', nacionalidade: 'EUA', habilidade: 29, src: '10k' }
  const kassandra: IPilot = { nome: 'Kassandra', sexo: 'F', nacionalidade: 'EUA', habilidade: 22, src: 'kassandra' }
  const dock: IPilot = { nome: 'Dock', sexo: 'M', nacionalidade: 'EUA', habilidade: 31, src: 'dock' }
  const warren: IPilot = { nome: 'Warren', sexo: 'F', nacionalidade: 'EUA', habilidade: 35, src: 'warren' }
  // Animais
  const alice: IPilot = { nome: 'Alice', sexo: 'F', nacionalidade: 'BR', habilidade: 8, src: 'alice' }
  const catatau: IPilot = { nome: 'Catatau', sexo: 'M', nacionalidade: 'BR', habilidade: 10,src:  'catatau' }
  const estopinha: IPilot = { nome: 'Estopinha', sexo: 'M', nacionalidade: 'BR', habilidade: 12,src:  'estopinha' }
  // Super Heróis
  const alerquina: IPilot = { nome: 'Alerquina', sexo: 'F', nacionalidade: 'EUA', habilidade: 29, src: 'alerquina' }
  const aquaman: IPilot = { nome: 'Aquaman', sexo: 'M', nacionalidade: 'EUA', habilidade: 22, src: 'aquaman' }
  const superMan: IPilot = { nome: 'Super Man', sexo: 'M', nacionalidade: 'EUA', habilidade: 15, src: 'superman' }
  const batman: IPilot = { nome: 'Batman', sexo: 'M', nacionalidade: 'EUA', habilidade: 44, src: 'batman' }
  const maravilha: IPilot = { nome: 'Maravilha', sexo: 'F', nacionalidade: 'EUA', habilidade: 21, src: 'mulhermaravilha' }
  const robin: IPilot = { nome: 'Robin', sexo: 'M', nacionalidade: 'EUA', habilidade: 18, src: 'robin' }
  // Famosos
  const theRock: IPilot = { nome: 'The Rock', sexo: 'M', nacionalidade: 'EUA', habilidade: 38, src: 'therock' }
  const bob: IPilot = { nome: 'Bob', sexo: 'M', nacionalidade: 'JM', habilidade:  31, src: 'bob' }
  // Pessoas reais
  const julio: IPilot = { nome: 'Júlio', sexo: 'M', nacionalidade: 'BR', habilidade: 28,src:  'julio' }
  const maycon: IPilot = { nome: 'Maycon', sexo: 'M', nacionalidade: 'BR', habilidade: 31,src:  'maycon' }
  const rafael: IPilot = { nome: 'Rafael', sexo: 'M', nacionalidade: 'BR', habilidade: 33,src:  'rafael' }
  const winnie: IPilot = { nome: 'Winnie', sexo: 'F', nacionalidade: 'BR', habilidade: 21,src:  'winnie' }
  const merielle: IPilot = { nome: 'Merielle', sexo: 'F', nacionalidade: 'BR', habilidade: 24,src:  'merielle' }
  const benice: IPilot = { nome: 'Benice', sexo: 'F', nacionalidade: 'BR', habilidade: 27,src:  'benice' }
  const aninha: IPilot = { nome: 'Aninha', sexo: 'F', nacionalidade: 'BR', habilidade: 19,src:  'aninha' }
  const thiego: IPilot = { nome: 'Thiego', sexo: 'M', nacionalidade: 'BR', habilidade: 22,src:  'thiego' }
  const julia: IPilot = { nome: 'Júlia', sexo: 'F', nacionalidade: 'BR', habilidade: 20,src:  'julia' }
  const geyse: IPilot = { nome: 'Geyse', sexo: 'F', nacionalidade: 'BR', habilidade: 21,src:  'geyse' }

  //======VETOR COM TODOS OS PILOTOS EM ORDEM ALFABÉTICA======\\
  const pilotos: IPilot[] = [z10k, alerquina, alice, aninha, aquaman, batman, benice, bob, bryan, catatau, dock, don, estopinha, geyse, julia, julio, letty, kassandra, maravilha, maycon, merielle, mia, rafael, robin, roman, superMan, theRock, thiego, warren, winnie]

  return pilotos
}
