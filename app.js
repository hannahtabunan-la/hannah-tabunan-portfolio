$(document).ready(
    function() {
        $('.hamburger').click(function() {
            $('.hamburger').toggleClass('active');
            $('.nav-list ul').toggleClass('active');
        })
    }
)