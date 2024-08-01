$(document).ready(function(){
    $('form').on('submit', function(event){
        event.preventDefault();

        let idInput = $('#task-input');
        let valueInput = idInput.val();

        if(valueInput){
            let newItem = $('<li class="tarefa">' + valueInput + '</li>');
            $('ul').append(newItem.hide().fadeIn(500));
            idInput.val('');

            let h2 = $('h2');
            if (h2.css('display') === 'none') {
                h2.hide().css('display', 'block').fadeIn(500);
            }
        }
    });

    $('ul').on('click', 'li', function() {
        if ($(this).css('text-decoration-line') === 'line-through') {
            $(this).fadeOut(500, function() {
                $(this).remove();
                if ($('ul').children('li').length === 0){
                    $('h2').css('display', 'none');
                }
            });
        } else {
            $(this).css({
                'text-decoration': 'line-through',
                'color': 'red'
            });
        }
    });
});
