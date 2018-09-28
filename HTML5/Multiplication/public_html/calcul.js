/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calculProduit() {
    
    //recuperer le contenu du champ val1
    
    v1 = window.document.forms["multiplication"].val1.value;
    
    //recuperer le contenu du champ val2
    
    v2 = window.document.forms["multiplication"].val2.value;
    
    //calculer val*val2
    
    res=v1*v2;
    
    //mettre le resultat dans le champ resultat
    
        window.document.forms["multiplication"].resultat.value=res;
    
}

function calculSomme() {
    
    //recuperer le contenu du champ val1
    
    v1 = window.document.forms["multiplication2"].val12.value;
    
    //recuperer le contenu du champ val2
    
    v2 = window.document.forms["multiplication2"].val22.value;
    
    //calculer val+val2
    
    res=parseFloat(v1)+parseFloat(v2);
    
    //mettre le resultat dans le champ resultat
    
        window.document.forms["multiplication2"].resultat2.value=res;
    
}


