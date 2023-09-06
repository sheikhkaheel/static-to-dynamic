alert("Working...");

// Top Navigation bar

let top_nav_items = ["Monday, January 1 2045", "Advertise", "Contact", "Login", "Kaheel", "Kafeel", "Zaid", "Zubair"];

let top_nav_div = document.getElementById("top_nav_div");

let top_nav = document.createElement('nav');
top_nav.classList = "navbar navbar-expand-sm bg-dark p-0";

let top_nav_ul = document.createElement('ul');
top_nav_ul.classList = "navbar-nav ml-n2";

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

// Bottom Navigation Search 

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


// Left News SLider 

let left_News_slider_items = [
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-800x500-1.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-800x500-2.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-800x500-3.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." }
];

let left_News_slider_div = document.getElementById('left_News_slider_div');

for (let i = 0; i < left_News_slider_items.length; i++) {
    let left_News_slider = document.createElement('div');
    left_News_slider.classList = "position-relative overflow-hidden";
    left_News_slider.style.height = "500px"; // Set the height property correctly

    let left_News_slider_img = document.createElement('img');
    left_News_slider_img.classList = "img-fluid h-100";
    left_News_slider_img.src = left_News_slider_items[i].imgSrc;
    left_News_slider_img.style.objectFit = "cover"; // Set the object-fit property correctly

    let child_left_News_slider_div = document.createElement("div");
    child_left_News_slider_div.classList = "overlay";

    let childs_left_News_slider_div = document.createElement("div");
    childs_left_News_slider_div.classList = "mb-2";

    let childs_left_News_slider_div_a1 = document.createElement("a");
    childs_left_News_slider_div_a1.href = ""; // Set the href attribute to a valid URL
    childs_left_News_slider_div_a1.classList = "badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
    childs_left_News_slider_div_a1.innerHTML = left_News_slider_items[i].hrefText;

    let childs_left_News_slider_div_a2 = document.createElement("a");
    childs_left_News_slider_div_a2.classList = "text-white";
    childs_left_News_slider_div_a2.href = ""; // Set the href attribute to a valid URL
    childs_left_News_slider_div_a2.innerHTML = left_News_slider_items[i].hrefDate;

    let childs_left_News_slider_div_a3 = document.createElement("a");
    childs_left_News_slider_div_a3.classList = "h2 m-0 text-white text-uppercase font-weight-bold";
    childs_left_News_slider_div_a3.href = ""; // Set the href attribute to a valid URL
    childs_left_News_slider_div_a3.innerHTML = left_News_slider_items[i].hrefPara;

    childs_left_News_slider_div.append(childs_left_News_slider_div_a1);
    childs_left_News_slider_div.append(childs_left_News_slider_div_a2);
    child_left_News_slider_div.append(childs_left_News_slider_div_a3);
    child_left_News_slider_div.append(childs_left_News_slider_div);
    left_News_slider.append(child_left_News_slider_div);
    left_News_slider.append(left_News_slider_img);
    left_News_slider_div.append(left_News_slider);
}


// Right News slider

let Right_News_slider_div = document.getElementById('right_News_slider_div');

let right_News_slider_items = [
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-700x435-1.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-700x435-2.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-700x435-3.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-700x435-4.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-700x435-4.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-700x435-4.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-700x435-4.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-700x435-4.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-700x435-4.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-700x435-4.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-700x435-4.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { hrefText: "Business News", hrefDate: "Jan 01, 2045", imgSrc: "img/news-700x435-4.jpg", hrefPara: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
];

for (let i = 0; i < right_News_slider_items.length; i++) {
    let right_News_slider_main = document.createElement('div');
    right_News_slider_main.classList = "col-md-6 px-0";

    let right_News_slider = document.createElement('div');
    right_News_slider.classList = "position-relative overflow-hidden";
    right_News_slider.style.height = "250px";

    let right_News_slider_img = document.createElement('img');
    right_News_slider_img.classList = "img-fluid w-100 h-100";
    right_News_slider_img.src = right_News_slider_items[i].imgSrc;
    right_News_slider_img.style.objectFit = "cover";

    let child_right_News_slider_div = document.createElement("div");
    child_right_News_slider_div.classList = "overlay";

    let childs_right_News_slider_div = document.createElement("div");
    childs_right_News_slider_div.classList = "mb-2";

    let childs_right_News_slider_div_a1 = document.createElement("a");
    childs_right_News_slider_div_a1.href = ""; // Set the href attribute to a valid URL
    childs_right_News_slider_div_a1.classList = "badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2";
    childs_right_News_slider_div_a1.innerHTML = right_News_slider_items[i].hrefText;

    let childs_right_News_slider_div_a2 = document.createElement("a");
    childs_right_News_slider_div_a2.classList = "text-white";
    childs_right_News_slider_div_a2.href = ""; // Set the href attribute to a valid URL
    childs_right_News_slider_div_a2.innerHTML = right_News_slider_items[i].hrefDate;

    let childs_right_News_slider_div_a3 = document.createElement("a");
    childs_right_News_slider_div_a3.classList = "h6 m-0 text-white text-uppercase font-weight-semi-bold";
    childs_right_News_slider_div_a3.href = ""; // Set the href attribute to a valid URL
    childs_right_News_slider_div_a3.innerHTML = right_News_slider_items[i].hrefPara;

    childs_right_News_slider_div.append(childs_right_News_slider_div_a1);
    childs_right_News_slider_div.append(childs_right_News_slider_div_a2);
    child_right_News_slider_div.append(childs_right_News_slider_div_a3);
    child_right_News_slider_div.append(childs_right_News_slider_div);
    right_News_slider.append(child_right_News_slider_div);
    right_News_slider.append(right_News_slider_img);
    right_News_slider_main.append(right_News_slider);
    Right_News_slider_div.append(right_News_slider_main);

}


// Bottom News Slider

bottom_News_slider_items = [
    {aText : "Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales" ,title : "Breaking1"},
    {aText : "Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales" ,title : "Breaking2"}
];

for (let i = 0; i < bottom_News_slider_items.length; i++) {
    let bottom_News_slider_div = document.getElementById('bottom_News_slider_div');

    let bottom_News_slider = document.createElement('div');
    bottom_News_slider.classList = 'd-flex justify-content-between';

    let child_bottom_News_div1 = document.createElement('div');
    child_bottom_News_div1.classList = 'bg-primary text-dark text-center font-weight-medium py-2';
    child_bottom_News_div1.style.width = '170px'
    child_bottom_News_div1.innerHTML = bottom_News_slider_items[i].title;

    let child_bottom_News_div2 = document.createElement('div');
    child_bottom_News_div2.classList = 'owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3';
    child_bottom_News_div2.style.width = 'calc(100% - 170px)';
    child_bottom_News_div2.style.paddingRight = '90px';

    let childs_bottom_News_div = document.createElement('div');
    childs_bottom_News_div.classList = 'text-truncate';

    let childs_bottom_News_a = document.createElement('a');
    childs_bottom_News_a.classList = 'text-white text-uppercase font-weight-semi-bold';
    childs_bottom_News_a.href = "";
    childs_bottom_News_a.innerHTML = bottom_News_slider_items[i].aText;

    childs_bottom_News_div.append(childs_bottom_News_a);
    child_bottom_News_div2.append(childs_bottom_News_div);
    bottom_News_slider.append(child_bottom_News_div1);
    bottom_News_slider.append(child_bottom_News_div2);
    bottom_News_slider_div.append(bottom_News_slider);

}



