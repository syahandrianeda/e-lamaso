function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  };
  return i;
}  
function deleteZero(i) {
  if (i.slice(0,1)=="0") {
    i = i.slice(1,2);
  };
  return i;
}  
function insert_value() {
    
	$("#re").css("visibility","hidden");
	 document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');

	var tgl = new Date();
	var stgl = tgl.getDate();
	var xbln = tgl.getMonth()+1;
	var sbln = addZero(xbln);
	
	var sthn = tgl.getFullYear();
	var idok = stgl+""+sbln+""+sthn;
	
var id1= idok;	//$("#id").val();
	var name= $("#name").val();
	var kelasx = $("#kelas").val();
	var resumex = $("#fileContent").val();
	
	
    //var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&action=insert";
	var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&kelas="+kelasx+"&action=insert";
  
    var request = jQuery.ajax({
     crossDomain: true,
     url: url ,
     method: "GET",
     dataType: "jsonp"
    });


	 //document.addEventListener("DOMContentLoaded", loadedd, false);
  }
function ctrlq(e) {
  
	
	$("#re").html(e.result);
	$("#honeypot").val(e.result);
	$("#re").css("visibility","visible");
	
	//read_value();
	
	
	 var keterangan = document.getElementById("re").innerHTML;
  var isiket="";
  
  if (keterangan==="Belum Absen"){
	isiket= " Upload Poto dan Klik <b>Saya Hadir</b> (keluar setelah upload poto)";
		taruhinput();
		document.getElementById("tempatnisn").style.display = "block";
	}else {isiket="";
			document.getElementById("tempatnisn").style.display = "none";
			}
	document.getElementById("okok").innerHTML=isiket;
	read_value();
  }
function ctrlqq(e) {
  
	
	$("#resultguru").html(e.result);
	$("#resultguru").css("visibility","visible");
	
	
}
function baca_rekap() {

$("#re").css("visibility","hidden");
   
   document.getElementById("loader").style.visibility = "visible";
 var url = script_url+"?action=rekap";

$.getJSON(url, function (json) {

    // Set the variables from the results array
   
   
  

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
		var att = table.setAttribute("class","biasaa-table");
		

        var header = table.createTHead();
		var row = header.insertRow(0);     
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
	
		cell1.innerHTML = "<b>Kode Tanggal</b>";
		cell2.innerHTML = "<b>Name</b>";
		cell3.innerHTML = "<b>Waktu Absen</b>";
		cell4.innerHTML = "<b>Kelas</b>";
		cell5.innerHTML = "<b>Poto</b>";
        
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {

            tr = table.insertRow(-1);
				var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = "<b id='rekap_id"+i+"'>"+json.records[i].id+"</b>";
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = "<b id='rekap_nama"+i+"'>"+json.records[i].name+"</b>";
				tabCell = tr.insertCell(-1);
				var tgl = json.records[i].Time_Stamp;;
				var tglasal = new Date(tgl);
				var xtahun = tglasal.getFullYear();
				var xbulan = addZero(tglasal.getMonth()+1);
				var xtanggal = addZero(tglasal.getDate());
				var jamasal = tglasal.getHours();
				var menitasal = tglasal.getMinutes();
				var detikasal = tglasal.getMinutes();
				var xjam = addZero(jamasal);
				var xmenit = addZero(menitasal);
				var xdetik = addZero(detikasal);
				tabCell.innerHTML ="<b id='rekap_waktuabsen"+i+"'>Tgl. " + xtanggal + "/" + xbulan + "/" + xtahun  + " Pkl. " + xjam  + ":" + xmenit  + ":" + xdetik+"</b>";  //;
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = "<b id='rekap_kelas"+i+"'>"+json.records[i].kelas+"</b>";
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = "<b id='rekap_poto"+i+"'><a href='"+json.records[i].fileContent+"' target='_blank'>Poto</a></b>";
            }
      

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        //divContainer.innerHTML = "";
        divContainer.appendChild(table);
		document.getElementById("loader").style.visibility = "hidden";
		//$("#re").css("visibility","visible");
		document.getElementById("infoabsen").style.display="none";
		document.getElementById("tempatnisn").style.display="none";
	
		document.getElementById("jumlahbaris").innerHTML=json.records.length
    });
	}
function read_value() {
urlaction();
$("#re").css("visibility","hidden");
   
   document.getElementById("loader").style.visibility = "visible";
 var url = script_url+"?action=read";

$.getJSON(url, function (json) {

    // Set the variables from the results array
   
   
  
        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

		

        var header = table.createTHead();
		var row = header.insertRow(0);     
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);
		var cell7 = row.insertCell(6);
	
		cell1.innerHTML = "<b>No.</b>";
		cell2.innerHTML = "<b>Nama</b>";
		cell3.innerHTML = "<b>Tempat Lahir</b>";
		cell4.innerHTML = "<b>Tanggal Lahir</b>";
		cell5.innerHTML = "<b>Nama Ibu</b>";
		cell6.innerHTML = "<b>NISN</b>";
		cell7.innerHTML = "<b>Kelas Saat ini</b>";
		
        var lili ="";
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {

            tr = table.insertRow(-1);
				var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].ID;
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = "<b id='nama"+  json.records[i].ID + "'>" + json.records[i].NAME + "</b>";
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = "<b id='tempatlahir"+  json.records[i].ID + "'>" + json.records[i].tempatlahir + "</b>";
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = "<b id='tanggallahir"+  json.records[i].ID + "'>" + json.records[i].tanggallahir + "</b>";
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = "<b id='namaibu"+  json.records[i].ID + "'>" +  json.records[i].namaibu + "</b>";
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML =  "<b id='nisn"+  json.records[i].ID + "'>" + json.records[i].nisn + "</b>";
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML =  "<b id='kelas"+  json.records[i].ID + "'>" + json.records[i].kelassaatini + "</b>";
// berhasil ini:  

lili += "<li><p oncli"+"ck='cek"+"data("+json.records[i].ID+")'>"+	json.records[i].NAME + " (Kelas " + json.records[i].kelassaatini + ")</p></li>";
            }
		document.getElementById("myUL").innerHTML = lili;

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showDataa");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
		//document.getElementById("showDataa").style.visibility = "hidden";
		document.getElementById("loader").style.visibility = "hidden";
		document.getElementById("myInput").style.display = "block";
		document.getElementById("infoabsen").style.display = "block";
		$("#re").css("visibility","visible");
		
    });
	}
