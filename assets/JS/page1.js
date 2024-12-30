const root = document.getElementById('container');

const menuBtn = document.getElementById('menu-btn');
const crossBtn = document.getElementById('cross-btn');

menuBtn.addEventListener('click',()=>{
    document.getElementById('menus').style.display = "block";
    menuBtn.style.display="none";
    crossBtn.style.display="block"
})

crossBtn.addEventListener('click',()=>{
    document.getElementById('menus').style.display = "none";
    menuBtn.style.display="block";
    crossBtn.style.display="none"
})

async function setData(){
    const response = await fetch('assets/data.json')
    const data = await response.json();

    let htmlCode = "";
    console.log(data)

    for (element of data.hpc_des) {
        let card = `<div class="card" >
            <h1 class="card-title">${element.title}</h1>
            <p class="card-desc">${element.desc}</p>
            <img src="${element.img}" alt="" class="card-img">
            
            <div class="card-link">
                <a href="${element.img}">See Photo</a>
            </div>
        </div>`

        htmlCode = htmlCode + card
    }

    root.innerHTML = htmlCode;

}

function setMenu(){

    const menus = [
        {
            name:"HPC Condcutor",
            href:"page1.html"
        },
        {
            name:"HPC Drawing",
            href:"page2.html"
        }
    ]
    let htmlCode = "";

    for (element of menus) {
       let menu = `<li> <a href="${element.href}">${element.name}</a> </li>`

        htmlCode = htmlCode + menu
    }

    document.getElementById('menus').innerHTML = htmlCode;
    
}

setData();
setMenu();




