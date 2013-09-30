$(function(){
   $.superbox.settings = {
        boxWidth: "600", // Default width of the box
        boxHeight: "400", // Default height of the box
        loadTxt: "Aguarde...", // Loading text
        closeTxt: "&times;", // "Close" button text
        prevTxt: "Anterior", // "Previous" button text
        nextTxt: "Próximo" // "Next" button text
    };
   $.superbox();
    
    $('.tabs-standard').herotabs();
});