function cekdata(id){
document.getElementById("ceknama").innerHTML = document.getElementById("nama" + id).innerHTML ;
document.getElementById("ceknisn").innerHTML = document.getElementById("nisn" + id).innerHTML ;
document.getElementById("cekkelas").innerHTML = document.getElementById("kelas" + id).innerHTML ;
document.getElementById("myUL").style.display = "none";

taruhinput();
insert_value();
}
function UploadFile(){

  //define the width to resize e.g 600px
  var resize_width = 150;//without px

  //get the image selected
  var item = document.querySelector('#attach').files[0];

  //create a FileReader
  var reader = new FileReader();

  //image turned to base64-encoded Data URI.
  reader.readAsDataURL(item);
  reader.name = item.name;//get the image's name
  reader.size = item.size; //get the image's size
  reader.onload = function(event) {
    var img = new Image();//create a image
    img.src = event.target.result;//result is base64-encoded Data URI
    img.name = event.target.name;//set name (optional)
    img.size = event.target.size;//set size (optional)
    img.onload = function(el) {
      var elem = document.createElement('canvas');//create a canvas

      //scale the image to 600 (width) and keep aspect ratio
      var scaleFactor = resize_width / el.target.width;
      elem.width = resize_width;
      elem.height = el.target.height * scaleFactor;

      //draw in canvas
      var ctx = elem.getContext('2d');
      ctx.drawImage(el.target, 0, 0, elem.width, elem.height);

      //get the base64-encoded Data URI from the resize image
      var srcEncoded = ctx.canvas.toDataURL(el.target, 'image/jpg', 0);

      //assign it to thumb src
      document.querySelector('#imgtes').src = srcEncoded;
	  document.gformdd.fileContent.value = srcEncoded;
	document.getElementById("formidentitas").style.display="block";
      /*Now you can send "srcEncoded" to the server and
      convert it to a png o jpg. Also can send
      "el.target.name" that is the file's name.*/

    }
  }
}
function taruhinput(){
	var tgl = new Date();
	var stgl = tgl.getDate();
	var xtgl = addZero(stgl);
	var xbln = tgl.getMonth()+1;
	var sbln = addZero(xbln);
	
	var sthn = tgl.getFullYear();
	var idok = stgl+""+sbln+""+sthn;
var idinput = idok;	
var namainput = document.getElementById("ceknama").innerHTML;
var kelasinput = document.getElementById("cekkelas").innerHTML;
//var resumeinput = document.getElementById("fileContent").value;
document.gformdd.id.value = idinput;
document.gformdd.name.value = namainput;
document.gformdd.kelas.value = kelasinput;
//document.gformdd.fileContentt.value = resumeinput;
var hadirx=document.getElementById("slct_kehadiran")
var dipilihhadirx = hadirx.selectedIndex;
var namakehadiran = hadirx[dipilihhadirx].value;
document.gformdd.kehadiran.value =  namakehadiran;
document.getElementById("namapoto").innerHTML =  namainput  ;



}
function gantikehadiran(){

var hadirx=document.getElementById("slct_kehadiran");
var statuspoto=document.getElementById("namafileatach");
var tombol=document.getElementById("tombolsayahadir");
var dipilihhadirx = hadirx.selectedIndex;
var namakehadiran = hadirx[dipilihhadirx].value;
document.gformdd.kehadiran.value =  namakehadiran;
if(namakehadiran==="Hadir" ){statuspoto.innerHTML="Silakan Poto diri dengan berseragam";tombol.innerHTML="Saya Hadir"};
if(namakehadiran==="Sakit"){statuspoto.innerHTML="Silakan Poto Surat Keterangan Sakit<br/>dari dokter Puskesmas/Faskes/Rumah Sakit";tombol.innerHTML="Saya Sakit"};
if(namakehadiran==="Ijin"){statuspoto.innerHTML="Silakan Poto Surat Ijin <br/>disertai tulisan keterangan";tombol.innerHTML="Saya Ijin"};


}
function urlaction(){   
    document.gformdd.setAttribute("action", script_url); 
}
function myFunctionn() {
document.getElementById("myUL").style.display="none";
}
function myFunction() {
document.getElementById("myUL").style.display="block";
     var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}
