var secciones = [];
var tiempo_splash = 100; //mostrar splash 1 vez al perder, fondo con opacidad, margen a las imagenes de creditos, no mostrar creditos al perder, cambiar color del tiempo, resaltar
var intinst = 0;	
var textop1, textop2;
var imginst;
var puntos = 0;
var nivel = 1;
var objs =[];
var dec =[];
var tiempoInicial;
var idInterval;
var audio = document.getElementById("audio");
var audiom = document.getElementById("audiomain");
objs.push({nombre:"-Mandragora",x: "30px",y: "425px",ruta: "imagenes/objetos/obj2.png"});
objs.push({nombre:"-Bolsa de sangre",x: "18px",y: "88px",ruta: "imagenes/objetos/obj1.png"});
objs.push({nombre:"-Poción verde",x: "220px",y: "510px",ruta: "imagenes/objetos/obj3.png"});
objs.push({nombre:"-Pluma roja",x: "250px", y: "325px", ruta: "imagenes/objetos/obj4.png"});
objs.push({nombre:"-Lagartija",x: "20px",y: "330px",ruta: "imagenes/objetos/obj5.png"});
objs.push({nombre:"-Ojo serpiente",x: "325px",y: "515px",ruta: "imagenes/objetos/obj6.png"});
objs.push({nombre:"-Araña",x: "310px",y: "525px",ruta: "imagenes/objetos/obj7.png"});
objs.push({nombre:"-Cofre",x: "140px",y: "500px",ruta: "imagenes/objetos/obj8.png"});
objs.push({nombre:"-Cuaderno",x: "20px",y: "585px",ruta: "imagenes/objetos/obj9.png"});
objs.push({nombre:"-Cuervo",x: "140px",y: "140px",ruta: "imagenes/objetos/obj10.png"});
objs.push({nombre:"-Gato",x: "260px",y: "175px",ruta: "imagenes/objetos/obj11.png"});
objs.push({nombre:"-Muñeca",x: "110px",y: "370px",ruta: "imagenes/objetos/obj12.png"});
objs.push({nombre:"-Diamante",x: "380px",y: "68px",ruta: "imagenes/objetos/obj13.png"});
objs.push({nombre:"-Algas verdes",x: "0px",y: "165px",ruta: "imagenes/objetos/obj14.png"});
objs.push({nombre:"-Sirena",x: "225px",y: "225px",ruta: "imagenes/objetos/obj15.png"});
objs.push({nombre:"-Perla",x: "340px",y: "575px",ruta: "imagenes/objetos/obj16.png"});
objs.push({nombre:"-Tridente",x: "0px",y: "405px",ruta: "imagenes/objetos/obj17.png"});
objs.push({nombre:"-Brujula",x: "25px",y: "560px",ruta: "imagenes/objetos/obj18.png"});
dec.push({x:"20px",y:"400px",ruta:"imagenes/objetos/decoracion/deco3.png"});
dec.push({x:"265px",y:"205px",ruta:"imagenes/objetos/decoracion/deco13.png"});
dec.push({x:"319px",y:"360px",ruta:"imagenes/objetos/decoracion/deco14.png"});
dec.push({x:"200px",y:"66px",ruta:"imagenes/objetos/decoracion/deco19.png"});
dec.push({x:"235px",y:"155px",ruta:"imagenes/objetos/decoracion/deco20.png"});
dec.push({x:"60px",y:"160px",ruta:"imagenes/objetos/decoracion/deco18.png"});
dec.push({x:"270px",y:"255px",ruta:"imagenes/objetos/decoracion/deco1.png"});
dec.push({x:"247px",y:"450px",ruta:"imagenes/objetos/decoracion/deco22.png"});
dec.push({x:"20px",y:"400px",ruta:"imagenes/objetos/decoracion/deco23.png"});
dec.push({x:"252px",y:"210px",ruta:"imagenes/objetos/decoracion/deco24.png"});
dec.push({x:"330px",y:"70px",ruta:"imagenes/objetos/decoracion/deco21.png"});
dec.push({x:"10px",y:"350px",ruta:"imagenes/objetos/decoracion/deco4.png"});
dec.push({x:"277px",y:"500px",ruta:"imagenes/objetos/decoracion/deco5.png"});
dec.push({x:"228px",y:"350px",ruta:"imagenes/objetos/decoracion/deco6.png"});
dec.push({x:"0px",y:"480px",ruta:"imagenes/objetos/decoracion/deco7.png"});
dec.push({x:"100px",y:"400px",ruta:"imagenes/objetos/decoracion/deco8.png"});
dec.push({x:"180px",y:"250px",ruta:"imagenes/objetos/decoracion/deco11.png"});
dec.push({x:"0px",y:"0px",ruta:"imagenes/objetos/decoracion/deco10.png"});

