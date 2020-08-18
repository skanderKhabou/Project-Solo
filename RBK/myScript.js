var arr = [{name:'rayen',fav:'I don"t know'},
{name:'abubakker',fav:'Give me 20 Dinars'},
{name:'wajdi',fav:' So.... What...Are.....You...Trying...To....DO'},
{name:'nouha',fav:'I miss you all '},
{name:'achraf',fav:'No my name is Achraf MOUNIR'},
{name:'yasmine',fav:'Who"s late , RED PIN'}
]  // i have two names for achref  // 


var $body = $('body');
$(".show").hide();
$("#signin").click(function(event){
	var password = $("#pwd:Password").val();
	var users = $("#user:text").val();
	if (password.length >= 6){
	alert('Happy to see you ' + users );
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

$("#p6").hide()
$("#6").hover(function(){
	$("#p6").slideToggle();
})


$("#hir").click(function(event){
	var mydiv = $('<div></div>')
	var count = 0

	for(var i = 0 ; i < arr.length ; i++){
	
	if($("#yourtext:text").val() === arr[i]["name"]){
		$("#message").html("")
		mydiv.append(arr[i]["fav"])
		count++
	}
}
	if( count == 0){
		$("#message").html("")
		mydiv.append('I Don"t KNOW !!')
	}


mydiv.appendTo($('#message'));
event.preventDefault();

})

$("#signIcon").click(function(){
	alert("hello")
})

$("#title").text("Welcome To RBK " + users)