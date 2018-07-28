var lis = $("li");
var spans = $("span");
var input = $("input[type='text']");
var ul = $("ul");
var icon = $("#icon");

// check off todos by clicking
ul.on("click", "li", function() {
	$(this).toggleClass("completed");
});

ul.on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

input.keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		ul.append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
})

icon.click(function() {
	input.fadeToggle();
})