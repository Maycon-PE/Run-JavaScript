//======CONSTANTES CONTENDO AS INFORMAÇÕES NECESSARIAS PARA O INSTÂNCIAMENTO DA CLASS CARRO DENTRO DA FUNCTION CORRIDA()======\\
export function carros() {
    // Nome, velocidade máxima, aceleração, resistência, turbo
    const Peogeot = ['Peogeot', 212, 160, 12, 5]
    const Mustang = ['Mustang', 307, 200, 15, 8]
    const Golf = ['Golf', 200, 109, 20, 7]
    const Brasilia = ['Brasília', 199, 99, 19, 16]
    const Uno = ['Uno', 199, 110, 11, 5]
    const Ford = ['Ford', 202, 150, 14, 6]
    const Camaro = ['Camaro', 290, 190, 18, 10]
    const Hyundai = ['Hyundai', 210, 160, 16, 9]
    const Fiat = ['Fiat', 199, 130, 9, 5]
    const Honda_Civic = ['Honda', 220, 150, 12, 6]
    const Nissan_360Z = ['Nissan', 299, 190, 20, 12]
    const lamborghini = ['Lamborghini', 310, 210, 19, 15]
    const Bugatti = ['Bugatti', 401, 200, 22, 9]
    const Skyline = ['Skyline', 320, 220, 18, 14]
    const BMW = ['BMW', 260, 190, 16, 9]
    const F1_Red_Bull = ['Red Bull', 390, 240, 22, 8]
    const Paganni = ['Paganni', 288, 220, 18, 7]
    const Alfa_Romeo = ['Alfa Romeo', 230, 200, 17, 10]
    const Audi = ['Audi', 277, 170, 16, 8]
    const Ferrari = ['Ferrari', 299, 213, 17, 12]
    const Land_Rover = ['Land Rover', 220, 160, 14, 9]
    const Mercedes_Benz = ['Mercedes', 320, 180, 18, 12]
    const Porshe = ['Porshe', 289, 202, 15, 12]
    const Jaguar = ['Jaguar', 310, 220, 18, 14]
    const Maserati = ['Maserati', 277, 200, 15, 9]
    const KIA = ['KIA', 233, 170, 13, 7]
    const Rolls_Royce = ['Rolls Royce', 236, 180, 18, 7]
    const Bentley = ['Bentley', 260, 180, 17, 7]
    const Lexus = ['Lexus', 320, 208, 14, 9]
    const Aston_Martin = ['Aston Martin', 330, 200, 20, 10]
    const FOX = ['Fox', 230, 160, 19, 7]
    const Hass = ['Hass', 388, 310, 24, 9]
    const Williams = ['Williams', 400, 299, 26, 9]
    const STR = ['STR', 388, 310, 20, 8]
    const Renault = ['Renault', 396, 300, 24, 10]
    const Mercedes = ['Mercedes', 403, 310, 26, 12]
    const Racing_Point = ['Racing', 390, 289, 21, 9]
    const McLarem = ['MacLarem', 402, 299, 25, 11]
    const F1_Ferrari = ['Ferrari', 412, 310, 26, 12]
    const Fumaca = ['Fumaça', 370, 360, 17, 4]
    const Sombra = ['Shadow', 450, 250, 22, 25]
    const Fusca = ['Fusca_51', 220, 190, 5, 7]
    // Carro de verificação
    const debbug = ['DEBBUG', 2, 2000, 99999, 99999]

    //======VETOR COM TODOS OS CARROS EM ORDEM ALFABÉTICA======\\
    const carros = [Aston_Martin, Alfa_Romeo, Audi, Bentley, BMW, Brasilia, Bugatti, Camaro, FOX, Fusca, F1_Ferrari, Hass, McLarem, Mercedes, Racing_Point, Ferrari, Fiat, Ford, Fumaca, F1_Red_Bull, STR, Renault, Williams, Golf, Honda_Civic, Hyundai, Jaguar, KIA, lamborghini, Land_Rover, Lexus, Maserati, Mercedes_Benz, Mustang, Nissan_360Z, Paganni, Peogeot, Porshe, Rolls_Royce, Sombra, Skyline, Uno]

    return carros
}

//======CONSTANTES CONTENDO AS INFORMAÇÕES NECESSARIAS PARA O INSTÂNCIAMENTO DA CLASS PILOTO DENTRO DA FUNCTION CORRIDA()======\\
export function pilotos() {
  // Veloses e Furiosos
  const letty = ['Letty', 'F', 'EUA', 41, 'letty']
  const bryan = ['Bryan', 'M', 'EUA', 47, 'bryan']
  const don = ['Dominic', 'M', 'EUA', 48, 'don']
  const mia = ['Mia', 'F', 'EUA', 33, 'mia']
  const roman = ['Roman', 'M', 'EUA', 44, 'roman']
  // Z-Nation
  const z10k = ['10k', 'M', 'EUA', 29, '10k']
  const kassandra = ['Kassandra', 'F', 'EUA', 22, 'kassandra']
  const dock = ['Dock', 'M', 'EUA', 31, 'dock']
  const warren = ['Warren', 'F', 'EUA', 35, 'warren']
  // Animais
  const alice = ['Alice', 'F', 'BR', 8, 'alice']
  const catatau = ['Catatau', 'M', 'BR', 10, 'catatau']
  const estopinha = ['Estopinha', 'M', 'BR', 12, 'estopinha']
  // Super Heróis
  const alerquina = ['Alerquina', 'F', 'EUA', 29, 'alerquina']
  const aquaman = ['Aquaman', 'M', 'EUA', 22, 'aquaman']
  const superMan = ['Super Man', 'M', 'EUA', 15, 'superman']
  const batman = ['Batman', 'M', 'EUA', 44, 'batman']
  const maravilha = ['Maravilha', 'F', 'EUA', 21, 'mulhermaravilha']
  const robin = ['Robin', 'M', 'EUA', 18, 'robin']
  // Famosos
  const theRock = ['The Rock', 'M', 'EUA', 38, 'therock']
  const bob = ['Bob', 'M', 'JM', 31, 'bob']
  // Pessoas reais
  const julio = ['Júlio', 'M', 'BR', 28, 'julio']
  const maycon = ['Maycon', 'M', 'BR', 31, 'maycon']
  const rafael = ['Rafael', 'M', 'BR', 33, 'rafael']
  const winnie = ['Winnie', 'F', 'BR', 21, 'winnie']
  const merielle = ['Merielle', 'F', 'BR', 24, 'merielle']
  const benice = ['Benice', 'F', 'BR', 27, 'benice']
  const aninha = ['Aninha', 'F', 'BR', 19, 'aninha']
  const thiego = ['Thiego', 'M', 'BR', 22, 'thiego']
  const julia = ['Júlia', 'F', 'BR', 20, 'julia']
  const geyse = ['Geyse', 'F', 'BR', 21, 'geyse']
  // Carro de verificação
  const debbug = ['DEBBUG', 'F', 'BR', 9999, 'default']
  //======VETOR COM TODOS OS PILOTOS EM ORDEM ALFABÉTICA======\\
  const pilotos = [z10k, alerquina, alice, aninha, aquaman, batman, benice, bob, bryan, catatau, dock, don, estopinha, geyse, julia, julio, letty, kassandra, maravilha, maycon, merielle, mia, rafael, robin, roman, superMan, theRock, thiego, warren, winnie]

  return pilotos
}
