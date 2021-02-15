$(document).ready(function(){
	var a;
	var b;
	var check = true;
	var needable_range;
	var variable_range = 0;// разница дальностей между диапазонами деленная на 100=насколько больше единиц за каждый метр минусуется
	var stable_range = 0;
	var difference_range; //введенная дальность минус меньшая дальность в диапазоне дальностей = колличество метров 1494-1384 получаем сколько один метр
	var range_height_variable;//поправка по высоте
	var range_height_stable;
	$('#calc_range_0').click(function(){ 
		a = parseInt(document.getElementById('dist').value);  
		if (isNaN(a)==true) a=0; 
		range_height_variable = parseInt(document.getElementById('dist_height').value);  
		if (isNaN(b)==true) b=0; 
		var result = a ; 
		var result2 = b;
		document.getElementById('result').innerHTML = result;
		document.getElementById('result2').innerHTML = result2;
		//detected_input_range();
		if(a<100){
			alert("тип снаряда Charge_0 не может лететь меньше 100метров");
		}else if(a>=100&&a<200){
			difference_range = a-100;
			range_height_stable = 9; 
			stable_range = 1494;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1384)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=200&&a<300){
			difference_range = a-200;
			range_height_stable = 20; 
			stable_range = 1384;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1260)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=300&&a<400){
			difference_range = a-300;
			range_height_stable = 36; 
			stable_range = 1260;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1105)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else {
			alert("тип снаряда Charge_0 не может лететь дальше 400метров");
		}
		console.log(calc_result_range);
	});

	$('#calc_range_1').click(function(){ 
		a = parseInt(document.getElementById('dist').value);  
		if (isNaN(a)==true) a=0; 
		range_height_variable = parseInt(document.getElementById('dist_height').value);  
		if (isNaN(b)==true) b=0; 
		var result = a ; 
		var result2 = b;
		document.getElementById('result').innerHTML = result;
		document.getElementById('result2').innerHTML = result2; 
		if(a<300){
			alert("тип снаряда Charge_1 не может лететь меньше 300метров")
		}else if(a>=300&&a<400){
			difference_range = a-300;
			range_height_stable = 4; 
			stable_range = 1488;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1450)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=400&&a<500){
			difference_range = a-400;
			range_height_stable = 5; 
			stable_range = 1450;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1410)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=500&&a<600){
			difference_range = a-500;
			range_height_stable = 7; 
			stable_range = 1410;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1369)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=600&&a<700){
			difference_range = a-600;
			range_height_stable = 8; 
			stable_range = 1369;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1327)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=700&&a<800){
			difference_range = a-700;
			range_height_stable = 10; 
			stable_range = 1327;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1282)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=800&&a<900){
			difference_range = a-800;
			range_height_stable = 13; 
			stable_range = 1282;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1234)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=900&&a<1000){
			difference_range = a-900;
			range_height_stable = 16; 
			stable_range = 1234;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1182)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1000&&a<1100){
			difference_range = a-1000;
			range_height_stable = 20; 
			stable_range = 1182;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1123)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1100&&a<1200){
			difference_range = a-1100;
			range_height_stable = 26; 
			stable_range = 1123;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1053)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1200&&a<1300){
			difference_range = a-1200;
			range_height_stable = 36; 
			stable_range = 1053;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-960)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}
		else {
			alert("тип снаряда Charge_0 не может лететь дальше 1300метров");
		}
		console.log(calc_result_range);
	});

	$('#calc_range_2').click(function(){ 
		a = parseInt(document.getElementById('dist').value);  
		if (isNaN(a)==true) a=0; 
		range_height_variable = parseInt(document.getElementById('dist_height').value);  
		if (isNaN(b)==true) b=0; 
		var result = a ; 
		var result2 = b;
		document.getElementById('result').innerHTML = result;
		document.getElementById('result2').innerHTML = result2; 
		if(a<300){
			alert("тип снаряда Charge_1 не может лететь меньше 300метров")
		}else if(a>=500&&a<600){
			difference_range = a-500;
			range_height_stable = 2; 
			stable_range = 1492;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1470)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=600&&a<700){
			difference_range = a-600;
			range_height_stable = 3; 
			stable_range = 1470;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1447)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=700&&a<800){
			difference_range = a-700;
			range_height_stable = 3; 
			stable_range = 1447;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1424)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=800&&a<900){
			difference_range = a-800;
			range_height_stable = 3; 
			stable_range = 1424;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1401)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=900&&a<1000){
			difference_range = a-900;
			range_height_stable = 4; 
			stable_range = 1401;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1377)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1000&&a<1100){
			difference_range = a-1000;
			range_height_stable = 5; 
			stable_range = 1377;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1353)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1100&&a<1200){
			difference_range = a-1100;
			range_height_stable = 5; 
			stable_range = 1353;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1328)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1200&&a<1300){
			difference_range = a-1200;
			range_height_stable = 6; 
			stable_range = 1328;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1302)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1300&&a<1400){
			difference_range = a-1300;
			range_height_stable = 7; 
			stable_range = 1302;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1275)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1400&&a<1500){
			difference_range = a-1400;
			range_height_stable = 8; 
			stable_range = 1275;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1248)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1500&&a<1600){
			difference_range = a-1500;
			range_height_stable = 9; 
			stable_range = 1248;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1218)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1600&&a<1700){
			difference_range = a-1600;
			range_height_stable = 10; 
			stable_range = 1218;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1188)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1700&&a<1800){
			difference_range = a-1700;
			range_height_stable = 11; 
			stable_range = 1188;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1155)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1800&&a<1900){
			difference_range = a-1800;
			range_height_stable = 13; 
			stable_range = 1155;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1119)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=1900&&a<2000){
			difference_range = a-1900;
			range_height_stable = 15; 
			stable_range = 1119;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1080)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=2000&&a<2100){
			difference_range = a-2000;
			range_height_stable = 19; 
			stable_range = 1080;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-1035)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=2100&&a<2200){
			difference_range = a-2100;
			range_height_stable = 23; 
			stable_range = 1035;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-981)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=2200&&a<2300){
			difference_range = a-2200;
			range_height_stable = 31; 
			stable_range = 981;
			range_height_variable = (range_height_variable*range_height_stable)/100;
			variable_range = ((stable_range-909)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}
		else {
			alert("тип снаряда Charge_0 не может лететь дальше 1300метров");
		}
		console.log(calc_result_range);
	});
//дальность текущего диапазона минус дальность следующего диапазона, 
//потом результат делим на 100 чтобы определить сколько за каждый 1метр нужно 
//прибавить к минусуемому числу из дальности текущего диапазона, так же умножаем стабильную 
//дальность изза разницы высот на разницу высот и делим на 100 чтобы узнать 


/*

	function detected_input_range(a){
		if(a>=100&&a<200){
			difference_range = a-100;
			range_height_stable = 9; 
			stable_range = 1494;
			range_height_variable = (range_height_variable*9)/100;
			variable_range = ((stable_range-1384)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=200&&a<300){
			difference_range = a-200; 
			stable_range = 1384;
		}else if(a>=300&&a<400){ 
			difference_range = a-300; 
			stable_range = 1260;
		}else if(a>=400&&a<500){ 
			difference_range = a-400; 
			stable_range = 1105;
		}
		return(variable_range);

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