window.onload = function(){
    setTimeout(cambiarSplash,tiempo_splash);
    inicializarReferencias();
    
}

function inicializarReferencias(){
    secciones[1] = document.getElementById("seccion_1");
    secciones[2] = document.getElementById("seccion_2");
    secciones[3] = document.getElementById("seccion_3");
    secciones[4] = document.getElementById("seccion_4");
    secciones[5] = document.getElementById("seccion_5");
    secciones[6] = document.getElementById("seccion_6");
}

function cambiarSplash(){
    secciones[1].className = "splash oculto";
    secciones[2].className = "home";
}

function cambiarSeccion(id_seccion){
    for (var i in secciones) {
        secciones[i].classList.add("oculto");
    }
    secciones[id_seccion].classList.add("animated");
    secciones[id_seccion].classList.add("headShake");
    secciones[id_seccion].classList.remove("oculto");
}

function cambiarinstruccionesD(){
    textop1 = document.getElementById("primerpinst");
    textop2 = document.getElementById("segundopinst");
    imginst = document.getElementById("imginst");
    imginst2 = document.getElementById("img2inst");
    btnstart = document.getElementById("start");
    intinst++;
    if(intinst>0){
        document.getElementById("flechai").style.visibility="visible";
        if(intinst==1){
            textop1.innerHTML = "Tendrás un límite de tiempo por cada búsqueda, así que realízala en el menor tiempo posible.";
            textop2.innerHTML = "Pero no todo es malo, obtén el talismán del tiempo y extiende tu búsqueda";
            imginst.setAttribute("src","imagenes/clock.png");
            imginst.style.height="150px";
            imginst.style.width="150px";
            imginst2.style.visibility = "visible";
            imginst2.setAttribute("src","imagenes/plus.png");
            imginst2.style.height="150px";
            imginst2.style.width="150px";
            start.style.display = "none";
        }
        if(intinst==2){
            textop1.innerHTML = "Hora de empezar, recuerda ver bien, no me decepciones familiar";
            textop1.style.marginTop="220px";
            textop2.innerHTML = "";
            imginst.style.display = "none";
            imginst2.style.display = "none";
            document.getElementById("flechad").style.visibility="hidden";
            start.setAttribute("src","imagenes/botones/btncomenzar.png");
            start.style.display = "initial";
        }
    }	
}

function cambiarinstruccionesI(){
    textop1 = document.getElementById("primerpinst");
    textop2 = document.getElementById("segundopinst");
    imginst = document.getElementById("imginst");
    imginst2 = document.getElementById("img2inst");
    btnstart = document.getElementById("start");
    intinst--;
    if(intinst>=0){
        if(intinst==1){
            textop1.innerHTML = "Tendrás un límite de tiempo por cada búsqueda, así que realízala en el menor tiempo posible.";
            textop2.innerHTML = "Pero no todo es malo, obtén el talismán del timepo y extiende tu búsqueda";
            imginst.setAttribute("src","imagenes/clock.png");
            imginst.style.height="150px";
            imginst.style.width="150px";
            imginst2.setAttribute("src","imagenes/plus.png");
            imginst2.style.height="150px";
            imginst2.style.width="150px";
            imginst.style.display = "initial";
            imginst2.style.display = "initial";
            imginst2.style.visibility = "visible";
            textop1.style.marginTop="0px";
            document.getElementById("flechad").style.visibility="visible";
            start.style.display = "none";
        }
        if(intinst==0){
            textop1.innerHTML = "Hola, soy la que te ha invocado como mi familiar y como mi familiar tendrás que ayudarme a hacer una busqueda de diferentes elementos mágicos.";
            textop2.innerHTML = "Tendrás una tabla mágica que te guiará para saber cuántos objetos deberás buscar";
            imginst.setAttribute("src","imagenes/inst1.png");
            imginst.style.height="250px";
            imginst.style.width="300px";
            imginst2.style.visibility = "hidden";
            document.getElementById("flechai").style.visibility="hidden";
        }
    }
}

