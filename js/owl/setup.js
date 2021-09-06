$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


function assistir(){
	window.open("https://www.youtube.com/watch?v=wOsRyPXAg4Y");
}

function trocar(elemento){
	//alert("Trocar texto");
	//document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
	elemento.innerHTML = "ADICIONADO A MINHA LISTA";
}