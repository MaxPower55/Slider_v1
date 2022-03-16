$(document).ready(function() {
    let position = 0;
    let slidesToShow = 1;
    let slidesToScroll = 1;
    const container = $('.slider__container');
    const track = $('.slider__track');
    const item = $('.slider__item');
    const itemsCount = item.length;
    const btnPrev = $('#btnPrev');
    const btnNext = $('#btnNext');
    let itemWidth = (container.width() / slidesToShow);
    let movePosition = slidesToScroll * itemWidth;

    const slidesToShowIncr = $('#slidesToShowIncr');
    let slidesToShowCount = $('#slidesToShowCount');
    const slidesToShowDecr = $('#slidesToShowDecr');

    const slidesToScrollIncr = $('#slidesToScrollIncr');
    let slidesToScrollCount = $('#slidesToScrollCount');
    const slidesToScrollDecr = $('#slidesToScrollDecr');

    slidesToShowIncr.click(function(){
        slidesToShow++;
        slidesToShowCount.html(slidesToShow);
        checkBtn();
        itemWidthCheck();
    });
    slidesToShowDecr.click(function(){
        slidesToShow--;
        slidesToShowCount.html(slidesToShow);
        checkBtn();
        itemWidthCheck();
    });
    slidesToScrollIncr.click(function(){
        slidesToScroll++;
        slidesToScrollCount.html(slidesToScroll);
        checkBtn();
        return movePosition = slidesToScroll * itemWidth
    });
    slidesToScrollDecr.click(function(){
        slidesToScroll--;
        slidesToScrollCount.html(slidesToScroll);
        checkBtn();
        return movePosition = slidesToScroll * itemWidth
    });

    const itemWidthCheck = () => {
        itemWidth = (container.width() / slidesToShow);
        item.each(function(index, item) {
                $(item).css({
                    minWidth: itemWidth,
            });
        });
    };

    btnPrev.click(function() {
        position += movePosition;
        setPosition();
        checkBtn();
    });

    btnNext.click(function() {
        position -= movePosition;
        setPosition();
        checkBtn();
    });

    const setPosition = () => {
            track.css("transform", "translateX(" + position + "px)");
    };

    const checkBtn = () => {
        btnNext.prop('disabled', position <= -(itemWidth * (itemsCount - slidesToShow)));
        btnPrev.prop('disabled', position >= 0);
        slidesToShowIncr.prop('disabled', slidesToShow >= itemsCount);
        slidesToShowDecr.prop('disabled', slidesToShowCount.text() < 2);
        slidesToScrollIncr.prop('disabled', slidesToScroll >= slidesToShow);
        slidesToScrollDecr.prop('disabled', slidesToScrollCount.text() < 2);
    };

    var bod = $('body');
    bod.click(function() {
        console.log(position);
    });

    checkBtn();
    itemWidthCheck()
});