function jsonrekapperrombel(){
$("#re").css("visibility","hidden");
   
   document.getElementById("loader").style.visibility = "visible";
   
var btn = "";   
var table ="";
var tambahdiv = "";
var tambahtabel = "";
		
 var url = script_url+"?action=rekap";

$.getJSON(url, function (json) {

    // Set the variables from the results array
   
   
  for (var j = 0; j < namarombel.length; j++) {
		//var btn += document.createElement("div");
		btn = document.createElement("div");
  btn.innerHTML = "Kelas " + namarombel[j] ;
  

        // CREATE DYNAMIC TABLE.
        //var table = document.createElement("table");
		table = document.createElement("table");
		var atttt = table.setAttribute("class","biasaa-table");
		

        var header = table.createTHead();
		var row = header.insertRow(0);     
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);

	
		cell1.innerHTML = "<b>Nama Siswa</b>";
		cell2.innerHTML = "<b>Poto</b>";
		cell3.innerHTML = "<b>Waktu Absen</b>";
        
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {
				if (json.records[i].kelas == namarombel[j]){
								tr = table.insertRow(-1);
									var tabCell = tr.insertCell(-1);
				tabCell.setAttribute("onclick","hadirsayabulan('"+json.records[i].name+"')");
				tabCell.setAttribute("style","cursor:pointer");
																
									tabCell.innerHTML = json.records[i].name;
									tabCell = tr.insertCell(-1);
		var link = json.records[i].fileContent;
		var linksplit = link.replace("https://drive.google.com/file/d/","");
		var linksplitt = linksplit.replace("/view?usp=drivesdk","");
	
									tabCell.innerHTML = "<div style='width:32px;height:42px;cursor:pointer;border:1px solid blue'><a href='"+json.records[i].fileContent+"' target='_blank'><img src='https://drive.google.com/uc?export=view&id="+linksplitt+"'  style='width:30px; height:40px'  alt='poto'></a></div>";									
									tabCell = tr.insertCell(-1);
									var tgl = json.records[i].Time_Stamp;;
									var tglasal = new Date(tgl);
									var xtahun = tglasal.getFullYear();
									var xbulan = addZero(tglasal.getMonth()+1);
									var xtanggal = addZero(tglasal.getDate());
									var jamasal = tglasal.getHours();
									var menitasal = tglasal.getMinutes();
									var detikasal = tglasal.getMinutes();
									var xjam = addZero(jamasal);
									var xmenit = addZero(menitasal);
									var xdetik = addZero(detikasal);
									tabCell.innerHTML ="Tgl. " + xtanggal + "/" + xbulan + "/" + xtahun  + "<br/>Pkl. " + xjam  + ":" + xmenit  + ":" + xdetik;  //;
					}

				} //untuk for j
		var divContainer = document.getElementById("tabelhadirku");
        //divContainer.innerHTML = "";
        divContainer.appendChild(btn);
		divContainer.appendChild(table);
				
            }
      

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        document.getElementById("loader").style.visibility = "hidden";

    });
}
function jumlahsiswaperkelas() {
//kadal;
//var kadal = new Date("2020/07/14");
//var sekarang = new Date()
//if (kadal<sekarang){alert("Kadaluarsa");break}else{alert("Ga")}

$("#re").css("visibility","hidden");
$("<footer class='w3-container w3-show w3-padding-16 w3-light-grey'><p>e-Absensi V.06<br/>Created by <a href='https://syahandrianeda.blogspot.com/2020/07/cara-membuat-absen-siswa-online-e-absensi-.html' target='_blank'>Ade Andriansyah, S.Pd.SD</a></p></footer>").insertAfter("#tesjumlahkelas").last();;
   
   document.getElementById("loader").style.visibility = "visible";

//   var namarombel =["1A","1B","2A","2B","2C","3A","3B","3C","4A","4B","5A","5B","6A","6B"];   
var kelasnya = "";   
var jumlahperkelas =0;
var tempatangka = "";
var angkaakhir ="";
		var divContainer = document.getElementById("tesjumlahkelas");
       divContainer.innerHTML = "";
var tabelsaya = document.getElementById("tabelhadirku");

   var url = script_url+"?action=read";

$.getJSON(url, function (json) {
		table = document.createElement("table");
		var atttt = table.setAttribute("class","w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white");
		

        var header = table.createTHead();
		var row = table.insertRow(0);      
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = "<b>Kelas</b>";
		cell2.innerHTML = "<b>Jumlah Siswa</b>";
	

  for (var j = 0; j < namarombel.length; j++) {
jumlahperkelas =0; 

 kelasnya = document.createElement("div");
  kelasnya.innerHTML = "Kelas" + namarombel[j] ;
		       // CREATE DYNAMIC TABLE.
        //var table = document.createElement("table");

		
 
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {
			if(json.records[i].kelassaatini ===namarombel[j]){
			jumlahperkelas +=1;//parseFloat(1,10);
				}

        }
			angkaakhir =jumlahperkelas;
			tempatangka = document.createElement("b");
			var tttt = tempatangka.setAttribute("id","jumlahsiswaKelas" + namarombel[j]) ;
				tempatangka.innerHTML = angkaakhir;
				var ifangka;
				if(angkaakhir===0){ifangka = "Siswa di Kelas ini tidak ada";}else{ifangka=angkaakhir+" Siswa."}
				
					
								tr = table.insertRow(-1);
									var tabCell = tr.insertCell(-1);
									tabCell.innerHTML = namarombel[j];
									tabCell = tr.insertCell(-1);
									tabCell.innerHTML = ifangka;
		
		divContainer.appendChild(kelasnya);
		divContainer.appendChild(tempatangka);
			
			tabelsaya.innerHTML="Silakan Pilihn Nama Siswa terlebih dahulu untuk melihat rekap daftar hadir di bulan ini.";
			
			var tabellsaya = document.getElementById("statistiktampilan");
			tabellsaya.innerHTML="";
			tabellsaya.appendChild(table);
	
		}
	document.getElementById("loader").style.visibility = "hidden";	
		
    });

	
	}