function Tiempo(){
    setTimeout(function(){
        document.getElementById("nivel1logo").style.display="none";
        document.getElementById("componente").style.display="initial";
        document.getElementById("temporizador").style.display="initial";
        document.getElementById("panel1").style.display="initial";
        document.getElementById("nombre1").style.display="initial";
        document.getElementById("nombre2").style.display="initial";
        document.getElementById("nombre3").style.display="initial";
        document.getElementById("nombre4").style.display="initial";
        document.getElementById("nombre5").style.display="initial";
        document.getElementById("nombre6").style.display="initial";
        document.getElementById("puntaje").style.display="initial";
        document.getElementById("objeto1").style.display="initial";
        document.getElementById("objeto2").style.display="initial";
        document.getElementById("objeto3").style.display="initial";
        document.getElementById("objeto4").style.display="initial";
        document.getElementById("objeto5").style.display="initial";
        document.getElementById("objeto6").style.display="initial";
        document.getElementById("deco1").style.display="initial";
        document.getElementById("deco2").style.display="initial";
        document.getElementById("deco3").style.display="initial";
        document.getElementById("deco4").style.display="initial";
        document.getElementById("deco5").style.display="initial";
        document.getElementById("deco6").style.display="initial";
        document.getElementById("back").style.display="none";
    },2000);
    clearInterval(idInterval);
    empezarJuego();
}	

