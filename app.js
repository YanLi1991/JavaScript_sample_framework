var g = G$('John', 'Doe');
g.greet().setLang('es').greet(true).log();

$('#login').click(function(){
    // create a new Greeter object
   var loginGrtr = G$('John', 'Doe');
    
    // hide the login on screen
    $('#loginDiv').hide();
    
    // passing the '#greeting' as the selector and the chosen language
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
});