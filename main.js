document.getElementById('inscription').addEventListener('submit', function(e){
    let inputs = document.getElementById('inscription').getElementsByTagName('input');
    let erreur;
    pseudo = ('Votre pseudo est : ') + document.getElementById('pseudo').value
    email = ('Votre email est : ') + document.getElementById('email').value


    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].value==''){
            erreur = 'Veuillez renseigner tous les champs !';
        }
    }

    if (erreur){
        e.preventDefault();
        document.getElementById('erreur').innerHTML = erreur;

    } 
    
    else{
        // alert('Formulaire envoyé !');
        document.getElementById('affiche_pseudo').innerHTML= pseudo;
        document.getElementById('affiche_email').innerHTML= email;
        
    }
})
