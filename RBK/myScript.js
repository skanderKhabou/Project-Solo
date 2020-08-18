var arr = ['Rayen','Abubakker','Nouha', 'Wajdi' , 'Yasmine' , 'Achraf']  // i have two names for achref  // 
var $body = $('body');
$("body").append('<a href = "index2.html"> Let"s meet HIR </a>')
$(".show").hide();
$("#signin").click(function(event){
	var password = $("#pwd:Password").val();
	var users = $("#user:text").val();
	if (password.length >= 6){
	alert('Happy to see you ' + users );
	$("#logdiv").append("<h3 id = 'next'> Connected as </h3>").append(users)
	event.preventDefault();
	$(".hide").hide();
	$(".show").show();
}
	else {
	alert('please enter 6 characters at least ')
}
})

$("#p1").hide()
$("#1").hover(function(){
	$("#p1").slideToggle();
})

$("#p2").hide()
$("#2").hover(function(){
	$("#p2").slideToggle();
})

$("#p3").hide()
$("#3").hover(function(){
	$("#p3").slideToggle();
})

$("#p4").hide()
$("#4").hover(function(){
	$("#p4").slideToggle();
})

$("#p5").hide()
$("#5").hover(function(){
	$("#p5").slideToggle();
})


$("#hir").click(function(event){
	var mydiv = $('<div></div>')
	for(var i = 0 ; i < arr.length ; i++){
	if($("#yourtext:text").val() === arr[i]){
		mydiv.append('I Don"t KNOW !!')
	}
	var mydiv2 = $('<div></div>')
	if($("#yourtext:text").val() === arr[i]){
		mydiv2.append('Give Me 20 Dinars BLEASE !!')
	}
}

	// else if($("#yourtext:text").val() === 'Nouha' || 'nouha'){
	// 	mydiv.append('I miss You All')
	// }
	// else if($("#yourtext:text").val() === 'Yasmine'){
	// 	mydiv.append('RED PIN !!')
	// }
	// else if($("#yourtext:text").val() === 'Wajdi'){
	// 	mydiv.append('SO ... What .. are ... you ... trying ... to ... Do ')
	// }
	// else if($("#yourtext:text").val() === 'Achraf'){
	// 	mydiv.append('No .. My name is Achraf MOUNIR')
	// }

mydiv.appendTo('body');
mydiv2.appendTo('body')
event.preventDefault();
})

$("#signIcon").click(function(){
	alert("hello")
})