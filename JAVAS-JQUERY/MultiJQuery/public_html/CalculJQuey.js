/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calculProduit()
{
    //Recuperer le contenu du champ val1
    v1=$('#val1').val();
    //Recuperer le contenu du champ val2
    v2=$('#val2').val();
    //Calculer val1*val2
    res=v1*v2;
    //Mettre le résultat dans le champ résultat
    $("#resultat").val(res);
}

function calculSomme()
{
    //Recuperer le contenu du champ val3
    v3=$('#val3').val();
    //Recuperer le contenu du champ val4
    v4=$('#val4').val();
    //Calculer val3+val4
    res2=parseFloat(v3)+parseFloat(v4);
    //Mettre le résultat dans le champ résultat
    $("#resultat2").val(res2);
}

$(document).ready(function()
{
    //Association de la fonction calculProduit à l'élément ayant pour id "produit"
    $("#produit").click(calculProduit);
    
    //Association de la fonction calculSomme à l'élément ayant pour id "somme"
    $("#somme").click(calculSomme);
});