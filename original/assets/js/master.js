

$( document ).ready(function() {

    let isFirstOpen = checkIsFirst();
    if (isFirstOpen){
        loadingEffect();
    }else{
        $('#uz-main').removeClass('d-none');
    }
    swiper();
});





function checkIsFirst(){
    if(sessionStorage.getItem("opened")){
        return false;
    }else {
        sessionStorage.setItem("opened", window.location.pathname);
        return true;
    }
}

function loadingEffect(){
    $('.loading').removeClass('d-none');

    var size = 250;
    var s_size = 0.66 * size;
    var m_size = 0.83 * size;
    var s_resize = ( size - s_size )/2;
    var m_resize = ( size - m_size )/2;
    var image = $('#heart-logo').css('width',size);

    var x = image.offset().left;
    var y = image.offset().top;
    function pulse() {
        image.animate({
            width: s_size, top:x+s_resize,left:y+s_resize
        }, 450, function() {
            image.animate({
                width: size, top:x, left:y
            }, 100, function() {
                image.animate({
                    width: m_size, top:x+m_resize, left:y+m_resize
                }, 70 ,function(){
                    image.animate({
                        width: size, top:x , left:y
                    }, 70, function() {
                        pulse();
                    });
                });
            });
        });
    }

    pulse();
    setInterval(function (){
        $('.loading').addClass('d-none');
        $('#uz-main').removeClass('d-none');
    },1500);
}



function swiper(){
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    });

}



// frenchise options:
$(document).ready(function() {
    $('.uz-select').select2();
});



// (GEREKİRSE) JAVASCRIPT BURANIN AŞAĞISINDA OLACAK

