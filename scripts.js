
// $(document).ready(function(){
    $('.add').click(() =>{
        let val = $('input').val();
        if ( val != '') {
            $('ul').append(`<li class="list">`+$('input').val()+`<div class="buttons"><button class="trashcan"><img src="trashcan.png"></button><button class="tick"><img src="tick.png" alt=""></button></div></li>`);
          
        } else {
            alert ("Please add a valid todo!")
        }
    });
    $('ul').on('click', 'button.trashcan' , function() {
        $(this).parents().eq(1).remove();
    });
    $('ul').on('click', 'button.tick' , function() {
        $(this).parents().eq(1).css('text-decoration', 'line-through');
    });
// });


