document.getElementById('inscription').addEventListener('submit', function(e){
    let inputs = document.getElementById('inscription').getElementsByTagName('input');
    let erreur;


    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].value==''){
            erreur = 'Veuillez renseigner tous les champs !';
        }
    }

    if (erreur){
        e.preventDefault();
        document.getElementById('erreur').innerHTML = erreur;

        //Affichage pseudo et email dans console
        let pseudo = document.getElementById('pseudo').value;
        console.log('Le pseudo est:', pseudo)

        let email = document.getElementById('email').value;
        console.log('L email est:', email)


    } else{
        alert('Formulaire envoyé !');
    }
})
