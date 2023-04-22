let cat = document.querySelectorAll(".collapse .navbar-nav li")
for (let i = 0;  i< cat.length; i++) {
    cat[i].addEventListener("click",function(e){
getGamse(e.target.innerHTML.toLowerCase())

    })
}
async function getGamse(type) {
    document.querySelector('#allgames').style.display='none'
    document.querySelector(".loder-warbar").classList.remove("d-none")
    document.querySelector('.loder-warbar').classList.add('d-block')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa7fc61b0fmsh3bb076f8cdde2d4p12cfe6jsn51bde0498797',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`, options)
    let res = await api.json()
    display(res)
    console.log(res);
    setTimeout(() => {
    document.querySelector('.loder-warbar').classList.remove('d-block')
        document.querySelector(".loder-warbar").classList.add("d-none")
            
        }, 1000);
    document.querySelector('#allgames').style.display='flex'
}
getGamse("mmorpg")

async function getTitle(id) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa7fc61b0fmsh3bb076f8cdde2d4p12cfe6jsn51bde0498797',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let api2 = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    let res2 = await api2.json()
    displaytitle(res2)
    console.log(res2);
}
// getTitle(`${id}`)
function display(api) {
    let temp = ``
    for (let i = 0; i < api.length; i++) {
        temp += `<div id="cli" class=" col-lg-3 g-3 col-md-4 col-sm-6"  onclick="getTitle(${api[i].id})"   >
        <div class="card bg-dark text-white " data-id="${api[i].id}">
        <img src="${api[i].thumbnail}" class="p-2 rounded-4" alt="#" >
        <div class="card-body d-flex flex-wrap">
            <small class="card-title  ">${api[i].title}</small>
            <a href="#" class="btn  disabled ms-2 text-end btn-sm ">free</a>
            <small class="card-text w-100 text-muted">${api[i].short_description.slice(0, 80)}</small>
            <div>
            <small class=" me-3">${api[i].genre}</small>
            <small>${api[i].platform}</small>
            </div>
        </div>
        </div>
    </div>`
} 
document.querySelector("#allgames .row").innerHTML = temp;
    let cards = document.querySelectorAll('#cli');
    for (let i =0; i<cards.length;i++) {
        cards[i].addEventListener('click',(e)=> {
            console.log(e.target.parentElement.dataset.id);
            openSingleGame(e.target.parentElement.dataset.id);
        })
    }
}
function openSingleGame(id) {
    console.log(id);
    document.querySelector(".test").classList.add("d-none")
    document.querySelector(".test2").classList.add("d-none")
    document.querySelector('#single').classList.remove('d-none');
    document.querySelector('#single').style.display='flex';
    document.querySelector('#allgames').style.display='none';
    }

function displaytitle(api2) {
    let temp2 = ``
    temp2 += `<div class="container d-flex justify-content-between py-3 " >
        <h1>Details Game</h1>
        
        <button type="button" class="btn-close" aria-label="Close" id="clocebtn" ></button>
        </div>
        <div class="col-lg-4 col-sm-12">
            <img src="${api2.thumbnail}" class="w-100" alt="image details" >
                </div>
            <div class="col-8">
                <h2>Title:${api2.title}</h2>
                <p>Category: <span class="bg-dark text-light rounded-2 p-1">${api2.genre}</span> </p>
                <p>Category: <span class="bg-dark text-light rounded-2 p-1">${api2.platform}</span></p>
                <p>Category: <span class="bg-dark text-light rounded-2 p-1">${api2.status}</span></p>
                <p>${api2.description}</p>
            <button href="${api2.game_url}" type="button" class="btn btn-outline-danger mb-3 ">Go To The Game</button>
        </div>`
document.getElementById("gettitle").innerHTML = temp2
document.querySelector('#allgames').style.display='none'

let clocebtn= document.getElementById("clocebtn") 

clocebtn.addEventListener("click",function(){
    document.getElementById("single").style.display = 'none'
    document.querySelector('#allgames').style.display='block'
    document.querySelector('#allgames').style.display='block'
    document.querySelector(".test2").classList.replace("d-none", "d-block")
    document.querySelector(".test").classList.replace("d-none","d-block")
        // console.log("asdasdasd");
    })
}


$(window).scroll(function() {
    let scrollTop = $(window).scrollTop()
    if(scrollTop > 68 ){
        $(".navbar").addClass("fixed-top")
    }else{
        $(".navbar").removeClass("fixed-top")
    }
})

// function c(){
//     if(allgames== ("d-none")&&single==("d-flex")){
//         allgames.style.display="d-flex"
//         gettitle.style.display="d-none"
//     }else{
//         allgames.style.display="d-none"
//         gettitle.style.display="d-flex"
//         console.log("nooooooooooo");
//     }
// }
// var clocebtn = document.querySelector("#clocebtn")
// clocebtn.addEventListener("click", closefun)
// function closefun() {
//     single.style.display = "none"
// }

// $(document).ready(function(){
//     $("nav-link").click(function(){
//     $("nav-link").toggleClass("blue");
//     });
// });
// $(nav-link).click.toggleClass("active")

// let nav = document.getElementById("g")
// nav.addEventListener('click',function(){
//     nav.forEach(nav =>nav.classList.remove('active'));
//     this.classList.add('active')
// })

let nav = document.querySelectorAll(".nav-link")
console.log(nav);

nav.forEach(e => {
    e.addEventListener("click",function(){
        nav.forEach(nav=>nav.classList.remove("active"))
        this.classList.add("active")
    })
})
// let clocebtn= document.getElementById("clocebtn")
// for( let i =0; i>clocebtn.length;i++){
//     if (clocebtn===style.display`flex`) {
//         clocebtn.style.display`none`
        
//     } else {
//         clocebtn.style.display`flex`
//     }
// }