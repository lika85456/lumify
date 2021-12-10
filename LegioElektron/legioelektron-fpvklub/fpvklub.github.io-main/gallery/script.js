var btn = $('#button');
btn.addClass('show');

btn.on('click', function(e) {
    e.preventDefault();
    $(location).prop('href', '../index.html')
});