//

function detectswipe(el,id) {
  swipe_det = new Object();
  swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
  var min_x = 30;  //min x swipe for horizontal swipe
  var max_x = 30;  //max x difference for vertical swipe
  var min_y = 50;  //min y swipe for vertical swipe
  var max_y = 60;  //max y difference for horizontal swipe
  var direc = 0;
  ele = document.getElementById(el);
  ele.addEventListener('touchstart',function(e){
    var t = e.touches[0];
    swipe_det.sX = t.screenX; 
    swipe_det.sY = t.screenY;
  },false);
  ele.addEventListener('touchmove',function(e){
    e.preventDefault();
    var t = e.touches[0];
    swipe_det.eX = t.screenX; 
    swipe_det.eY = t.screenY;    
  },false);
  ele.addEventListener('touchend',function(e){
    //horizontal detection
    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
      if(swipe_det.eX > swipe_det.sX) direc = 1;
      else direc = -1;
    }
    //vertical detection
    else if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
      if(swipe_det.eY > swipe_det.sY) direc = 0;
      else direc = 0;
    }

    //if (direc != "") {
    //  if(typeof func == 'function') func(el,direc);
    //}
    plusSlides(direc,id)
    
    direc = 0;
    swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
  },false);  
}

//

//Adiciona MODAL dinamicamente
function addModal(id,nimgs) {

	var mod=document.createElement("myModal"+id);
	mod.className = "modal";
	mod.id = "myModal"+id;
	
	var html='<span class="close cursor" onclick="closeModal('+id+')">&times;</span><div class="modal-content">';
	
	for (var i=1;i<=nimgs;i++){		
		html=html+'<div class="mySlides" name="mySlides'+id+'" ><div class="numbertext" style="color:#FF1020">'+i+' / '+nimgs+'</div><img src="imgs/'+id+'/'+i+'.jpg" style="width:100%"></div>';		
	}
	
	html=html+'<a class="prev" onclick="plusSlides(-1,'+id+')">&#10094;</a><a class="next" onclick="plusSlides(1,'+id+')">&#10095;</a><div class="caption-container"><p id="caption'+id+'"></p></div></div>';
	mod.innerHTML=html;
	document.body.appendChild(mod);
	
	detectswipe(mod.id,id);
	
}
valortotal=0;
function addTabRow(id,item,lap,qut,pu,obs,nimgs) {
	var tabela = document.getElementById("tabela");
	var row = document.createElement("tr");
	
	precou=(pu).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',});
	
	row.innerHTML ='<td>'+item+'</td><td>'+lap+'</td><td>'+qut+'</td><td>'+precou+'</td><td>'+obs+'</td><td><img name="img" src="imgs/'+id+'/1.jpg" onclick="openModal('+id+');currentSlide(1,'+id+')" alt="" border=3 height=100 width=100></img></td>'
	tabela.appendChild(row);	
	addModal(id,nimgs)
	valortotal=valortotal+qut*pu
}


//ADICIONA DADOS E TABELA
document.body.innerHTML+= "\
<div style='overflow-x:auto;'>\
<h2>VENDA DE MÓVEIS E ARTIGOS ANTIGOS PARA RETIRADA</h2>\
<p>CONTATO?</p>\
<h2 style='text-align:center'>ITENS DISPONIVEIS</h2>\
  <table border='1' id='tabela'>\
    <tr>\
      <th>ÍTEM</th>\
      <th>LAP(cm)</th>\
      <th>QUANTIDADE</th>\
      <th>PREÇO UNITÁRIO</th>\
      <th>OBS.</th>\
      <th>IMAGENS</th>\
    </tr>\
  </table>\
</div>\
<h2 id='vtotal' style='text-align:center'>MÓVEIS ANTIGOS</h2>"
//


id=1

//1-POLTRONA LUIZ XV
varr=[id,'POLTRONA','80 x 100 x 85',2,600.00,'CONJUNTO LUIS XV PARA SALA',4];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//2-MESA DE CENTRO LUIZ XV
varr=[id,'MESA DE CENTRO','85 x 52 x 52',1,400,'CONJUNTO LUIS XV PARA SALA',3];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//3-SOFA LUIZ XV
varr=[id,'SOFÁ','222 x 107 x 90',1,1200,'CONJUNTO LUIS XV PARA SALA',3];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//4-POLTRONA SALA
varr=[id,'POLTRONA','86 x 88 x 85',6,450,'',5];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//5-MESA CENTRO MADEIRA
varr=[id,'MESA DE CENTRO','72 x 48 x 50',1,200,'',2];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//6-CADEIRA AVULSA
varr=[id,'CADEIRA','60 x 120 x 60',1,400,'',3];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//7-LUSTRE
varr=[id,'LUSTRE','',0,700,'-',5];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//8-LUSTRE CRISTAL
varr=[id,'LUSTRE CRISTAL','18 x 20 x 18',6,300,'',2];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//9-ARMARIO ESCRITORIO
varr=[id,'ARMÁRIO','165 x 168 x 40',1,600,'',2];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//10-BIBLIOTECA
varr=[id,'BIBLIOTECA','365 x 215 x 42',1,1000,'',4];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//11-ESCRIVANINHA
varr=[id,'ESCRIVANINHA','144 x 78 x 80',1,1500,'',3];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//12-CRISTALEIRA
varr=[id,'CRISTALEIRA','140 x 176 x 48',1,2500,'ITENS NÃO INCLUIDOS',4];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//13-MESA SALA DE JANTAR
varr=[id,'MESA','116 x 80 x 230',1,3500,'',4];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//14-CADEIRA MESA , SEM APOIO
varr=[id,'CADEIRA SEM APOIO','48 x 116 x 48',8,300,'',2];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//15-CADEIRA MESA COM APOIO
varr=[id,'CADEIRA','60 x 120 x 56',2,400,'',3];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//16-BUFFET 1P
varr=[id,'BUFFET 1P','104 x 128 x 60',1,1000,'',4];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//17-BUFFET 2P
varr=[id,'BUFFET 2P','230 x 136 x 60','1',2000,'',5];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//18-ESPELHO DE CHÃO
varr=[id,'ESPELHO DE CHÃO','62 x 184 x 50',1,800,'',2];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//19-CRIADO MUDO
varr=[id,'CRIADO MUDO','50 x 55 x 42',4,250,'',3];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//20-PENTEADEIRA
varr=[id,'PENTEADEIRA','130 x 170 x 50',2,1200,'',4];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//21-GAVETEIRO QUARTO
varr=[id,'GAVETEIRO','120 x 100 x 60',2,1000,'',5];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//22-CAMA SOLTEIRO
varr=[id,'CAMA SOLTEIRO','100 x 110 x 210',2,1000,'SEM COLCHÃO',3];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//23-CAMA CASAL
varr=[id,'CAMA CASAL','166 x 146 x 210',2,3000,'COM COLCHÃO',8];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//24-GUARDA ROUPAS 2P
varr=[id,'GUARDA ROUPA 2P','150 x 192 x 66',2,800,'UMA COROA DE UM DOS GUARDA-ROUPA ESTÁ QUEBRADA',2];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;

//25-GUARDA ROUPAS 3P
varr=[id,'GUARDA ROUPA 3P','200 x 192 x 66',2,1200,'UMA COROA DE UM DOS GUARDA-ROUPA ESTÁ QUEBRADA',4];
addTabRow(varr[0],varr[1],varr[2],varr[3],varr[4],varr[5],varr[6]);id++;



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
