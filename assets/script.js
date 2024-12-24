const root = document.getElementById('container');

const data = [
    {
        title:"ACSS CUMBERLAND",
        desc:"ACSS CUMBERLAND 18TW/14TW/18TW/19ACS",
        img:"assets/images/cumberland.jpg"
    },
    {
        title:"GAP-516 SQMM",
        desc:"GAP-516 SQMM 14TW/9TW/7ST(2.50)",
        img:"assets/images/gap_516.jpg"
    },
    {
        title:"ACCC GDANSK",
        desc:"ACCC GDANSK 10TW/6TW/CTC(5.97MM)",
        img:"assets/images/gdansk.jpg"
    },
    {
        title:"GAP-593 SQMM",
        desc:"GAP-593 SQMM 24RW/18RW/8TW/7ST(2.95)",
        img:"assets/images/gap_593.jpg"
    },
    {
        title:"ACCC CASAPLUSE",
        desc:"ACCC CASAPLUSE 10TW/6TW/CTC(7.11)",
        img:"assets/images/casapluse.jpg"
    }

]

let htmlCode = "";

for(element of data){
    let card = `<div class="card" >
            <img src="${element.img}" alt="" class="card-img">
            <h1 class="card-title">${element.title}</h1>
            <p class="card-desc">${element.desc}</p>
            <div class="card-link">
                <a href="${element.img}">See Photo</a>
            </div>
        </div>`

    htmlCode = htmlCode + card
}

root.innerHTML = htmlCode;
