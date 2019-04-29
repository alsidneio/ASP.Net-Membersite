$(function () {
    //lines 3-5 open and close a menu for a specifc atrribute
    $("[data-admin-menu]").hover(function() {
        $('[data-admin-menu]').toggleClass('open');

    });
});