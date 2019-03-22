var toggle_intro_text = el => $(el[0].children[0].children[2]).toggle();

$(document).ready(function() {
    $(".blog-card").mouseover(function() {
        toggle_intro_text($(this));
    }).mouseout(function(){
        toggle_intro_text($(this));
    });
});