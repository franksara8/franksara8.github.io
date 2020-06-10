
$('button').click(() =>{
    $('ul').append(`<li class="list">`+$('input').val()+`</li>`);
});

$('li').click( () => {
    $('li').css('text-decoration', 'line-through');
});


