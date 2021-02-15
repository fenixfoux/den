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
		if(a>=100&&a<200){
			difference_range = a-100;
			stable_range = 1494;
			range_height_stable = 9; 
			range_height_variable = (range_height_variable*9)/100;
			variable_range = ((stable_range-1384)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else {
			alert("more than 200");
		}
		console.log(calc_result_range);
	});
//дальность текущего диапазона минус дальность следующего диапазона, 
//потом результат делим на 100 чтобы определить сколько за каждый 1метр нужно 
//прибавить к минусуемому числу из дальности текущего диапазона

	function detected_input_range(a){
		if(a>=100&&a<200){
			difference_range = a-100;
			stable_range = 1494;
			range_height_stable = 9; 
			range_height_variable = (range_height_variable*9)/100;
			variable_range = ((stable_range-1384)/100)*difference_range; 
			calc_result_range=stable_range-(range_height_variable+variable_range);
		}else if(a>=200&&a<300){
			difference_range = a-200; 
			stable_range = 1384;
		}else if(a>=300&&a<400){ 
			stable_range = 1260;
		}else if(a>=400&&a<500){ 
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

