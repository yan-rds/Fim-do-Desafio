// Constantes
const personagem1 = document.querySelector('.personagem1');
const personagem2 = document.querySelector('.personagem2');
const personagem3 = document.querySelector('.personagem3');
const personagem4 = document.querySelector('.personagem4');
const imagem1 = document.getElementById("img1");
const imagem2 = document.getElementById("img2");
const imagem3 = document.getElementById("img3");
const imagem4 = document.getElementById("img4");
const nome1 = document.getElementById("nome1");
const nome2 = document.getElementById("nome2");
const nome3 = document.getElementById("nome3");
const nome4 = document.getElementById("nome4");
const status1 = document.getElementById("status1");
const status2 = document.getElementById("status2");
const status3 = document.getElementById("status3");
const status4 = document.getElementById("status4");
const species1 = document.getElementById("species1");
const species2 = document.getElementById("species2");
const species3 = document.getElementById("species3");
const species4 = document.getElementById("species4");
const gender1 = document.getElementById("gender1");
const gender2 = document.getElementById("gender2");
const gender3 = document.getElementById("gender3");
const gender4 = document.getElementById("gender4");
const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");


// Sistema para o personagem 1
const personagens671 = 671;
    generateRandomNumber = () => {
        return Math.floor(Math.random() * personagens671)}

const id671 = generateRandomNumber();
    fetch(`https://rickandmortyapi.com/api/character/${id671}`)
        .then(function(response){
            return response.json();})
        .then(function(data){            
            imagem1.src = data.image;
            nome1.innerHTML = data.name;            
            status1.innerHTML = 'Status: ' + data.status;
            species1.innerHTML = 'Species: ' + data.species;
            gender1.innerHTML = 'Gender: ' + data.gender;            
        });

// Sistema para o personagem 2
const personagens670 = 670;
    generateRandomNumber = () => {
        return Math.floor(Math.random() * personagens670)}

const id670 = generateRandomNumber();            
     fetch(`https://rickandmortyapi.com/api/character/${id670}`)
        .then(function(response){
            return response.json();})
        .then(function(data){
            imagem2.src = data.image;
            nome2.innerHTML = data.name;            
            status2.innerHTML = 'Status: ' + data.status;
            species2.innerHTML = 'Species: ' + data.species;
            gender2.innerHTML = 'Gender: ' + data.gender;            
        });

// Sistema para o Personagem 3
const personagens669 = 669;
    generateRandomNumber = () => {
         return Math.floor(Math.random() * personagens669)}
        
const id669 = generateRandomNumber();            
     fetch(`https://rickandmortyapi.com/api/character/${id669}`)
        .then(function(response){
            return response.json();})
        .then(function(data){
            imagem3.src = data.image;
            nome3.innerHTML = data.name;            
            status3.innerHTML = 'Status: ' + data.status;
            species3.innerHTML = 'Species: ' + data.species;
            gender3.innerHTML = 'Gender: ' + data.gender;            
        });

// Sistema para o personagem 4
 const personagens668 = 668;
    generateRandomNumber = () => {
             return Math.floor(Math.random() * personagens668)}
                 
const id668 = generateRandomNumber();            
     fetch(`https://rickandmortyapi.com/api/character/${id668}`)
        .then(function(response){
            return response.json();})
        .then(function(data){
            imagem4.src = data.image;
            nome4.innerHTML = data.name;            
            status4.innerHTML = 'Status: ' + data.status;
            species4.innerHTML = 'Species: ' + data.species;
            gender4.innerHTML = 'Gender: ' + data.gender;            
            });

// Botões
botao1.onclick = () => { status1.style.opacity = "100%" , species1.style.opacity = "100%" , gender1.style.opacity = "100%"};
botao2.onclick = () => { status2.style.opacity = "100%" , species2.style.opacity = "100%" , gender2.style.opacity = "100%"};
botao3.onclick = () => { status3.style.opacity = "100%" , species3.style.opacity = "100%" , gender3.style.opacity = "100%"};
botao4.onclick = () => { status4.style.opacity = "100%" , species4.style.opacity = "100%" , gender4.style.opacity = "100%"};