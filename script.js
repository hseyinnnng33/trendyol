function zaman(){
    const tarihZaman = document.querySelector(".zaman")

    let data = new Date()
    let saat = data.getHours()
    let dakika = data.getMinutes()
    let saniye = data.getSeconds()

    tarihZaman.innerHTML = `${saat} : ${dakika} : ${saniye}`
}

setInterval(zaman, 1000)

const ogeler = document.querySelectorAll(".oge");

function ogelerFunc(){
    ogeler.forEach((item)=>{
        item.addEventListener("click", function(event){
            const clickled = this;

            ogeler.forEach((item)=>{
                if(item.classList.contains("bir-kere-tikla")){
                    item.classList.toggle("bir-kere-tikla")
                }
            })
            clickled.classList.add("bir-kere-tikla")
            event.stopPropagation()
        })
    })
}

document.addEventListener("click", function(){
    ogeler.forEach((item)=>{
        if(item.classList.contains("bir-kere-tikla")){
            item.classList.remove("bir-kere-tikla")
        }
    })
})

ogelerFunc()

const maviAlan = document.querySelector("#selection-area")
const ekranAc = document.querySelector(".pc-ekrani")

let startX, startY, endX, endY;

document.addEventListener("mousedown", function(event){
    if (!ekranAc.classList.contains("active")) {
    startX = event.clientX;
    startY = event.clientY;
    maviAlan.style.left = startX + "px";
    maviAlan.style.top = startY + "px";
    maviAlan.style.width = "0";
    maviAlan.style.height = "0"
    maviAlan.style.display = "block"
    }
})

document.addEventListener("mousemove", function(event){
    if(startX !== null && startY !== null){
        let currentX = event.clientX;
        let currentY = event.clientY;
        let width = currentX - startX;
        let height = currentY - startY;

        endX = currentX;
        endY = currentY;
        
        maviAlan.style.width = Math.abs(width) + "px";
        maviAlan.style.height = Math.abs(height) + "px";
        maviAlan.style.left = (width > 0 ? startX : currentX) + "px";
        maviAlan.style.top = (height > 0 ? startY : currentY) + "px";
    }
})

document.addEventListener("mouseup", function(){
    startX = null;
    startY = null;
    maviAlan.style.display = "none"
})

const ogleriAc = document.querySelector(".pc-masaustu")
const ogeleriAcCik = document.querySelector(".cik-ekran")

ogleriAc.addEventListener("dblclick", function(){
    setTimeout(() => {
        ekranAc.classList.toggle("active");
    }, 100);
})

ogeleriAcCik.addEventListener("click", function(){
    setTimeout(() => {
        ekranAc.classList.toggle("active");
    }, 100);
})

const oyun1 = document.querySelector(".oyun-oyna")

oyun1.addEventListener("click", function(e){
    e.preventDefault()
    const popupFeatures = "width=600,height=500,left=" + (window.innerWidth - 700) / 2 + ",top=" + (window.innerHeight - 500) / 2 + ",resizable=yes,scrollbars=yes";
    window.open("https://www.trigoter100.com/para-harca-js/index.html", "Google Popup", popupFeatures);
})

const havadurumu = document.querySelector(".hava-durumu")

havadurumu.addEventListener("click", function(e){
    e.preventDefault()
    const popupFeatures = "width=600,height=500,left=" + (window.innerWidth - 700) / 2 + ",top=" + (window.innerHeight - 500) / 2 + ",resizable=yes,scrollbars=yes";
    window.open("https://www.trigoter100.com/50-gun-projeler/deneme-projeler/index.html", "Google Popup", popupFeatures);
})

const acilacakEkranlar = document.querySelectorAll(".proje-bir a")

acilacakEkranlar.forEach((item)=>{
    item.addEventListener("click", function(e){
        e.preventDefault()
        const href = this.getAttribute("href")
        const popupFeatures = "width=600,height=500,left=" + (window.innerWidth - 700) / 2 + ",top=" + (window.innerHeight - 500) / 2 + ",resizable=yes,scrollbars=yes";
        window.open(href, "popup", popupFeatures)
    })
})