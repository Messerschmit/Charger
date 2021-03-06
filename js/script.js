function CountdownTimer(elm, tl, mes) {
    this.initialize.apply(this, arguments);
}
CountdownTimer.prototype = {
    initialize: function (elm, tl, mes) {
        this.elem = document.getElementById(elm);
        this.tl = tl;
        this.mes = mes;
    }, countDown: function () {
        var timer = '';
        var today = new Date();
        var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
        var hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
        var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
        var me = this;

        if ((this.tl - today) > 0) {
            //timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">DAYS</div><span class="number day">'+day+'</span></span>';
            timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">ЧАСЫ</div><span class="number hour">' + hour + '</span></span>:';
            timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">МИНУТЫ</div><span class="number min">' + this.addZero(min) + '</span></span>:<span class="number-wrapper"><div class="line"></div><div class="caption">СЕКУНДЫ</div><span class="number sec">' + this.addZero(sec) + '</span></span>';
            this.elem.innerHTML = timer;
            tid = setTimeout(function () {
                me.countDown();
            }, 10);
        } else {
            this.elem.innerHTML = this.mes;
            return;
        }
    }, addZero: function (num) {
        return ('0' + num).slice(-2);
    }
}
function CDT() {

    // Set countdown limit
    var tl = new Date('2020/01/01 00:00:00');

    // You can add time's up message here
    var timer = new CountdownTimer('CDT', tl, '<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
    timer.countDown();
}
window.onload = function () {
    CDT();
};

$(document).ready(function () {

    function fade() {
        $('#success').fadeOut(2000);
    }
    ;
    setTimeout(fade, 4000);

    var c = 0;

    $('.reviews-list img, .reviews-list strong').click(function () {

        c = $(this).closest('.review-single').index();
        var review = $(this).closest('.review-single');
        $('.review-single img').removeClass('review-active')
        review.find('img').addClass('review-active');
        $('.review-top-img').attr('src', review.find('img').attr('src'));
        $('.review-top-title').text(review.find('strong').text());
        $('.review-top-desc').text(review.find('p').text());
        $('.review-top-text').text(review.find('.review-text').text());
    });

    setInterval(function () {
        $('.reviews-list .review-single').eq(c).find('img').click();
        if (c === $('.reviews-list .review-single').length) {
            c = 0;
        } else {
            c++;
        }
    }, 4000);

    $('.sl-up').hide;
    $('.sl-up').css({"visibility": "hidden"});

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        $('.sl-up').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).addClass("slideUpNormal");
            }
        });
    });
});