function empezarJuego(){
    tiempoInicial = 50;
    document.getElementById("componente").setAttribute("src","imagenes/componentes/componente6.png");
    var decor1 = document.getElementById("deco1");
    var decor2 = document.getElementById("deco2");
    var decor3 = document.getElementById("deco3");
    var decor4 = document.getElementById("deco4");
    var decor5 = document.getElementById("deco5");
    var decor6 = document.getElementById("deco6");
    var objeto1 = document.getElementById("objeto1");
    var objeto2 = document.getElementById("objeto2");
    var objeto3 = document.getElementById("objeto3");
    var objeto4 = document.getElementById("objeto4");
    var objeto5 = document.getElementById("objeto5");
    var objeto6 = document.getElementById("objeto6");
    var nombre1 = document.getElementById("nombre1");
    var nombre2 = document.getElementById("nombre2");
    var nombre3 = document.getElementById("nombre3");
    var nombre4 = document.getElementById("nombre4");
    var nombre5 = document.getElementById("nombre5");
    var nombre6 = document.getElementById("nombre6");
    nombre1.style.textDecoration="none";
    nombre2.style.textDecoration="none";
    nombre3.style.textDecoration="none";
    nombre4.style.textDecoration="none";
    nombre5.style.textDecoration="none";
    nombre6.style.textDecoration="none";
    if(nivel == 1){
        objeto1.setAttribute("src",objs[0].ruta);
        objeto1.style.zIndex="100";
        decor1.style.zIndex="1";
        nombre1.innerHTML = objs[0].nombre;
        objeto1.style.top = objs[0].y;
        objeto1.style.left = objs[0].x;
        objeto2.setAttribute("src",objs[1].ruta);
        nombre2.innerHTML = objs[1].nombre;
        objeto2.style.top = objs[1].y;
        objeto2.style.left = objs[1].x;
        objeto3.setAttribute("src",objs[2].ruta);
        nombre3.innerHTML = objs[2].nombre;
        objeto3.style.top = objs[2].y;
        objeto3.style.left = objs[2].x;
        objeto4.setAttribute("src",objs[3].ruta);
        nombre4.innerHTML = objs[3].nombre;
        objeto4.style.top = objs[3].y;
        objeto4.style.left = objs[3].x;
        objeto5.setAttribute("src",objs[4].ruta);
        nombre5.innerHTML = objs[4].nombre;
        objeto5.style.top = objs[4].y;
        objeto5.style.left = objs[4].x;
        objeto6.setAttribute("src",objs[5].ruta);
        nombre6.innerHTML = objs[5].nombre;
        objeto6.style.top = objs[5].y;
        objeto6.style.left = objs[5].x;
        decor1.setAttribute("src",dec[0].ruta);
        decor1.style.top = dec[0].y;
        decor1.style.left = dec[0].x;
        decor2.setAttribute("src",dec[1].ruta);
        decor2.style.top = dec[1].y;
        decor2.style.left = dec[1].x;
        decor3.setAttribute("src",dec[2].ruta);
        decor3.style.top = dec[2].y;
        decor3.style.left = dec[2].x;
        decor4.setAttribute("src",dec[3].ruta);
        decor4.style.top = dec[3].y;
        decor4.style.left = dec[3].x;
        decor5.setAttribute("src",dec[4].ruta);
        decor5.style.top = dec[4].y;
        decor5.style.left = dec[4].x;
        decor6.setAttribute("src",dec[5].ruta);
        decor6.style.top = dec[5].y;
        decor6.style.left = dec[5].x;
    }
    if(nivel == 2){
        objeto2.style.zIndex="100";
        objeto6.style.zIndex="100";
        objeto5.style.zIndex="90";
        decor4.style.zIndex="1";
        decor1.style.zIndex="100";
        decor5.style.zIndex="100";
        decor2.style.zIndex="10";
        objeto1.setAttribute("src",objs[6].ruta);
        nombre1.innerHTML = objs[6].nombre;
        objeto1.style.top = objs[6].y;
        objeto1.style.left = objs[6].x;
        objeto2.setAttribute("src",objs[7].ruta);
        nombre2.innerHTML = objs[7].nombre;
        objeto2.style.top = objs[7].y;
        objeto2.style.left = objs[7].x;
        objeto3.setAttribute("src",objs[8].ruta);
        nombre3.innerHTML = objs[8].nombre;
        objeto3.style.top = objs[8].y;
        objeto3.style.left = objs[8].x;
        objeto4.setAttribute("src",objs[9].ruta);
        nombre4.innerHTML = objs[9].nombre;
        objeto4.style.top = objs[9].y;
        objeto4.style.left = objs[9].x;
        objeto5.setAttribute("src",objs[10].ruta);
        nombre5.innerHTML = objs[10].nombre;
        objeto5.style.top = objs[10].y;
        objeto5.style.left = objs[10].x;
        objeto6.setAttribute("src",objs[11].ruta);
        nombre6.innerHTML = objs[11].nombre;
        objeto6.style.top = objs[11].y;
        objeto6.style.left = objs[11].x;
        decor1.setAttribute("src",dec[6].ruta);
        decor1.style.top = dec[6].y;
        decor1.style.left = dec[6].x;
        decor2.setAttribute("src",dec[7].ruta);
        decor2.style.top = dec[7].y;
        decor2.style.left = dec[7].x;
        decor3.setAttribute("src",dec[8].ruta);
        decor3.style.top = dec[8].y;
        decor3.style.left = dec[8].x;
        decor4.setAttribute("src",dec[9].ruta);
        decor4.style.top = dec[9].y;
        decor4.style.left = dec[9].x;
        decor5.setAttribute("src",dec[10].ruta);
        decor5.style.top = dec[10].y;
        decor5.style.left = dec[10].x;
        decor6.setAttribute("src",dec[11].ruta);
        decor6.style.top = dec[11].y;
        decor6.style.left = dec[11].x;
    }
    if(nivel == 3){
        objeto6.style.zIndex="100";
        objeto4.style.zIndex="100";
        decor1.style.zIndex="90";
        decor3.style.zIndex="90";
        objeto1.setAttribute("src",objs[12].ruta);
        nombre1.innerHTML = objs[12].nombre;
        objeto1.style.top = objs[12].y;
        objeto1.style.left = objs[12].x;
        objeto2.setAttribute("src",objs[13].ruta);
        nombre2.innerHTML = objs[13].nombre;
        objeto2.style.top = objs[13].y;
        objeto2.style.left = objs[13].x;
        objeto3.setAttribute("src",objs[14].ruta);
        nombre3.innerHTML = objs[14].nombre;
        objeto3.style.top = objs[14].y;
        objeto3.style.left = objs[14].x;
        objeto4.setAttribute("src",objs[15].ruta);
        nombre4.innerHTML = objs[15].nombre;
        objeto4.style.top = objs[15].y;
        objeto4.style.left = objs[15].x;
        objeto5.setAttribute("src",objs[16].ruta);
        nombre5.innerHTML = objs[16].nombre;
        objeto5.style.top = objs[16].y;
        objeto5.style.left = objs[16].x;
        objeto6.setAttribute("src",objs[17].ruta);
        nombre6.innerHTML = objs[17].nombre;
        objeto6.style.top = objs[17].y;
        objeto6.style.left = objs[17].x;
        decor1.setAttribute("src",dec[12].ruta);
        decor1.style.top = dec[12].y;
        decor1.style.left = dec[12].x;
        decor2.setAttribute("src",dec[13].ruta);
        decor2.style.top = dec[13].y;
        decor2.style.left = dec[13].x;
        decor3.setAttribute("src",dec[14].ruta);
        decor3.style.top = dec[14].y;
        decor3.style.left = dec[14].x;
        decor4.setAttribute("src",dec[15].ruta);
        decor4.style.top = dec[15].y;
        decor4.style.left = dec[15].x;
        decor5.setAttribute("src",dec[16].ruta);
        decor5.style.top = dec[16].y;
        decor5.style.left = dec[16].x;
        decor6.setAttribute("src",dec[17].ruta);
        decor6.style.top = dec[17].y;
        decor6.style.left = dec[17].x;
    }
    activarTiempo();
}

