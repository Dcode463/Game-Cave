// all documents
const objD = {
 navReponsiveMovil : document.getElementById('navReponsiveMovil'),
 sectionWelcome : document.getElementById('welcomeSection'),
 sectionInit : document.getElementById('initSection'),
 // scrooll
 buttonScrollLeft : document.getElementById('buttonMoveScrllooX'),
 buttonScrolRigth : document.getElementById('buttonMoveScrlloo_X'),
 elementFatherMoveScroll : document.querySelector('.containerConsole'),
 // elementsPush
gifElement : document.getElementById('gifConsole'),
nameConsole : document.getElementById('nameConsole'),
textInfoConsolesSection : document.getElementById('textInfoConsolesSection'),
imgPng : document.getElementById('imgPng'),
animationImgClass : document.querySelector('.animationImgClass'),
containerTxtConsoles : document.querySelector('.containerTxtConsoles')
}

window.addEventListener('load',()=> {
objD.sectionWelcome.style.opacity = '0';
objD.sectionInit.style.opacity = '0';
setTimeout(()=>{objD.sectionWelcome.style.display = 'none'; inti()},1000)
})


function inti () {
	objD.sectionInit.style.display = 'block';
objD.navReponsiveMovil.style.display = 'block';
setTimeout(()=>{objD.sectionInit.style.opacity = '1';objD.navReponsiveMovil.style.opacity = '1';},500)
}

// scroll console
// config

// functions
let configObjVideoConsole = { 
configVideoPs5 : {
 gifUrl : 'media/ps5/ps5.gif',
 pngUrl : 'media/ps5/ps5-product-thumbnail-01-en-14sep21.webp',
 pTextName : 'PlayStation 5',
 pTextInfo : `Explora el futuro del juego con la PlayStation 5.
  Desde su diseño elegante hasta su potencia revolucionaria, 
  cada detalle está diseñado para llevarte a nuevas alturas
   de diversión y emoción. ¡Bienvenido al siguiente nivel de juego!`},
configVideoPs4 : {
 gifUrl : 'media/ps4/NktE.gif',
 pngUrl : 'media/ps4/ps4.png',
 pTextName : 'PlayStation 4',
 pTextInfo : `En nuestro servicio de consolas, te ofrecemos 
 la oportunidad de sumergirte en la próxima generación de 
 entretenimiento interactivo con la PS4.`},
configVideoXboox : {
gifUrl : 'media/xbooxSeriesX/giphy.gif',
pngUrl : 'media/xbooxSeriesX/seriesX.png',
pTextName : 'Xbox Series X',
pTextInfo : ` La Xbox Series X redefine la experiencia de juego con un rendimiento inigualable y una potencia asombrosa. 
Con su arquitectura personalizada, esta consola de última generación ofrece gráficos impresionantes en resolución 4K real, 
sumergiendo a los jugadores en mundos visualmente deslumbrantes y detallados`},
configVideoXbooxS : {
gifUrl : 'media/xbooxSeriesS/giphyS.gif',
pngUrl : 'media/xbooxSeriesS/xbooxSeriesS.png',
pTextName : 'Xbox Series S',
pTextInfo : `La Xbox Series S es la joya compacta que redefine la experiencia de juego.
 Con un diseño elegante y potencia extraordinaria, este sistema ofrece un rendimiento impresionante en un formato más pequeño.`}
}
let validor = false;
let matrizUtilizado = []
let objectMatriz = ['configVideoXboox','configVideoPs4','configVideoPs5','configVideoXbooxS']

const whatObject = () => {
let returnObject;
 validor = false;
for(let i = 0; i <= objectMatriz.length; i++){ 
	let verificacionIgualdad = matrizUtilizado.some(e => e === objectMatriz[i])
if(verificacionIgualdad) continue
else if(matrizUtilizado.length != objectMatriz.length) { 
matrizUtilizado.push(objectMatriz[i])
return objectMatriz[i]
}
else { 
matrizUtilizado = [];
return whatObject()

}
}}
function animationAutomaticScroll(){
const init_Recursividad = object =>{
let consoleObject = configObjVideoConsole[object];
objD.gifElement.src = consoleObject.gifUrl;
objD.nameConsole.textContent = consoleObject.pTextName;
objD.textInfoConsolesSection.textContent = consoleObject.pTextInfo;
objD.imgPng.src = consoleObject.pngUrl;
setTimeout(()=> {
objD.imgPng.style.left = '6%';
objD.containerTxtConsoles.style.right = '1%'
},1000)
}
const iniClearactualSection = () => {
objD.imgPng.style.left = '-100%';
objD.containerTxtConsoles.style.right = '-100%'
setTimeout(()=>{init_Recursividad(whatObject())},1000)
}
iniClearactualSection()
}

// Events 

animationAutomaticScroll() // start animation console animation

const initAutomaticScroll = setInterval(()=> {animationAutomaticScroll()},10000) // inicio automatico de console animation
