let amigos = [];

function adicionar(){
    let nomeDoAmigo = document.getElementById('nome-amigo');
    let nomeMaiuculos = nomeDoAmigo.value.toUpperCase();
    if(amigos.includes(nomeMaiuculos)) {
        alert('Nome ja adicionado.');
        document.getElementById('nome-amigo').value = '';
        return;
    }
    
    amigos.push(nomeMaiuculos);
    
     let listaDeAmigos = document.getElementById('lista-amigos');    
    

    if (nomeDoAmigo.value == ''){
        alert('Você deve escrever um nome valido');
        return;
    }
    document.getElementById('lista-sorteio').innerHTML = '';

   
    if (listaDeAmigos.textContent == ''){
        document.getElementById('nome-amigo').textContent;
        listaDeAmigos.textContent = nomeMaiuculos
        document.getElementById('nome-amigo').value = '';
    }else{
    listaDeAmigos.textContent = listaDeAmigos.textContent + ', ' + nomeMaiuculos;
    document.getElementById('nome-amigo').value = '';

    }
}

    function sortear() {
    if (document.getElementById('lista-sorteio').innerHTML = ''){
        
     embaralha(amigos);
     let sorteio = document.getElementById('lista-sorteio');
     if (amigos.length <= 2){
        alert('É preciso no minimo 3 amigos para realizar o sorteio.');
        return;

     }
     
     for (let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        }else{
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
      }
    }else{
        document.getElementById('lista-sorteio').innerHTML = '' ;
        embaralha(amigos);
     let sorteio = document.getElementById('lista-sorteio');
     if (amigos.length <= 2){
        alert('É preciso no minimo 3 amigos para realizar o sorteio.');
        return;

     }
     
     for (let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        }else{
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
      }
    }

    }
        

    function reiniciar(){

        amigos = [];
        document.getElementById('nome-amigo').innerHTML = '';
        listaDeAmigos = document.getElementById('lista-amigos').innerHTML = '';
        document.getElementById('lista-sorteio').innerHTML = '';
        document.getElementById('nome-amigo').value = '';


    }

    function embaralha(lista) {

        for (let indice = lista.length; indice; indice--) {
    
            const indiceAleatorio = Math.floor(Math.random() * indice);
    
            // atribuição via destructuring
            [lista[indice - 1], lista[indiceAleatorio]] = 
                [lista[indiceAleatorio], lista[indice - 1]];
        }
     }