function cambioNivel(){
    var imagenlogo = document.getElementById("nivel1logo");
    imagenlogo.style.height = "200px";
    imagenlogo.style.width = "200px";
    imagenlogo.style.marginTop = "270px";
    if(nivel==2){
        imagenlogo.setAttribute("src","imagenes/nivel2/logonivel2.png");
        document.getElementById("back").style.display="initial";
        document.getElementById("seccion_6").style.background = "url('imagenes/nivel2/escenario.png')";
        imagenlogo.style.display = "initial";
        Tiempo();
    }
    if(nivel==3){
        imagenlogo.setAttribute("src","imagenes/nivel3/logonivel3.png");
        document.getElementById("back").style.display="initial";
        document.getElementById("seccion_6").style.background = "url('imagenes/nivel3/escenario.png')";
        imagenlogo.style.display = "initial";
        Tiempo();
    }
}

function aumentarPuntos(){
    var puntaje = document.getElementById("puntaje");
    var imagen = document.getElementById("componente");
    puntos += 15;
    puntaje.innerHTML = "Puntos: "+puntos;
    if(puntos==15){
        imagen.setAttribute("src","imagenes/componentes/componente5.png");
    }
    if(puntos==30){
        imagen.setAttribute("src","imagenes/componentes/componente4.png");
    }
    if(puntos==45){
        imagen.setAttribute("src","imagenes/componentes/componente3.png");
    }
    if(puntos==60){
        imagen.setAttribute("src","imagenes/componentes/componente2.png");
    }
    if(puntos==75){
        imagen.setAttribute("src","imagenes/componentes/componente1.png");
    }	
    if(puntos==90){
        nivel++;
        document.getElementById("componente").style.display="none";
        document.getElementById("panel1").style.display="none";
        document.getElementById("temporizador").style.display="none";
        document.getElementById("nombre1").style.display="none";
        document.getElementById("nombre2").style.display="none";
        document.getElementById("nombre3").style.display="none";
        document.getElementById("nombre4").style.display="none";
        document.getElementById("nombre5").style.display="none";
        document.getElementById("nombre6").style.display="none";
        document.getElementById("puntaje").style.display="none";
        document.getElementById("deco1").style.display="none";
        document.getElementById("deco2").style.display="none";
        document.getElementById("deco3").style.display="none";
        document.getElementById("deco4").style.display="none";
        document.getElementById("deco5").style.display="none";
        document.getElementById("deco6").style.display="none";
        puntos = 0;
        puntaje.innerHTML = "Puntos: "+puntos;
        if(nivel<4){
            var logo = document.getElementById("nivel1logo");
            logo.style.display="initial";
            logo.setAttribute("src","imagenes/menus/nivelcompletado.png");
            logo.style.height="401px";
            logo.style.width="361px";
            logo.style.marginTop="150px";
            setTimeout(function(){
                logo.style.display="none";
                cambioNivel();
            },2500);
        }
        else{
            var imagenlogo = document.getElementById("nivel1logo");
            imagenlogo.style.height = "700px";
            imagenlogo.style.width = "380px";
            imagenlogo.style.marginTop = "70px";
            imagenlogo.style.zIndex = "1";
            imagenlogo.setAttribute("src","imagenes/menuinicial/baseinstr.png");
            imagenlogo.style.display = "initial";
            var texto = document.getElementById("componente");
            texto.setAttribute("src","imagenes/menuinicial/win.png");
            texto.style.marginTop = "260px";
            texto.style.display = "initial";
            texto.style.width = "300px";
            texto.style.height = "180px";
            texto.style.zIndex = "100";
            texto.style.left = "100px";
            setTimeout(function(){
                location.reload();
            },2000);
        }
    }
}

