alert("Working...");

// Top Navigation bar

let top_nav_items = ["Monday, 7 Septumber, 2023", "Advertise", "Contact", "Login"];

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
    { innerHtml: "News", href: "index.html" },
    { innerHtml: "Opinion", href: "category.html" },
    { innerHtml: "Single News", href: "single.html" },
    { innerHtml: "Features", href: "contact.html" },
    { innerHtml: "Economy", href: "kaheel.html" },
    { innerHtml: "More", href: "kafeel.html" }
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
    { hrefText: "Business News", hrefDate: "Sep 7, 2023", imgSrc: "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-08-30T120625Z_813110613_RC2RX2ALCQFA_RTRMADP_3_FRANCE-ISLAM-1694090550.jpg?resize=770%2C513&quality=80", hrefPara: "A Muslim woman walks in a street in Nantes, France" },
    { hrefText: "Business News", hrefDate: "Sep 7, 2023", imgSrc: "https://www.aljazeera.com/wp-content/uploads/2023/09/33U38WW-highres-1694089217.jpg?resize=770%2C513&quality=80", hrefPara: "Pakistani army personnel inspect the site of a bomb attack in Bannu district of Khyber Pakhtunkhwa province" },
    { hrefText: "Business News", hrefDate: "Sep 7, 2023", imgSrc: "https://www.aljazeera.com/wp-content/uploads/2023/09/Dude2-1693986878.jpg?resize=770%2C513&quality=80", hrefPara: "Jalel Alouni thinks about his 27-year-old son Mahrez who is in Serbia fleeing a future without hope" }
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
    { hrefText: "Business News", hrefDate: "Sep 7, 2023", imgSrc: "https://www.aljazeera.com/wp-content/uploads/2023/09/2017-06-08T035639Z_1335368517_RC1AB6378760_RTRMADP_3_GULF-QATAR-AIRLINES-1694062666.jpg?resize=770%2C513&quality=80", hrefPara: "Australia's government has been accused" },
    { hrefText: "Business News", hrefDate: "Sep 7, 2023", imgSrc: "https://www.aljazeera.com/wp-content/uploads/2023/09/afp.com-20230417-PH-GTY-1482904507-highres-1694046385.jpg?resize=770%2C513&quality=80", hrefPara: "Ozempic has been hailed as a weight-loss wonder drug" },
    { hrefText: "Business News", hrefDate: "Sep 7, 2023", imgSrc: "https://www.aljazeera.com/wp-content/uploads/2023/09/AP23242538288852-1694062179.jpg?resize=770%2C513&quality=80", hrefPara: "A supporter of the January 6 defendants and former President Donald Trump" },
    { hrefText: "Business News", hrefDate: "Sep 7, 2023", imgSrc: "https://www.aljazeera.com/wp-content/uploads/2023/09/AP23244328375185-1693644123.jpg?resize=770%2C513&quality=80", hrefPara: "India and Pakistan have not played a bilateral cricket series since 2012" },
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
    {title : "Breaking1" ,a1Text : "The Asia Cup cricket tournament is halfway through its schedule of matches but the sport’s administrators in the “host” country Pakistan." ,a2Text : "Many victims were in houses that were washed away, trapped in cars or shocked by electrical wires."},
    {title : "Breaking2" ,a1Text : "The move comes as the Biden administration seeks to expand protections against oil and gas development on public lands." ,a2Text : "For a decade, water in Kenya’s Rift Valley has been rising due to climate change. The displaced say they want normalcy."},
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

    let childs_bottom_News_div1 = document.createElement('div');
    childs_bottom_News_div1.classList = 'text-truncate';

    let childs_bottom_News_a1 = document.createElement('a');
    childs_bottom_News_a1.classList = 'text-white text-uppercase font-weight-semi-bold';
    childs_bottom_News_a1.href = "";
    childs_bottom_News_a1.innerHTML = bottom_News_slider_items[i].a1Text;

    let childs_bottom_News_div2 = document.createElement('div');
    childs_bottom_News_div2.classList = 'text-truncate';

    let childs_bottom_News_a2 = document.createElement('a');
    childs_bottom_News_a2.classList = 'text-white text-uppercase font-weight-semi-bold';
    childs_bottom_News_a2.href = "";
    childs_bottom_News_a2.innerHTML = bottom_News_slider_items[i].a2Text;

    childs_bottom_News_div1.append(childs_bottom_News_a1);
    childs_bottom_News_div2.append(childs_bottom_News_a2);
    child_bottom_News_div2.append(childs_bottom_News_div1);
    child_bottom_News_div2.append(childs_bottom_News_div2);
    bottom_News_slider.append(child_bottom_News_div1);
    bottom_News_slider.append(child_bottom_News_div2);
    bottom_News_slider_div.append(bottom_News_slider);

}

// Featured News slider

let featured_News_slider_div = document.getElementById('featured_News');
featured_News_slider_div.classList = "owl-carousel news-carousel carousel-item-4 position-relative";

let featured_News_slider_items = [
    {imgSrc : "https://network.aljazeera.net/sites/default/files/events/2023/WEB%20%281%29.jpg" , href1 : "Business" ,href2 : "Sep 7, 2023" ,href3 : "AJCS to delve into involvement of Palestinians in Israel"},
    {imgSrc : "https://network.aljazeera.net/sites/default/files/events/2023/7E4A9456.jpg" , href1 : "Business" ,href2 : "Sep 7, 2023" ,href3 : "Al Jazeera Balkans Documentary Film Festival"},
    {imgSrc : "https://network.aljazeera.net/sites/default/files/events/2022/mrkz_ldrst_-_dw.png" , href1 : "Business" ,href2 : "Sep 7, 2023" ,href3 : "Al Jazeera Studies Center hosts lecture on Iran's Islamic Revolution"},
    {imgSrc : "https://network.aljazeera.net/sites/default/files/events/2022/iran-saudi_map.jpg" , href1 : "Business" ,href2 : "Sep 7, 2023" ,href3 : "The development of Saudi-Iranian relations and prospects for the future"},
    {imgSrc : "https://network.aljazeera.net/sites/default/files/events/2022/qatar-book-fair-771x513.jpg" , href1 : "Business" ,href2 : "Sep 7, 2023" ,href3 : "26th Doha International Book Fair"},
    
];

