const front__swiper = new Swiper('.project__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.project__swiper__pagination',
    },
    navigation: {
        nextEl: '.project__swiper__next',
        prevEl: '.project__swiper__prev',
    },
});

const projectPage__swiper = new Swiper('.project-page__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.project-page__swiper__pagination',
    },
    navigation: {
        nextEl: '.project-page__swiper__next',
        prevEl: '.project-page__swiper__prev',
    },
});



const menuItems = document.querySelectorAll('.mobile-menu__list .menu-item-has-children > a');

menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const parentLi = this.parentElement;
        const submenu = parentLi.querySelector('.sub-menu');

        document.querySelectorAll('.mobile-menu__list .menu-item-has-children.active').forEach(el => {
            if (el !== parentLi) {
                el.classList.remove('active');
                const sub = el.querySelector('.sub-menu');
                if (sub) {
                    sub.style.maxHeight = '0';
                }
            }
        });

        const isActive = parentLi.classList.contains('active');
        if (isActive) {
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
            requestAnimationFrame(() => {
                submenu.style.maxHeight = '0';
            });
            parentLi.classList.remove('active');
        } else {
            parentLi.classList.add('active');
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
        }
    });
});


function openMobileMenu() {
    $('.mobile-menu').addClass('active');
    $('body').addClass('no-scroll');
}

function closeMobileMenu() {
    $('.mobile-menu').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.mobile-menu__close').on('click', closeMobileMenu);

$('.header__menu-btn').on('click', openMobileMenu);


function openPolicy() {
    $('.policy-popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closePolicy() {
    $('.policy-popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.policy-popup__close-btn').on('click', closePolicy);

$('.policy-page__btn').on('click', openPolicy);

function openSort() {
    $('.catalog-page__sort-block__dropdown').toggleClass('active');
    $('.catalog-page__sort-block .sort-button').toggleClass('active');
}

$('.catalog-page__sort-block .sort-button').on('click', function (e) {
    e.stopPropagation();
    openSort();
});

$(document).on('click', function (e) {
    if (!$(e.target).closest('.catalog-page__sort-block').length) {
        $('.catalog-page__sort-block__dropdown').removeClass('active');
        $('.catalog-page__sort-block .sort-button').removeClass('active');
    }
});

$('.catalog-page__sort-block__dropdown .radio-label').on('click', function () {
    const selectedText = $(this).text();
    $('.catalog-page__sort-block .sort-button').text(selectedText);
    $('.catalog-page__sort-block__dropdown').removeClass('active');
    $('.catalog-page__sort-block .sort-button').removeClass('active');
});




function openSortCategory() {
    $('.category-page__sort-block__dropdown').toggleClass('active');
    $('.category-page__sort-block .sort-button').toggleClass('active');
}

$('.category-page__sort-block .sort-button').on('click', function (e) {
    e.stopPropagation();
    openSortCategory();
});

$(document).on('click', function (e) {
    if (!$(e.target).closest('.category-page__sort-block').length) {
        $('.category-page__sort-block__dropdown').removeClass('active');
        $('.category-page__sort-block .sort-button').removeClass('active');
    }
});

$('.category-page__sort-block__dropdown .radio-label').on('click', function () {
    const selectedText = $(this).text();
    $('.category-page__sort-block .sort-button').text(selectedText);
    $('.category-page__sort-block__dropdown').removeClass('active');
    $('.category-page__sort-block .sort-button').removeClass('active');
});






const countBlocks = document.querySelectorAll('.payment-page__product__count-block');

countBlocks.forEach(block => {
    const decrementBtn = block.querySelector('.decrement');
    const incrementBtn = block.querySelector('.increment');
    const input = block.querySelector('input[type="number"]');
    const minValue = parseInt(input.getAttribute('min')) || 1;

    decrementBtn.addEventListener('click', function () {
        let currentValue = parseInt(input.value) || minValue;
        if (currentValue > minValue) {
            input.value = currentValue - 1;
        }
    });

    incrementBtn.addEventListener('click', function () {
        let currentValue = parseInt(input.value) || minValue;
        input.value = currentValue + 1;
    });

    input.addEventListener('input', function () {
        if (parseInt(input.value) < minValue) {
            input.value = minValue;
        }
    });
});