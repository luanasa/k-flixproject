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

function trocar(element){
	//alert("Trocar texto");
	//document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
	element.innerHTML = "ADICIONADO A MINHA LISTA";
}

function logarUser() {
    window.location.replace("/index.html");
}

