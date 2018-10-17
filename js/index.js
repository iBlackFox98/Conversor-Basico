const conversor= document.querySelector('#conversor');


conversor.addEventListener('change',()=> {

	let cbxMeasures=document.querySelectorAll('.cbxMeasure')

	let template;
		switch(parseInt(conversor.value)){

		case 1:
			template=templateTemperature();
			break;
		case 2: 
			template=templateLongitude();
			break;
		case 3:
			template=templateTime();
			break;

		default:
			template=''


	}

	for (let i = 0; i< cbxMeasures.length ; i++) {
		cbxMeasures[i].innerHTML=template;
		cbxMeasures[i].value=cbxMeasures[i].options[i].value;
	}

});


const templateTemperature = function(){
	return `<option value="gc"> Grados Celsius </option>
			<option value="gf"> Grados Fahrenheit </option>`
}

const templateLongitude=function(){
	return `<option value="cm"> Centimetros </option>
			<option value="mt"> Metros </option>`
}

const templateTime=function(){
	return `<option value="seg"> Segundos </option>
			<option value="min"> Minutos </option>`
}

const calc=function (e){
	let cbxMeasures=document.querySelectorAll('.cbxMeasure')
	let selectedFunction=`${cbxMeasures[0].value}To${cbxMeasures[1].value}`
	let result;
	switch(selectedFunction)
	{
		case 'gfTogc':
			result=gfTogc(parseFloat(e.value))
			break;
		case 'gcTogf':
			result=gcTogf(parseFloat(e.value))
			break;

		case 'mtTocm':
			result=mtTocm(parseFloat(e.value))
			break;

		case 'cmTomt':
			result=cmTomt(parseFloat(e.value))
			break

		case 'minToseg':
			result=minToseg(parseFloat(e.value))
			break;

		case 'segTomin':
			result=segTomin(parseFloat(e.value))
			break;

		default:
			result='';
	}
	let valor2=document.querySelectorAll('.result')

	if (result==='') {
		valor2[1].value=valor2[0].value;
	}
	else
	{

		valor2[1].value=result

	}
}

const gfTogc=function(temperatura){
	return 5*(temperatura-32)/9;
}

const gcTogf=function(temperatura){
	return 9*(temperatura/5)+32;
}

const mtTocm=function(distancia){
	return distancia*100;
}

const cmTomt= function(distancia){
	return distancia/100;
}

const minToseg=function(tiempo){
	return tiempo*60;
}

const segTomin=function(tiempo){
	return tiempo/60;
}