function pulsarObjeto(ele){
    aumentarPuntos();
    tiempoInicial += 4;
    document.getElementById("temporizador").innerHTML = "Tiempo: "+tiempoInicial;
    var id = ele.id;
    document.getElementById(id).style.display="none";
    if(id=="objeto1")
        document.getElementById("nombre1").style.textDecoration="line-through";
    if(id=="objeto2")
        document.getElementById("nombre2").style.textDecoration="line-through";
    if(id=="objeto3")
        document.getElementById("nombre3").style.textDecoration="line-through";
    if(id=="objeto4")
        document.getElementById("nombre4").style.textDecoration="line-through";
    if(id=="objeto5")
        document.getElementById("nombre5").style.textDecoration="line-through";
    if(id=="objeto6")
        document.getElementById("nombre6").style.textDecoration="line-through";
}

function activarTiempo(){
    s = document.getElementById("temporizador");		
    idInterval = setInterval(function() {
        s.innerHTML = "Tiempo: "+tiempoInicial;
        if(tiempoInicial==0){
            clearInterval(idInterval);
            tiempoTerminado();
        }
        tiempoInicial--;
    },1000);	
}

function tiempoTerminado(){
    if(nivel<4){
        var texto = document.getElementById("componente");
        document.getElementById("panel1").style.display="none";
        document.getElementById("temporizador").style.display="none";
        document.getElementById("nombre1").style.display="none";
        document.getElementById("nombre2").style.display="none";
        document.getElementById("nombre3").style.display="none";
        document.getElementById("nombre4").style.display="none";
        document.getElementById("nombre5").style.display="none";
        document.getElementById("nombre6").style.display="none";
        document.getElementById("puntaje").style.display="none";
        document.getElementById("deco1").style.display="none";
        document.getElementById("deco2").style.display="none";
        document.getElementById("deco3").style.display="none";
        document.getElementById("deco4").style.display="none";
        document.getElementById("deco5").style.display="none";
        document.getElementById("deco6").style.display="none";
        document.getElementById("objeto1").style.display="none";
        document.getElementById("objeto2").style.display="none";
        document.getElementById("objeto3").style.display="none";
        document.getElementById("objeto4").style.display="none";
        document.getElementById("objeto5").style.display="none";
        document.getElementById("objeto6").style.display="none";
        var imagenlogo = document.getElementById("nivel1logo");
        imagenlogo.style.zIndex = "1";
        texto.setAttribute("src","imagenes/menuinicial/limittime.png");
        texto.style.marginTop = "200px";
        texto.style.width = "300px";
        texto.style.height = "350px";
        texto.style.zIndex = "100";
        texto.style.left = "90px";
        imagenlogo.style.height = "700px";
        imagenlogo.style.width = "380px";
        imagenlogo.style.marginTop = "70px";
        imagenlogo.setAttribute("src","imagenes/menuinicial/baseinstr.png");
        imagenlogo.style.display = "initial";
        setTimeout(function(){
            location.reload();
        },2500);
    }
}

function audiosh(){
    var audio = document.getElementById("audio");
    var audiom = document.getElementById("audiomain");
    audiom.pause();
    audio.play();
}

function musicamain(){
    var audio = document.getElementById("audio");
    var audiom = document.getElementById("audiomain");
    audio.pause();
    audiom.play();
}