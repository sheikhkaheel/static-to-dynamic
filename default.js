alert("Working");

// Top Navigation bar

let top_nav_items = ["Monday, January 1 2045", "Advertise", "Contact", "Login", "Kaheel", "Kafeel", "Zaid", "Zubair"];

let top_nav_div = document.getElementById("top_nav_div");

let top_nav = document.createElement('nav');
top_nav.classList = "navbar navbar-expand-sm bg-dark p-0";

let top_nav_ul = document.createElement('ul');
top_nav_ul.classList = "navbar-nav ml-n2";

// Adding a tag and li tag to ul tag

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

// Bottom Navigation bar

let bottom_nav_items = [
    { innerHtml: "Home", href: "index.html" },
    { innerHtml: "Category", href: "category.html" },
    { innerHtml: "Single News", href: "single.html" },
    { innerHtml: "Contact", href: "contact.html" },
    { innerHtml: "Kaheel", href: "kaheel.html" },
    { innerHtml: "Kafeel", href: "kafeel.html" }
];

let bottom_nav_div = document.getElementById("navbarCollapse");

let child_bottom_nav_div = document.createElement("div");
child_bottom_nav_div.classList = "navbar-nav mr-auto py-0"

for (let i = 0; i < bottom_nav_items.length; i++) {
    let bottom_nav_a = document.createElement('a');
    bottom_nav_a.classList = "nav-item nav-link"
    bottom_nav_a.href = bottom_nav_items[i].href;
    bottom_nav_a.innerText = bottom_nav_items[i].innerHtml;
    child_bottom_nav_div.append(bottom_nav_a);
}
bottom_nav_div.append(child_bottom_nav_div);
 
// Bottom Navigation Seacrch 

let child_bottom_nav_search = document.createElement('div');
child_bottom_nav_search.classList = "input-group ml-auto d-none d-lg-flex"
child_bottom_nav_search.style.width = "100%";
child_bottom_nav_search.style.maxWidth = "300px";

let child_bottom_nav_search_input = document.createElement('input');
child_bottom_nav_search_input.classList = "form-control border-0"
child_bottom_nav_search_input.placeholder = "Keyword"
child_bottom_nav_search_input.type = "text";

let child_bottom_nav_search_div = document.createElement('div');
child_bottom_nav_search_div.classList = "input-group-append"

let child_bottom_nav_search_button = document.createElement('button');
child_bottom_nav_search_button.classList = "input-group-text bg-primary text-dark border-0 px-3"

let child_bottom_nav_search_button_i = document.createElement('i');
child_bottom_nav_search_button_i.classList = "fa fa-search"

child_bottom_nav_search_button.append(child_bottom_nav_search_button_i);
child_bottom_nav_search_div.append(child_bottom_nav_search_button);
child_bottom_nav_search.append(child_bottom_nav_search_div);
child_bottom_nav_search.append(child_bottom_nav_search_input);
bottom_nav_div.append(child_bottom_nav_search);