for(let i = 0; i < featured_News_slider_items.length; i++) {
    let featured_News_slider = document.createElement('div');
    featured_News_slider.classList ="position-relative overflow-hidden";
    featured_News_slider.style.height = "300px";

    let child_featured_News_slider_img = document.createElement('img');
    child_featured_News_slider_img.classList = "img-fluid h-100";
    child_featured_News_slider_img.src = featured_News_slider_items[i].imgSrc;
    child_featured_News_slider_img.style.objectFit = "cover";

    let child_featured_News_slider_div = document.createElement('div');
    child_featured_News_slider_div.classList = "overlay";

    let childs_featured_News_slider_div = document.createElement('div');
    childs_featured_News_slider_div.classList = "mb-2";

    let childs_featured_News_slider_a1 = document.createElement('a');
    childs_featured_News_slider_a1.classList = "badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2";
    childs_featured_News_slider_a1.innerHTML = featured_News_slider_items[i].href1;
    childs_featured_News_slider_a1.href = "";

    let childs_featured_News_slider_a2 = document.createElement('a');
    childs_featured_News_slider_a2.classList = "text-white";
    childs_featured_News_slider_a2.href = "";

    let childs_featured_News_slider_small = document.createElement('small');
    childs_featured_News_slider_small.innerHTML = featured_News_slider_items[i].href2;

    let childs_featured_News_slider_a3 = document.createElement('a');
    childs_featured_News_slider_a3.classList = "h6 m-0 text-white text-uppercase font-weight-semi-bold";
    childs_featured_News_slider_a3.href = "";
    childs_featured_News_slider_a3.innerText = featured_News_slider_items[i].href3;

    childs_featured_News_slider_a2.append(childs_featured_News_slider_small);
    childs_featured_News_slider_div.append(childs_featured_News_slider_a1);
    childs_featured_News_slider_div.append(childs_featured_News_slider_a2);
    child_featured_News_slider_div.append(childs_featured_News_slider_div);
    child_featured_News_slider_div.append(childs_featured_News_slider_a3);
    featured_News_slider.append(child_featured_News_slider_div);
    featured_News_slider.append(child_featured_News_slider_img);
    featured_News_slider_div.append(featured_News_slider);
}


// Tranding News 


let tranding_News_div = document.getElementById("tranding_News");

let tranding_News_items = [
    {imgSrc : "img/news-110x110-1.jpg" , href1 : "Business" , href2 : "Jan 01, 2045" , href3 : "Lorem ipsum dolor sit amet elit..."},
    {imgSrc : "img/news-110x110-2.jpg" , href1 : "Business" , href2 : "Jan 01, 2045" , href3 : "Lorem ipsum dolor sit amet elit..."},
    {imgSrc : "img/news-110x110-3.jpg" , href1 : "Business" , href2 : "Jan 01, 2045" , href3 : "Lorem ipsum dolor sit amet elit..."},
    {imgSrc : "img/news-110x110-4.jpg" , href1 : "Business" , href2 : "Jan 01, 2045" , href3 : "Lorem ipsum dolor sit amet elit..."},
    {imgSrc : "img/news-110x110-5.jpg" , href1 : "Business" , href2 : "Jan 01, 2045" , href3 : "Lorem ipsum dolor sit amet elit..."},
];

for(let i = 0; i < tranding_News_items.length; i++) {
    let tranding_News = document.createElement('div');
    tranding_News.classList ="d-flex align-items-center bg-white mb-3";
    tranding_News.style.height = "110px";

    let child_tranding_News_img = document.createElement('img');
    child_tranding_News_img.src = tranding_News_items[i].imgSrc;
    child_tranding_News_img.classList = "img-fluid";

    let child_tranding_News_div = document.createElement('div');
    child_tranding_News_div.classList = "w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0";
    
    let childs_tranding_News_div = document.createElement('div');
    childs_tranding_News_div.classList = "mb-2";
    
    let childs_tranding_News_a1 = document.createElement('a');
    childs_tranding_News_a1.href = "";
    childs_tranding_News_a1.classList = "badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2";
    childs_tranding_News_a1.innerHTML = tranding_News_items[i].href1;
    
    let childs_tranding_News_a2 = document.createElement('a');
    childs_tranding_News_a2.href = "";
    childs_tranding_News_a2.classList = "text-body";
    
    let childs_tranding_News_small = document.createElement('small');
    childs_tranding_News_small.innerHTML = tranding_News_items[i].href2;
    
    let childs_tranding_News_a3 = document.createElement('a');
    childs_tranding_News_a3.href = "";
    childs_tranding_News_a3.classList = "h6 m-0 text-secondary text-uppercase font-weight-bold";
    childs_tranding_News_a3.innerHTML = tranding_News_items[i].href3
    
    childs_tranding_News_a2.append(childs_tranding_News_small);
    childs_tranding_News_div.append(childs_tranding_News_a1);
    childs_tranding_News_div.append(childs_tranding_News_a2);
    child_tranding_News_div.append(childs_tranding_News_div);
    child_tranding_News_div.append(childs_tranding_News_a3);
    tranding_News.append(child_tranding_News_div);
    tranding_News.append(child_tranding_News_img);
    tranding_News_div.append(tranding_News);
}