alert("Working");

// Dynamic top Navigation bar

let top_nav_items = ["Monday, January 1 2045", "Advertise", "Contact", "Login", "Kaheel","Kafeel","Zaid","Zubair"];

let top_nav_div = document.getElementById("top_nav_div");

let top_nav = document.createElement('nav');
top_nav.classList = "navbar navbar-expand-sm bg-dark p-0";

let top_nav_ul = document.createElement('ul');
top_nav_ul.classList = "navbar-nav ml-n2";

// adding a tag and li tag to ul tag

for (let i = 0; i < top_nav_items.length; i++) {
    let top_nav_li = document.createElement('li');
    top_nav_li.classList = "nav-item border-right border-secondary";

    let top_nav_a = document.createElement('a');
    top_nav_a.classList = "nav-link text-body small";
    top_nav_a.href = "#";
    top_nav_a.innerText = top_nav_items[i];

    top_nav_li.appendChild(top_nav_a);
    top_nav_ul.appendChild(top_nav_li);
}

top_nav.appendChild(top_nav_ul);
top_nav_div.appendChild(top_nav);
