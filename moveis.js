
//Adiciona MODAL dinamicamente
function addModal(id,arr) {

	var mod=document.createElement("myModal"+id);
	mod.className = "modal";
	mod.id = "myModal"+id;
	
	var html='<span class="close cursor" onclick="closeModal('+id+')">&times;</span><div class="modal-content">';
	
	for (var i=1;i<=arr.length;i++){		
		html=html+'<div class="mySlides" name="mySlides'+id+'" ><div class="numbertext">'+i+' / '+arr.length+'</div><img src="imgs/'+id+'/'+vimg[i-1]+'" style="width:100%"></div>';		
	}
	
	html=html+'<a class="prev" onclick="plusSlides(-1,'+id+')">&#10094;</a><a class="next" onclick="plusSlides(1,'+id+')">&#10095;</a><div class="caption-container"><p id="caption'+id+'"></p></div></div>';
	mod.innerHTML=html;
	document.body.appendChild(mod);
	
}
valortotal=0;
function addTabRow(id,item,lap,qut,pu,obs,vimg) {
	var tabela = document.getElementById("tabela");
	var row = document.createElement("tr");
	
	precou=(pu).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',});
	
	row.innerHTML ='<td>'+item+'</td><td>'+lap+'</td><td>'+qut+'</td><td>'+precou+'</td><td>'+obs+'</td><td><img name="img" src="imgs/'+id+'/'+vimg[0]+'" onclick="openModal('+id+');currentSlide(1,'+id+')" alt="" border=3 height=100 width=100></img></td>'
	tabela.appendChild(row);	
	addModal(id,vimg)
	valortotal=valortotal+qut*pu
}



id=1

//1-POLTRONA LUIZ XV
varr=[id,'POLTRONA','80 x 100 x 85',2,600.00,'CONJUNTO LUIS XV PARA SALA'];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//2-MESA DE CENTRO LUIZ XV
varr=[id,'MESA DE CENTRO','85 x 52 x 52',1,200,'CONJUNTO LUIS XV PARA SALA'];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//3-SOFA LUIZ XV
varr=[id,'SOFÁ','222 x 107 x 90',1,900,'CONJUNTO LUIS XV PARA SALA'];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//4-POLTRONA SALA
varr=[id,'POLTRONA','86 x 88 x 85',6,450,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//5-MESA CENTRO MADEIRA
varr=[id,'MESA DE CENTRO','72 x 48 x 50',1,100,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//6-CADEIRA AVULSA
varr=[id,'CADEIRA','60 x 120 x 60',1,300,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//7-LUSTRE
varr=[id,'LUSTRE','',3,700,'medir'];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//8-LUSTRE CRISTAL
varr=[id,'LUSTRE CRISTAL','',6,500,'medir'];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//9-ARMARIO ESCRITORIO
varr=[id,'ARMÁRIO','165 x 168 x 40',1,300,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//10-BIBLIOTECA
varr=[id,'BIBLIOTECA','365 x 215 x 42',1,1000,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//11-ESCRIVANINHA
varr=[id,'ESCRIVANINHA','144 x 78 x 80',1,1500,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//12-CRISTALEIRA
varr=[id,'CRISTALEIRA','140 x 176 x 48',1,1500,'com/sem itens'];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//13-MESA SALA DE JANTAR
varr=[id,'MESA','116 x 80 x 230',1,2500,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//14-CADEIRA MESA , SEM APOIO
varr=[id,'CADEIRA SEM APOIO','48 x 116 x 48',8,230,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//15-CADEIRA MESA COM APOIO
varr=[id,'CADEIRA','60 x 120 x 56',2,300,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//16-BUFFET 1P
varr=[id,'BUFFET 1P','104 x 128 x 60',1,1000,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//17-BUFFET 2P
varr=[id,'BUFFET 2P','230 x 136 x 60','1',1500,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//18-ESPELHO DE CHÃO
varr=[id,'ESPELHO DE CHÃO','62 x 184 x 50',1,800,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//19-CRIADO MUDO
varr=[id,'CRIADO MUDO','50 x 55 x 42',4,170,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//20-PENTEADEIRA
varr=[id,'PENTEADEIRA','130 x 170 x 50',2,800,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//21-GAVETEIRO QUARTO
varr=[id,'GAVETEIRO','120 x 100 x 60',2,600,''];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//22-CAMA SOLTEIRO
varr=[id,'CAMA SOLTEIRO','100 x 110 x 210',2,300,'sem colchão'];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//23-CAMA CASAL
varr=[id,'CAMA CASAL','166 x 146 x 210',2,700,'com colchão'];
vimg=['1.JPG','2.JPG','3.JPG','4.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//24-GUARDA ROUPAS 2P
varr=[id,'GUARDA ROUPA 2P','150 x 192 x 66',2,300,'coroa, borboletas, puxador, quebradas, desmontar?'];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;

//25-GUARDA ROUPAS 3P
varr=[id,'GUARDA ROUPA 3P','200 x 192 x 66',2,500,'coroa, borboletas, puxador, quebradas, desmontar?'];
vimg=['1.JPG'];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],vimg);id++;



//ADIÇÃO DO VALOR TOTAL
document.getElementById("vtotal").textContent='VALOR TOTAL = ' +(valortotal).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',});


var slideIndex = 1;
	
function openModal(id) {
  slideIndex = 1;
  document.getElementById('myModal'+id).style.display = "block";
}

function closeModal(id) {
  slideIndex = 1;
  document.getElementById('myModal'+id).style.display = "none";
}


//showSlides(slideIndex);

function plusSlides(n,id) {
  showSlides(slideIndex += n,id);
}

function currentSlide(n,id) {
  showSlides(slideIndex = n,id);
}

function showSlides(n,id) {
  var i;
  var slides = document.getElementsByName("mySlides"+id);
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
