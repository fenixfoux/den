$(document).ready(function(){

	$('#calc').click(function(){
		var a = parseInt(document.getElementById('dist').value);  
		if (isNaN(a)==true) a=0; 
		//var result = a ; 
		document.getElementById('result').innerHTML = result;
		detected_input_range();
	});



	function detected_input_range(a){
		if(a==10){
			alertfunc();
		}else{
			alertfunc2();
		}


	}




function alertfunc(){alert('не равно 10');}
function alertfunc2(){alert('равно 10')}

/*
function alertfunc(){alert();}
alertfunc();

	$('#calc').click(function(){
		var a = parseInt(document.getElementById('a').value);
		var b = parseInt(document.getElementById('b').value);

		if (isNaN(a)==true) a=0;
		if (isNaN(b)==true) b=0;
		var c = a + b;
		console.log(c);
		document.getElementById('result').innerHTML = c;
	});

$(".tabs_menu li").click(function() { // Событие нажатия на элемент меню вкладок
		if (!$(this).hasClass("active")) { // Проверка, не нажали ли мы на уже активный пункт
			var i = $(this).index(); // Получаем порядковый номер нажатого пункта, отстче идет от 0 (0,1,2)
			$(".tabs_menu li.active").removeClass("active"); // Удаляем активный класс у прошлого пункта меню
			$(".tabs .active").hide().removeClass("active"); // Скрываем и удаляем активный класс у прошлого контейнера с содержимым
			$(this).addClass("active"); // Добавляем нажатому пункту меню активный класс
			$($(".tabs").children(".info")[i]).fadeIn(1000).addClass("active"); // Показываем и добавляем активный класс соответствующему контейнеру
		}
	});
/*
	var altitude;
	var distance = $('#distance').val();
	var ungle;

  $(".check").click(function(){
    console.log(distance);
    alert(distance); 
  });
 
  */
});

