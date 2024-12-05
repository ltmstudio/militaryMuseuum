$(document).ready(function () {

    $('.poem-main-block-item').slick({
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 2000,
        slidesToShow: 6,
        // slidesToScroll: 4,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        touchThreshold: 10,
    });
    $('.military-slider').slick({
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '0',
        swipeToSlide: true,
        swipe: 5,
        cssEase:'linear',
        useCSS: 'false',
        touchThreshold:100,
    });

    var $slider = $('.heroes-slider').slick({
        variableWidth: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 3000,
        slidesToShow: 7,
        slidesToScroll: 3,
        autoplaySpeed: 800,
        centerMode: true,
        centerPadding: '0',
        swipeToSlide: true,
        touchThreshold: 10,
    });

    function resetAllCardsRotation() {
        $('.card-container').removeClass('active');
        $('.card').css('transition', 'none');
        $('.card').css('transform', 'rotateY(0deg)');
    }

    function rotateCenterCard() {
        setTimeout(function () {
            $('.card').css('transition', 'transform 1.5s ease');
            var $centerCardContainer = $('.slick-center');
            $centerCardContainer.addClass('active');
            $centerCardContainer.find('.card').css('transform', 'rotateY(90deg)');
        }, 50);
    }

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        resetAllCardsRotation();
        rotateCenterCard();
    });

    $slider.on('swipe', function (event, slick, direction) {
        resetAllCardsRotation();
        rotateCenterCard();
    });

    $('.card-container').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var index = $this.data('slick-index');
        $slider.slick('slickGoTo', index);
        resetAllCardsRotation();
        rotateCenterCard();

        var href = $(this).data('href');
        setTimeout(function () {
            window.location.href = href;
        }, 1500);
    });

    rotateCenterCard();

    $('.poem-block-item-btn').on('click', function (event) {
        event.stopPropagation();

        var $this = $(this);
        var $container = $this.closest('.poem-main-block-cover').find('.container-for-poem');
        var $img = $this.find('.poem-item-img').clone().addClass('slide-in'); // Клонируем и добавляем класс анимации
        var $infoBlock = $this.find('.poem-info-block').clone().addClass('slide-in'); // Клонируем и добавляем класс анимации

        // Скрываем оригинальное изображение с плавным исчезновением для блоков с классом 'mb-info'
        if ($this.hasClass('mb-info')) {
            $img.hide();
            // $this.find('.poem-item-img').fadeOut(300); // Плавно скрываем изображение
        }

        // Удаляем предыдущие элементы с анимацией
        $('.container-for-poem').children().addClass('slide-out').delay(300).queue(function (next) {
            $(this).remove();
            next();
        });

        // Добавляем новые элементы в контейнер
        $container.append($img).append($infoBlock);

        // Показываем блок со стихом
        $infoBlock.slideDown(300);
    });

    // Восстанавливаем оригинальное изображение с плавным появлением при закрытии для блоков с классом 'mb-info'
    $(document).on('click', function () {
        $('.container-for-poem').children().addClass('slide-out').delay(500).queue(function (next) {
            $(this).remove();
            next();

            // Восстанавливаем оригинальные изображения с плавным появлением для всех блоков с классом 'mb-info'
            $('.poem-block-item-btn.mb-info').find('.poem-item-img').fadeIn(200); // Плавно показываем изображение
        });
    });




    setTimeout(function () {
        $('.text-container').fadeIn(1000);
    }, 200);
    setTimeout(function () {
        $('.text-container-big').fadeIn(1000);
    }, 1000);
    setTimeout(function () {
        $('.text-container-min').fadeIn(1000);
    }, 1000);

    // setTimeout(function () {
    $('.poem-main-block').fadeIn(2000);
    // }, 1000);


    $('.tt').hide();
    $('.tt').fadeIn(1000);

   
});
