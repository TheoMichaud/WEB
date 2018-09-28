/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function (){
   
    //gestion mot de passe
    $("#inscription").click(function(){
        mdp1 = $("#mdp").val();
        mdp2 = $("#mdp2").val();
        if(mdp1 != mdp2){
            alert("Les mots de passe ne sont pas identiques !");
        }
               
    });


/*

$("#SE").change(function (){
    var os= $(this).val();
    //vidage de la liste
    $("#version").empty();
    //remplissage de la liste
    if(os === "Windows"){
        $("#version").append($("<option>", {value: "XP"}).text("XP"));
        $("#version").append($("<option>", {value: "Vista"}).text("Vista"));
        $("#version").append($("<option>", {value: "Seven"}).text("Seven"));
    }
    
    if(os === "Linux"){
        $("#version").append($("<option>", {value: "Debian"}).text("Debian"));
        $("#version").append($("<option>", {value: "Ubuntu"}).text("Ubuntu"));
        $("#version").append($("<option>", {value: "Fedora"}).text("Fedora"));
        $("#version").append($("<option>", {value: "SuSE"}).text("SuSE"));
        $("#version").append($("<option>", {value: "Mint"}).text("Mint"));
        
    }
    
    if(os === "Mac OS"){
        $("#version").append($("<option>", {value: "Tiger"}).text("Tiger"));
        $("#version").append($("<option>", {value: "Leopard"}).text("Leopard"));
        $("#version").append($("<option>", {value: "Snow leopard"}).text("Snow leopard"));
        $("#version").append($("<option>", {value: "Lion"}).text("Lion"));
    }
});
    
    */

});














  //DEUXIEME METHODE
   
   function versionOS(){
       
    $("#version").empty();
    os = $("#SE option:selected").text();
    if(os === "Windows"){
        $("#version").append($("<option>", {value: "XP"}).text("XP"));
        $("#version").append($("<option>", {value: "Vista"}).text("Vista"));
        $("#version").append($("<option>", {value: "Seven"}).text("Seven"));
    }
    if(os === "Linux"){
        $("#version").append($("<option>", {value: "Debian"}).text("Debian"));
        $("#version").append($("<option>", {value: "Ubuntu"}).text("Ubuntu"));
        $("#version").append($("<option>", {value: "Fedora"}).text("Fedora"));
        $("#version").append($("<option>", {value: "SuSE"}).text("SuSE"));
        $("#version").append($("<option>", {value: "Mint"}).text("Mint"));
        
    }
    if(os === "Mac OS"){
        $("#version").append($("<option>", {value: "Tiger"}).text("Tiger"));
        $("#version").append($("<option>", {value: "Leopard"}).text("Leopard"));
        $("#version").append($("<option>", {value: "Snow leopard"}).text("Snow leopard"));
        $("#version").append($("<option>", {value: "Lion"}).text("Lion"));
    }
    //console.log(os);
}
   

    
$(document).ready(function(){
    $("#SE").change(versionOS);
});