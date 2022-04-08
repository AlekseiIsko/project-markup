document
    .querySelector('.menu-button')
    .addEventListener('click', function () {
        var menuOpened = document.querySelector('header').classList.contains('show-menu');
        console.log(menuOpened);
        if(menuOpened) {
            console.log(menuOpened);
            document.querySelector('header').classList.remove('show-menu');
        } else {
            console.log(menuOpened);
            document.querySelector('header').classList.add('show-menu');
        }
    });