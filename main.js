function Animal(nome, especie) {
    this.nome = nome;
    this.especie = especie;
}

function Ave(nome, especie, envergaduraDasAsas) {
    Animal.call(this, nome, especie);
    this.envergaduraDasAsas = envergaduraDasAsas;
}

function Mamifero(nome, especie, quantidadeDePatas) {
    Animal.call(this, nome, especie);
    this.quantidadeDePatas = quantidadeDePatas;
}

const aguia = new Ave("Águia", "Ave de Rapina", 2);
const leao = new Mamifero("Leão", "Felino", 4);
const cachorro = new Mamifero("Cachorro", "Canino", 4);

console.log(aguia);
console.log(leao);
console.log(cachorro);