function rekapabsenperkelashariini(){
///// perkelas hari ini saja

$("#re").css("visibility","hidden");
   
   document.getElementById("loader").style.visibility = "visible";
// kode tanggal hari ini saja
var tgl = new Date();
	var stgl = tgl.getDate();
	var xbln = tgl.getMonth()+1;
	var sbln = addZero(xbln);
	
	var sthn = tgl.getFullYear();
	var idok = stgl+""+sbln+""+sthn;
	
var kodetanggal= idok;	
var btn = "";   
var table ="";
var tambahdiv = "";
var tambahtabel = "";

var kelasnya = "";   
var jumlahperkelas =0;
var tempatangka = "";
var angkaakhir ="";

var divContainer = document.getElementById("jumlahabsentiapkelashariini");
      divContainer.innerHTML = "";
				
 var url = script_url+"?action=readd";

$.getJSON(url, function (json) {

    // Set the variables from the results array
   
   
  for (var j = 0; j < namarombel.length; j++) {
  jumlahperkelas =0; 
		//var btn += document.createElement("div");
		btn = document.createElement("b");
  btn.innerHTML = "Kelas" + namarombel[j] ;
  

        // CREATE DYNAMIC TABLE.
        //var table = document.createElement("table");
		table = document.createElement("table");
		var atttt = table.setAttribute("class","w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white");
		

        var header = table.createTHead();
		var row = table.insertRow(0);      
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);

	
		cell1.innerHTML = "<b>Nama Siswa</b>";
		cell2.innerHTML = "<b>Poto</b>";
		cell3.innerHTML = "<b>Waktu Absen</b>";
        
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {
				if (json.records[i].kelas == namarombel[j] && json.records[i].id == idok ){
								tr = table.insertRow(-1);
									var tabCell = tr.insertCell(-1);
				tabCell.setAttribute("onclick","hadirsayabulan('"+json.records[i].name+"')");
				tabCell.setAttribute("style","cursor:pointer");
				tabCell.innerHTML = json.records[i].name;
	
tabCell = tr.insertCell(-1);
		var link = json.records[i].fileContent;
		var linksplit = link.replace("https://drive.google.com/file/d/","");
		var linksplitt = linksplit.replace("/view?usp=drivesdk","");
	
									tabCell.innerHTML = "<div style='width:32px;height:42px;cursor:pointer;border:1px solid blue'><a href='"+json.records[i].fileContent+"' target='_blank'><img src='https://drive.google.com/uc?export=view&id="+linksplitt+"'  style='width:30px; height:40px'  alt='poto'></a></div>";
									tabCell = tr.insertCell(-1);
									var tgl = json.records[i].Time_Stamp;;
									var tglasal = new Date(tgl);
									var xtahun = tglasal.getFullYear();
									var xbulan = addZero(tglasal.getMonth()+1);
									var xtanggal = addZero(tglasal.getDate());
									var jamasal = tglasal.getHours();
									var menitasal = tglasal.getMinutes();
									var detikasal = tglasal.getMinutes();
									var xjam = addZero(jamasal);
									var xmenit = addZero(menitasal);
									var xdetik = addZero(detikasal);
				tabCell.setAttribute("onclick","hadirtanggal('"+xtanggal+""+xbulan+""+xtahun+"')");
				tabCell.setAttribute("style","cursor:pointer");
									tabCell.innerHTML ="Tgl. " + xtanggal + "/" + xbulan + "/" + xtahun  + "<br/>Pkl. " + xjam  + ":" + xmenit  + ":" + xdetik;  //;
									jumlahperkelas +=1;
					}

				} //untuk for j
			angkaakhir =jumlahperkelas;
			tempatangka = document.createElement("b");
			var tttt = tempatangka.setAttribute("id","jumlahsiswaabsenhariinidikelas" + namarombel[j]) ;
				tempatangka.innerHTML = angkaakhir;
				
				var jumlahsiswakelasini = document.getElementById("jumlahsiswaKelas"+ namarombel[j]).innerHTML;
			var persenkehadiran = document.createElement("b");
				var atrpersen = persenkehadiran.setAttribute("id","persenabsenkelas"+ namarombel[j])
				var angkapersen = angkaakhir/jumlahsiswakelasini*100
				angkapersen = angkapersen.toFixed(2);
				persenkehadiran.innerHTML = " " + angkapersen +" %";
		//
        divContainer.appendChild(btn);
		divContainer.appendChild(tempatangka);
		divContainer.appendChild(persenkehadiran);
		divContainer.appendChild(table);
					
            }
      

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        document.getElementById("loader").style.visibility = "hidden";

    });
}
function statistikaabsen(){
///// perkelas hari ini saja

$("#re").css("visibility","hidden");
   
   document.getElementById("loader").style.visibility = "visible";
// kode tanggal hari ini saja
var tgl = new Date();
	var stgl = tgl.getDate();
	var xbln = tgl.getMonth()+1;
	var sbln = addZero(xbln);
	
	var sthn = tgl.getFullYear();
	var idok = stgl+""+sbln+""+sthn;
	var kodetanggal= idok;	

//element yang dibuat di script ini
var table ="";
var jumlahhadir =0;
var jumlahyangpengisi =0;
var jumlahyangijin =0;
var jumlahyangsakit =0;

var jumlahsiswadikelasini;
var belumabsen=0;

var kelasnya = "";   
var tempatangka = "";
var angkaakhir ="";

//element yang akan ditampilkan hasil script
var divContainer = document.getElementById("statistiktampilan");
      
				
 var url = script_url+"?action=readd";

$.getJSON(url, function (json) {

    // Set the variables from the results array
   		table = document.createElement("table");
		var atttt = table.setAttribute("class","w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white");
		

        var header = table.createTHead();
		var row = table.insertRow(0);        
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);

	
		cell1.innerHTML = "<b>Kelas</b>";
		cell2.innerHTML = "<b>Jumlah Siswa</b>";
		cell3.innerHTML = "<b>Jumlah Hadir</b>";
		cell4.innerHTML = "<b>persentase</b>";
   
  for (var j = 0; j < namarombel.length; j++) {
  jumlahhadir =0; 
	jumlahyangpengisi =0;
	jumlahyangijin =0;
	jumlahyangsakit =0;
	belumabsen=0;	
	kelasnya = document.createElement("b");
	kelasnya.innerHTML = "Kelas " + namarombel[j] ;
	
	jumlahsiswadikelasini = document.getElementById("jumlahsiswaKelas"+ namarombel[j]).innerHTML;
	

        // CREATE DYNAMIC TABLE.
        //var table = document.createElement("table");

        
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {
				if (json.records[i].kelas == namarombel[j] && json.records[i].id == idok ){
							jumlahyangpengisi +=1;
						}
				if (json.records[i].kelas == namarombel[j] && json.records[i].id == idok && json.records[i].kehadiran == "Hadir" ){
							jumlahhadir +=1;
						}
				if (json.records[i].kelas == namarombel[j] && json.records[i].id == idok && json.records[i].kehadiran == "Ijin" ){
							jumlahyangijin +=1;
						}
				if (json.records[i].kelas == namarombel[j] && json.records[i].id == idok && json.records[i].kehadiran == "Sakit" ){
							jumlahyangsakit +=1;
						}

				} //untuk for j

			angkaakhir =jumlahhadir;
			belumabsen = jumlahsiswadikelasini - (jumlahhadir + jumlahyangijin + jumlahyangsakit);
			tempatangka = document.createElement("b");
			var tttt = tempatangka.setAttribute("id","jumlahsiswaabsenhariinidikelas" + namarombel[j]) ;
				tempatangka.innerHTML = angkaakhir;
				
				//var jumlahsiswakelasini = document.getElementById("jumlahsiswaKelas"+ namarombel[j]).innerHTML;
			var persenkehadiran = document.createElement("b");
				var atrpersen = persenkehadiran.setAttribute("id","persenabsenkelas"+ namarombel[j])
				var angkapersen = angkaakhir/jumlahsiswadikelasini*100
				angkapersen = angkapersen.toFixed(2);
				var ifangka;
				if(angkapersen==="NaN"){ifangka = "Siswa di Kelas ini tidak ada";}else{ifangka=angkapersen+" %"}
				persenkehadiran.innerHTML = " " + ifangka ;
								tr = table.insertRow(-1);
								tr.setAttribute("style","cursor:pointer");
								tr.setAttribute("onclick","tabelhadirdikelas('"+namarombel[j]+"')");
									//kolom pertama nama kelas
									var tabCell = tr.insertCell(-1);
									tabCell.innerHTML = namarombel[j];
									
									//kolom kedua jumlahsiswa di setiap kelas
									tabCell = tr.insertCell(-1);
									tabCell.innerHTML =jumlahsiswadikelasini;
									//kolom ketiga jumlah siswa yang hadir hari ini
									tabCell = tr.insertCell(-1);
									tabCell.innerHTML =jumlahhadir +" siswa (Hadir).<br/>" + jumlahyangijin + " siswa (Ijin).<br/>" + jumlahyangsakit +" siswa (Sakit).<br/>"+ belumabsen +" siswa (belum absen)";
									//kolom keempat persentase
									tabCell = tr.insertCell(-1);
									tabCell.innerHTML = ifangka ;
									
		//
        divContainer.innerHTML = "";
		divContainer.appendChild(table);
					
            }
      

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        document.getElementById("loader").style.visibility = "hidden";

    });
}
function tabelhadirdikelas(idkelas){
///// perkelas hari ini saja

$("#re").css("visibility","hidden");
   
   document.getElementById("loader").style.visibility = "visible";
// kode tanggal hari ini saja
var tgl = new Date();
	var stgl = tgl.getDate();
	var xbln = tgl.getMonth()+1;
	var sbln = addZero(xbln);
	
	var sthn = tgl.getFullYear();
	var idok = stgl+""+sbln+""+sthn;
	
var kodetanggal= idok;	
var btn = "";   
var table ="";
var tambahdiv = "";
var tambahtabel = "";

var kelasnya = "";   
var jumlahperkelas =0;
var tempatangka = "";
var angkaakhir ="";

var jumlahhadir =0;
var jumlahyangpengisi =0;
var jumlahyangijin =0;
var jumlahyangsakit =0;

var jumlahsiswadikelasini;
var belumabsen=0;



var divContainer = document.getElementById("tabelhadir");
      divContainer.innerHTML = "";
				
 var url = script_url+"?action=readd";

$.getJSON(url, function (json) {

    // Set the variables from the results array
   
   

  jumlahperkelas =0; 
		//var btn += document.createElement("div");
		btn = document.createElement("b");
  btn.innerHTML = "Kelas " + idkelas+"<br/>  jumlah input = " ;
  

        // CREATE DYNAMIC TABLE.
        //var table = document.createElement("table");
		table = document.createElement("table");
		var atttt = table.setAttribute("class","w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white");
		

        var header = table.createTHead();
		var row = table.insertRow(0);     
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);

	
		cell1.innerHTML = "<b>Nama Siswa</b>";
		cell2.innerHTML = "<b>Poto</b>";
		cell3.innerHTML = "<b>Kehadiran</b>";
		cell4.innerHTML = "<b>Waktu Absen</b>";
        
        // ADD JSON DATA TO THE TABLE AS ROWS.

 
jumlahhadir =0; 
	jumlahyangpengisi =0;
	jumlahyangijin =0;
	jumlahyangsakit =0;
	belumabsen=0;		
	       for (var i = 0; i < json.records.length; i++) {
 
				if (json.records[i].kelas == idkelas && json.records[i].id == idok ){
								tr = table.insertRow(-1);
									var tabCell = tr.insertCell(-1);
				tabCell.setAttribute("onclick","hadirsayabulan('"+json.records[i].name+"')");
				tabCell.setAttribute("style","cursor:pointer");
				tabCell.innerHTML = json.records[i].name;

									tabCell = tr.insertCell(-1);
		var link = json.records[i].fileContent;
		var linksplit = link.replace("https://drive.google.com/file/d/","");
		var linksplitt = linksplit.replace("/view?usp=drivesdk","");
	
									tabCell.innerHTML = "<div style='width:32px;height:42px;cursor:pointer;border:1px solid blue'><a href='"+json.records[i].fileContent+"' target='_blank'><img src='https://drive.google.com/uc?export=view&id="+linksplitt+"'  style='width:30px; height:40px'  alt='poto'></a></div>";
									tabCell = tr.insertCell(-1);
									tabCell.innerHTML =json.records[i].kehadiran;
									tabCell = tr.insertCell(-1);
									var tgl = json.records[i].Time_Stamp;;
									var tglasal = new Date(tgl);
									var xtahun = tglasal.getFullYear();
									var xbulan = addZero(tglasal.getMonth()+1);
									var xtanggal = addZero(tglasal.getDate());
									var jamasal = tglasal.getHours();
									var menitasal = tglasal.getMinutes();
									var detikasal = tglasal.getMinutes();
									var xjam = addZero(jamasal);
									var xmenit = addZero(menitasal);
									var xdetik = addZero(detikasal);
				tabCell.setAttribute("onclick","hadirtanggal('"+xtanggal+""+xbulan+""+xtahun+"')");
				tabCell.setAttribute("style","cursor:pointer");
									tabCell.innerHTML ="Tgl. " + xtanggal + "/" + xbulan + "/" + xtahun  + "<br/>Pkl. " + xjam  + ":" + xmenit  + ":" + xdetik;  //;
									jumlahperkelas +=1;
					}
				if (json.records[i].kelas == idkelas && json.records[i].id == idok ){
							jumlahyangpengisi +=1;
						}
				if (json.records[i].kelas == idkelas && json.records[i].id == idok && json.records[i].kehadiran == "Hadir" ){
							jumlahhadir +=1;
						}
				if (json.records[i].kelas == idkelas && json.records[i].id == idok && json.records[i].kehadiran == "Ijin" ){
							jumlahyangijin +=1;
						}
				if (json.records[i].kelas == idkelas && json.records[i].id == idok && json.records[i].kehadiran == "Sakit" ){
							jumlahyangsakit +=1;
						}

				}
				//untuk for j
			angkaakhir =jumlahperkelas;
			belumabsen = jumlahsiswadikelasini - (jumlahhadir + jumlahyangijin + jumlahyangsakit);
			//jumlahhadir +" siswa (Hadir).<br/>" + jumlahyangijin + " siswa (Ijin).<br/>" + jumlahyangsakit +" siswa (Sakit).<br/>"+ belumabsen +" siswa (belum absen)";
			tempatangka = document.createElement("b");
			
			var tttt = tempatangka.setAttribute("id","jumlahsiswaabsenhariinidikelas" + idkelas) ;
				tempatangka.innerHTML = angkaakhir+" siswa, <br/>hadir = ";
				
				var jumlahsiswakelasini = document.getElementById("jumlahsiswaKelas"+ idkelas).innerHTML;
			var persenkehadiran = document.createElement("b");
				var atrpersen = persenkehadiran.setAttribute("id","persenabsenkelas"+ idkelas);
				var angkapersen = angkaakhir/jumlahsiswakelasini*100;
				angkapersen = angkapersen.toFixed(2);
				var ifangka;
				if(angkapersen==="NaN"){ifangka = "Siswa di Kelas ini tidak ada";}else{ifangka=angkapersen+" %"}
				persenkehadiran.innerHTML = jumlahhadir ;
				//angka persen hadir
				var persenkehadirann = document.createElement("b");
				var angkapersenn = jumlahhadir/jumlahsiswakelasini*100;
				angkapersenn = angkapersenn.toFixed(2);
				var ifangkaa;
				if(angkapersenn==="NaN"){ifangkaa = "Siswa di Kelas ini tidak ada";}else{ifangkaa=angkapersenn+" %"}
				persenkehadirann.innerHTML = " siswa (" + ifangkaa + ")<br/> ijin = " +jumlahyangijin+" siswa<br/> sakit = "+jumlahyangsakit +" siswa.";
				var kliknama = document.createElement("b")
				kliknama.innerHTML="<br/>Klik Nama Ananda untuk melihat data kehadiran dalam satu bulan ini.";
		//
		document.getElementById("statistiktampilan").style.display="none";
		document.getElementById("tabelhadir").style.display="block";
		divContainer.innerHTML = ""
        divContainer.appendChild(btn);
		divContainer.appendChild(tempatangka);
		divContainer.appendChild(persenkehadiran);
		divContainer.appendChild(persenkehadirann);
		divContainer.appendChild(kliknama);
		divContainer.appendChild(table);
		var kliktampilin = document.createElement("button");
			kliktampilin.setAttribute("onclick","tampilinstatistiktampilan()");
			kliktampilin.innerHTML ="Kembali lihat statistik kelas";
		divContainer.appendChild(kliktampilin);	

      

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        document.getElementById("loader").style.visibility = "hidden";

    });
}
function tampilinstatistiktampilan(){
		document.getElementById("tabelhadir").style.display="none"
		document.getElementById("statistiktampilan").style.display="block";
}
function rekaphadirsaya(idnama){
///// perkelas hari ini saja

var bulan =["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
$("#re").css("visibility","hidden");
   
   document.getElementById("loader").style.visibility = "visible";
// kode tanggal hari ini saja
var tgl = new Date();
	var stgl = tgl.getDate();
	var xbln = tgl.getMonth()+1;
	var sbln = addZero(xbln);
	var ybulan =tgl.getMonth();
	var sthn = tgl.getFullYear();
	var idok = stgl+""+sbln+""+sthn;
	
var kodetanggal= idok;	
var btn = "";   
var table ="";
var tambahdiv = "";
var tambahtabel = "";

var kelasnya = "";   
var jumlahperkelas =0;
var tempatangka = "";
var angkaakhir ="";

var divContainer = document.getElementById("tabelhadirku");
	
      divContainer.innerHTML = "";
				
 var url = script_url+"?action=rekap";

$.getJSON(url, function (json) {

    // Set the variables from the results array
   
   

  jumlahperkelas =0; 
		//var btn += document.createElement("div");
		btn = document.createElement("h3");
  btn.innerHTML = "Data Absen " + idnama+", pada Bulan = " + bulan[ybulan] + " " + sthn;
  

        // CREATE DYNAMIC TABLE.
        //var table = document.createElement("table");
		table = document.createElement("table");
		var atttt = table.setAttribute("class","w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white");
		

        var header = table.createTHead();
		var row = table.insertRow(0);     
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		

	
		cell1.innerHTML = "<b>Waktu Absen</b>";
		cell2.innerHTML = "<b>Kehadiran</b>";
		cell3.innerHTML = "<b>Poto</b><br/><sub>Klik Poto untuk memperbesar</sub>";
		
        
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {
		var tglfor = json.records[i].Time_Stamp;
		var tagal = new Date(tglfor);
		var tglisi = tagal.getMonth();
				if (json.records[i].name == idnama && tglisi == ybulan  ){
								tr = table.insertRow(-1);
									var tabCell = tr.insertCell(-1);
									var tgle = json.records[i].Time_Stamp;
									var tglasal = new Date(tgle);
									var xtahun = tglasal.getFullYear();
									var xbulan = addZero(tglasal.getMonth()+1);
									var xtanggal = addZero(tglasal.getDate());
									var jamasal = tglasal.getHours();
									var menitasal = tglasal.getMinutes();
									var detikasal = tglasal.getMinutes();
									var xjam = addZero(jamasal);
									var xmenit = addZero(menitasal);
									var xdetik = addZero(detikasal);
				tabCell.setAttribute("onclick","hadirtanggal('"+xtanggal+""+xbulan+""+xtahun+"')");
				tabCell.setAttribute("style","cursor:pointer");

									tabCell.innerHTML ="Tgl. " + xtanggal + "/" + xbulan + "/" + xtahun  + "<br/>Pkl. " + xjam  + ":" + xmenit  + ":" + xdetik;  //;
									var tabCell = tr.insertCell(-1);
										tabCell.innerHTML = json.records[i].kehadiran;
									tabCell = tr.insertCell(-1);
		var link = json.records[i].fileContent;
		var linksplit = link.replace("https://drive.google.com/file/d/","");
		var linksplitt = linksplit.replace("/view?usp=drivesdk","");
	
									tabCell.innerHTML = "<div style='width:32px;height:42px;cursor:pointer;border:1px solid blue'><a href='"+json.records[i].fileContent+"' target='_blank'><img src='https://drive.google.com/uc?export=view&id="+linksplitt+"'  style='width:30px; height:40px'  alt='poto'></a></div>";								
									
//									jumlahperkelas +=1;
					}

				} //untuk for j
       divContainer.appendChild(btn);
		divContainer.appendChild(table);
       document.getElementById("loader").style.visibility = "hidden";

    });
}
function pengabsenhariini(){

$("#re").css("visibility","hidden");

var tgl = new Date();
	var stgl = tgl.getDate();
	var xbln = tgl.getMonth()+1;
	var sbln = addZero(xbln);
	
	var sthn = tgl.getFullYear();
	var idok = stgl+""+sbln+""+sthn;
	var kodetanggal= idok;	
	var jumlahhariini=0;
	
   document.getElementById("loader").style.visibility = "visible";


   var url = script_url+"?action=readd";

 
 
$.getJSON(url, function (json) {

    // Set the variables from the results array
   
   
  

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
		var att = table.setAttribute("class","versi-table w3-striped w3-bordered w3-border w3-hoverable w3-white");
		

        var header = table.createTHead();
		var row = table.insertRow(0);     
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		
	
		cell1.innerHTML = "<b>Kelas</b>";
		cell2.innerHTML = "<b>Nama</b>";
		cell3.innerHTML = "<b>Kehadiran</b>";
		cell4.innerHTML = "<b>Poto</b><br/><sub style='text-align:center'>Klik Poto</sub>";
		cell5.innerHTML = "<b>Waktu Absen</b>";
		
        
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {
			if (json.records[i].id == idok ){
            tr = table.insertRow(-1);
			
				var tabCell = tr.insertCell(-1);

                tabCell.innerHTML = "<b id='hariini_id"+i+"'>"+json.records[i].kelas+"</b>";
				tabCell = tr.insertCell(-1);
				tabCell.setAttribute("onclick","hadirsayabulan('"+json.records[i].name+"')");
				tabCell.setAttribute("style","cursor:pointer");
				tabCell.innerHTML = "<b id='hariini_nama"+i+"'>"+json.records[i].name+"</b>";
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = "<b id='harriini_kehadiran"+i+"'>"+json.records[i].kehadiran+"</b>";
				
		var link = json.records[i].fileContent;
		var linksplit = link.replace("https://drive.google.com/file/d/","");
		var linksplitt = linksplit.replace("/view?usp=drivesdk","");
	tabCell = tr.insertCell(-1);
									tabCell.innerHTML = "<div style='width:32px;height:42px;cursor:pointer;border:1px solid blue'><a href='"+json.records[i].fileContent+"' target='_blank'><img src='https://drive.google.com/uc?export=view&id="+linksplitt+"'  style='width:30px; height:40px'  alt='poto'></a></div>";
				tabCell = tr.insertCell(-1);
						var tgl = json.records[i].Time_Stamp;;
						var tglasal = new Date(tgl);
						var xtahun = tglasal.getFullYear();
						var xbulan = addZero(tglasal.getMonth()+1);
						var xtanggal = addZero(tglasal.getDate());
						var jamasal = tglasal.getHours();
						var menitasal = tglasal.getMinutes();
						var detikasal = tglasal.getMinutes();
						var xjam = addZero(jamasal);
						var xmenit = addZero(menitasal);
						var xdetik = addZero(detikasal);
				tabCell.setAttribute("onclick","hadirtanggal('"+xtanggal+""+xbulan+""+xtahun+"')");
				tabCell.setAttribute("style","cursor:pointer");
				tabCell.innerHTML ="<b id='rekap_waktuabsen"+i+"'>Tgl. " + xtanggal + "/" + xbulan + "/" + xtahun  + " Pkl. " + xjam  + ":" + xmenit  + ":" + xdetik+"</b>";  //;
				jumlahhariini+=1
            }
		}
      

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("pengabsenhariinihariini");
		var keteranganjumlahhadir =document.createElement("b");
		//keteranganjumlahhadir.innerHTML="Jumlah Siswa yang hadir pada hari ini: " + (json.records.length -1) + " siswa.";
		keteranganjumlahhadir.innerHTML="Jumlah Siswa yang hadir pada hari ini: " + jumlahhariini + " siswa.";
		
		
        divContainer.innerHTML = "";
        divContainer.appendChild(keteranganjumlahhadir);
		divContainer.appendChild(table);
		document.getElementById("loader").style.visibility = "hidden";
		//$("#re").css("visibility","visible");
		//document.getElementById("infoabsen").style.display="none";
		//document.getElementById("tempatnisn").style.display="none";
	
		//document.getElementById("jumlahbarisx").innerHTML=json.records.length
    });
}
function hadirsayabulan(id){
document.gformdd.name.value = id;
tampilinabsensaya()

}
function hadirtanggal(idok){
var bulan =["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
$("#re").css("visibility","hidden");

//var tgl = new Date();
//	var stgl = tgl.getDate();
//	var xbln = tgl.getMonth()+1;
//	var sbln = addZero(xbln);
	
//	var sthn = tgl.getFullYear();
	//var idok = stgl+""+sbln+""+sthn;
	var kodetanggal= idok;	
	var jumlahhariini=0;
	
   document.getElementById("loader").style.visibility = "visible";


   var url = script_url+"?action=rekap";

 
 
$.getJSON(url, function (json) {

    // Set the variables from the results array
   
   
  

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
		var att = table.setAttribute("class","w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white");
		

        var header = table.createTHead();
		var row = table.insertRow(0);     
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		
	
		cell1.innerHTML = "<b>Kelas</b>";
		cell2.innerHTML = "<b>Nama</b>";
		cell3.innerHTML = "<b>Kehadiran</b>";
		cell4.innerHTML = "<b>Poto</b><br/><sub style='text-align:center'>Klik Poto</sub>";
		cell5.innerHTML = "<b>Waktu Absen</b>";
		
        
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {
			if (json.records[i].id == idok ){
            tr = table.insertRow(-1);
			
				var tabCell = tr.insertCell(-1);
				
                tabCell.innerHTML = "<b id='hariini_id"+i+"'>"+json.records[i].kelas+"</b>";
				tabCell = tr.insertCell(-1);
				tabCell.setAttribute("onclick","hadirsayabulan('"+json.records[i].name+"')");
				tabCell.setAttribute("style","cursor:pointer");
				tabCell.innerHTML = "<b id='hariini_nama"+i+"'>"+json.records[i].name+"</b>";
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = "<b id='harriini_kehadiran"+i+"'>"+json.records[i].kehadiran+"</b>";
				
		var link = json.records[i].fileContent;
		var linksplit = link.replace("https://drive.google.com/file/d/","");
		var linksplitt = linksplit.replace("/view?usp=drivesdk","");
	tabCell = tr.insertCell(-1);
									tabCell.innerHTML = "<div style='width:32px;height:42px;cursor:pointer;border:1px solid blue'><a href='"+json.records[i].fileContent+"' target='_blank'><img src='https://drive.google.com/uc?export=view&id="+linksplitt+"'  style='width:30px; height:40px'  alt='poto'></a></div>";
				tabCell = tr.insertCell(-1);
						var tgl = json.records[i].Time_Stamp;;
						var tglasal = new Date(tgl);
						var xtahun = tglasal.getFullYear();
						var xbulan = addZero(tglasal.getMonth()+1);
						var xtanggal = addZero(tglasal.getDate());
						var jamasal = tglasal.getHours();
						var menitasal = tglasal.getMinutes();
						var detikasal = tglasal.getMinutes();
						var xjam = addZero(jamasal);
						var xmenit = addZero(menitasal);
						var xdetik = addZero(detikasal);
			tabCell.innerHTML ="<b id='rekap_waktuabsen"+i+"'>Tgl. " + xtanggal + "/" + xbulan + "/" + xtahun  + " Pkl. " + xjam  + ":" + xmenit  + ":" + xdetik+"</b>";  //;
				jumlahhariini+=1
            }
		}
      if(idok.length=8){
		var tglidok = idok.slice(0,2);
		var blnidokk = idok.slice(2,4);
		var blnidoka = deleteZero(blnidokk)-1;
		var blnidok = bulan[blnidoka];
		
		var thnidok = idok.slice(4,8);
		}else{
		var tglidok = idok.slice(0,1);
		var blnidokk = idok.slice(1,3);
		var blnidoka = deleteZero(blnidokk)-1;
		var blnidok = bulan[blnidoka];
		
		var thnidok = idok.slice(3,7);
		}
        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("pengabsenhariinihariini");
		var keteranganjumlahhadir =document.createElement("b");
		//keteranganjumlahhadir.innerHTML="Jumlah Siswa yang hadir pada hari ini: " + (json.records.length -1) + " siswa.";
		keteranganjumlahhadir.innerHTML="Jumlah Siswa yang hadir pada tanggal : "+tglidok+" "+ blnidok+ " " + thnidok + " adalah : " + jumlahhariini + " siswa.";
		
				
				document.getElementById("loader").scrollIntoView();
		tampilintanggaltertertentu();
		
        divContainer.innerHTML = "";
        divContainer.appendChild(keteranganjumlahhadir);
		divContainer.appendChild(table);
		document.getElementById("loader").style.visibility = "hidden";

    });
}
