function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

    document.querySelector('.img1').addEventListener('click', function(){
        imgSlider('./assets/img1.png');
        changeCircleColor('#017143')
    });

    document.querySelector('.img2').addEventListener('click', function(){
        imgSlider('./assets/img2.png');
        changeCircleColor('#EB7495');
    });

    document.querySelector('.img3').addEventListener('click', function(){
        imgSlider('./assets/img3.png');
        changeCircleColor('#D752B1');
    });



