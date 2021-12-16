var baslatAl = document.getElementById('Baslat');
var duraklatAl = document.getElementById('Duraklat');
var sifirlaAl = document.getElementById('Sifirla');
var ekranaGosterAl = document.getElementById('ekranaVer');

var zamanTut = null;

let saniyeSay = 0;

    baslatAl.addEventListener('click',()=>{
    if(zamanTut!==null){
        clearInterval(zamanTut);
    }
    baslatAl.style.backgroundColor ="transparent";
    baslatAl.style.color ="transparent";
    duraklatAl.style.backgroundColor ="#4d1164"
    duraklatAl.style.color = "rgba(255, 255, 255, 0.946)";
    sifirlaAl.style.backgroundColor ="#4d1164";
    sifirlaAl.style.color = "rgba(255, 255, 255, 0.946)";
    zamanTut= setInterval(kronometreBaslat,1000);
    })

    duraklatAl.addEventListener('click',()=>{
        clearInterval(zamanTut);
        duraklatAl.style.backgroundColor ="transparent"
        duraklatAl.style.color="transparent";
        baslatAl.style.color = "rgba(255, 255, 255, 0.946)";
        baslatAl.style.backgroundColor ="#4d1164";
        sifirlaAl.style.backgroundColor ="#4d1164";
        sifirlaAl.style.color = "rgba(255, 255, 255, 0.946)";
    })

    sifirlaAl.addEventListener('click',()=>{
        kronometreSifirla();
        sifirlaAl.style.backgroundColor ="transparent";
        sifirlaAl.style.color ="transparent"
        baslatAl.style.backgroundColor ="#4d1164";
        baslatAl.style.color ="rgba(255, 255, 255, 0.946)";
        duraklatAl.style.backgroundColor ="#4d1164"
        duraklatAl.style.color="rgba(255, 255, 255, 0.946)";
    })

    function kronometreSifirla(){
    clearInterval(zamanTut);
    saniyeSay=0;
    document.getElementById('ekranaVer').innerHTML = "0 : 0"
    }

    function kronometreBaslat(){
     var Dakika = Math.floor(saniyeSay/60)
     var Saat = Math.floor(saniyeSay/3600)

     let saniyeYaz = saniyeSay%60;
     let dakikaYaz = Dakika%60;
     saniyeSay++;      

     console.log(Saat+":"+dakikaYaz+":"+saniyeYaz);
     if(Saat==0){
        document.getElementById('ekranaVer').innerHTML =dakikaYaz+" "+":"+" "+saniyeYaz;
     }
     else{
        document.getElementById('ekranaVer').innerHTML = Saat+" "+":"+dakikaYaz+":"+" "+saniyeYaz;
     }
    }




