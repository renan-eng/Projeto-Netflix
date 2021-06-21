$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:6
        },
        1000:{
            items:8
        }
    }
})

function openDialog() {
    Avgrund.show( "#default-popup" );
}
function closeDialog() {
    Avgrund.hide();
}