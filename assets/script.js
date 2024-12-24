const root = document.getElementById('container');

async function setData(){
    const response = await fetch('assets/data.json')
    const data = await response.json();

    let htmlCode = "";

    for (element of data) {
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

setData();
