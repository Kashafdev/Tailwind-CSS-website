var hamburger = document.getElementById("hamburger");
var crossBtn = hamburger.innerHTML;
var responsiveNav = document.getElementById("responsive-nav");
var profiles = document.getElementById("profiles")
var nav_active = false;
console.log(hamburger);

// Responsive Nav menu
function buttonClicked() {
  if (nav_active) {
    responsiveNav.classList.add("hidden");
    nav_active = false;
    hamburger.innerHTML = crossBtn;
  } else {
    responsiveNav.classList.remove("hidden");
    nav_active = true;
    hamburger.innerHTML = `<img width="60%" src="https://img.icons8.com/ios-glyphs/90/null/multiply.png"/>`;
  }
}

// Cards Data
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(function (users) {
    users = users.slice(0,4)
    console.log(users[0])
    users.forEach((element,index) => {
        const html = `
        <div class="bg-slate-800 w-[100%] p-5 mb-3 shadow-lg rounded-lg flex flex-col justify-center items-center">
        <img class="rounded-full" width="20%" src="https://xsgames.co/randomusers/assets/avatars/male/${index}.jpg" alt="">
        <h1 class="text-lg">${element.name}</h1>
        <p class="text-grey text-sm">${element.email}</p>
        <p class="text-grey text-sm" >${element.company.name}</p>
        <div class="button my-2">
            <button class="py-1.5 px-2.5 bg-sky-700 rounded-full text-white hover:bg-sky-900">Profile</button>
            <button class="py-1.5 px-2.5 rounded-full text-white border-solid border-[1px] border-white hover:bg-white hover:text-sky-800" >Connect </button>
        </div>
      </div>
        `
        profiles.innerHTML += html
    });
  });
