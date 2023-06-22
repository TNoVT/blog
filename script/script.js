var limitBookmark = 100;
var bookmark = (function(){
list = [];

//Structure Push to Object New Item
function Item(id,name,status,type,link,img){
	this.id = id;
	this.name = name;
    this.status = status;
	this.type = type;
    this.link = link;
	this.img = img;
}

//Event Saving to Local Storage
function setBookmark(){
	localStorage.setItem('bookmark', JSON.stringify(list));
}

function loadBookmark() {
    list = JSON.parse(localStorage.getItem('bookmark'));
}

if (localStorage.getItem("bookmark") != null) {
    loadBookmark();
}

obj = {};
//Add New Item Object to Array
obj.addItemTobookmark = function(id,name,status,type,link,img) {
    var item = new Item(id,name,status,type,link,img),
    itemList = list;
    if(itemList != null){
    same = itemList.find(item =>{return item.id == id;});
    if(list.length<limitBookmark){
     if(!same){
    	list.push(item);
    	setBookmark();
      }
     }
    }else{
    	list.push(item);
    	setBookmark();
    }
}

//Remove Bookmark    
obj.removeThisItem = function(id) {
    for(var item in list) {
      if(list[item].id === id) {
        list.splice(item, 1);
        break;
      }
    }
    setBookmark();
  }
  
  return obj;
})();

$('.bookmark').each(function(event) {
const getData = JSON.parse(localStorage.getItem('bookmark'));
for(var i in getData){
	if(getData[i].id == $(this).data('id')){
     $(this).html('Bookmarked')
     $(this).addClass('bookmarked')
    }
}
  $(this).click(function(){
const list = JSON.parse(localStorage.getItem('bookmark'));
  //Retrieve Data From Post
  	const id = $(this).data('id'),
  	name = $('article.oh.a2 header h1.mb-6').text().replace('\n',''),
    link = location.protocol + '//' + location.hostname +  location.pathname,
    img = $('div.grid div.a1 figure img').attr('src'),
    status = $('aside.s1 div.y6x11p:nth-child(1) span.dt a').text().replace('\n',''),
    type = $('aside.s1 div.y6x11p:nth-child(2) span.dt a').text().replace('\n','');
    
  //Set To Function Bookmark
if(list == null){
  if(!$(this).hasClass('bookmarked')){
    	bookmark.addItemTobookmark(id,name,status,type,link,img);
  		$(this).addClass('bookmarked')
  		$(this).html('Bookmarked')
  }else{
  	bookmark.removeThisItem(id);
  	$(this).html('Bookmark <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M1 3.25C1 2.56 1.56 2 2.249 2h.5c.69 0 1.248.56 1.248 1.25v9.495c0 .69-.559 1.25-1.248 1.25h-.5A1.25 1.25 0 0 1 1 12.744V3.249ZM2.249 3a.25.25 0 0 0-.25.25v9.495c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25V3.249a.25.25 0 0 0-.25-.25h-.5Zm2.748.25c0-.69.559-1.25 1.249-1.25h.5c.689 0 1.248.56 1.248 1.25v9.495c0 .69-.56 1.25-1.249 1.25h-.5a1.25 1.25 0 0 1-1.248-1.25V3.249ZM6.246 3a.25.25 0 0 0-.25.25v9.495c0 .138.112.25.25.25h.5a.25.25 0 0 0 .249-.25V3.249a.25.25 0 0 0-.25-.25h-.5Zm5.726 1.777a1.249 1.249 0 0 0-1.57-.713l-.583.204a1.25 1.25 0 0 0-.746 1.645l2.937 7.304c.249.62.94.933 1.571.713l.582-.204a1.25 1.25 0 0 0 .746-1.646l-2.937-7.303Zm-1.24.23a.25.25 0 0 1 .313.143l2.937 7.303a.25.25 0 0 1-.149.33l-.582.203a.25.25 0 0 1-.314-.142L10 5.54a.25.25 0 0 1 .149-.329l.582-.204Z"/></svg>')
  	$(this).removeClass('bookmarked')
  }
}else{
  if(!$(this).hasClass('bookmarked')){
if(list.length<limitBookmark){
    	bookmark.addItemTobookmark(id,name,status,type,link,img);
  		$(this).addClass('bookmarked')
  		$(this).html('Bookmarked')
}
  }else{
  	bookmark.removeThisItem(id);
  	$(this).html('Bookmark <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M1 3.25C1 2.56 1.56 2 2.249 2h.5c.69 0 1.248.56 1.248 1.25v9.495c0 .69-.559 1.25-1.248 1.25h-.5A1.25 1.25 0 0 1 1 12.744V3.249ZM2.249 3a.25.25 0 0 0-.25.25v9.495c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25V3.249a.25.25 0 0 0-.25-.25h-.5Zm2.748.25c0-.69.559-1.25 1.249-1.25h.5c.689 0 1.248.56 1.248 1.25v9.495c0 .69-.56 1.25-1.249 1.25h-.5a1.25 1.25 0 0 1-1.248-1.25V3.249ZM6.246 3a.25.25 0 0 0-.25.25v9.495c0 .138.112.25.25.25h.5a.25.25 0 0 0 .249-.25V3.249a.25.25 0 0 0-.25-.25h-.5Zm5.726 1.777a1.249 1.249 0 0 0-1.57-.713l-.583.204a1.25 1.25 0 0 0-.746 1.645l2.937 7.304c.249.62.94.933 1.571.713l.582-.204a1.25 1.25 0 0 0 .746-1.646l-2.937-7.303Zm-1.24.23a.25.25 0 0 1 .313.143l2.937 7.303a.25.25 0 0 1-.149.33l-.582.203a.25.25 0 0 1-.314-.142L10 5.54a.25.25 0 0 1 .149-.329l.582-.204Z"/></svg>')
  	$(this).removeClass('bookmarked')
  }
}
  })
});

(function(){var elements = document.querySelectorAll('img[data-src]');var index = 0;var lazyLoad = function() { if(index >= elements.length) return;var item = elements[index]; if((this.scrollY + this.innerHeight) > item.offsetTop) {var src = item.getAttribute("data-src");item.src = src;item.addEventListener('load', function() {item.removeAttribute('data-src');});index++;lazyLoad();}};var init = function(){window.addEventListener('scroll', lazyLoad);lazyLoad();};return init();})();

var uri = window.location.toString();if (uri.indexOf("?m=1","?m=1") > 0) {var clean_uri = uri.substring(0, uri.indexOf("?m=1"));window.history.replaceState({}, document.title, clean_uri);}

const scrollContainer = document.querySelector(".scroll");
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


const scrollContainer = document.getElementById("slides"),
  matchAuto = document.getElementById("slider");
function slideShow() {
    var container = $('.slides').width(),
      matchWidth = scrollContainer.scrollLeft,
      widthMax = scrollContainer.scrollWidth;
  if((matchWidth+container)+700>=widthMax){
    scrollContainer.scrollLeft += -widthMax;
  }else{
    scrollContainer.scrollLeft += container;
  }
}
var slide = setInterval(slideShow, 5000);

matchAuto.addEventListener("mouseover", function(){ clearInterval(slide)});
matchAuto.addEventListener("touchstart", function(){ clearInterval(slide)});

matchAuto.addEventListener("mouseout", function(){ slide = setInterval(slideShow, 5000);});
matchAuto.addEventListener("touchend", function(){ slide = setInterval(slideShow, 5000);});
document.getElementById('right-button').addEventListener('click', function(e) {
  e.preventDefault();
  var container = $('.slides').width(),
      matchWidth = scrollContainer.scrollLeft,
      widthMax = scrollContainer.scrollWidth;
  if((matchWidth+container)+700>=widthMax){
    scrollContainer.scrollLeft += -widthMax;
  }else{
    scrollContainer.scrollLeft += container;
  }
  });
document.getElementById('left-button').addEventListener('click', function(e) {
  e.preventDefault();
  var container = $('.slides').width(),
      matchWidth = scrollContainer.scrollLeft,
      widthMax = scrollContainer.scrollWidth;
  if(matchWidth==0){
    scrollContainer.scrollLeft += widthMax;
  }else{
    scrollContainer.scrollLeft += -container;
  }
  });
if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.slides');
const end = (e) => {
	isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;
  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);
  
	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();
}

var root = document.documentElement
var button = document.querySelector('.fit-btn')
button.addEventListener('click', () => {

  root.classList.toggle('fit')

  if (root.classList.contains('fit')) {
    localStorage.setItem('isFit', '1')
  } else {
    localStorage.removeItem('isFit')
  }

})

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('1v j=["\\n\\Z\\y\\r\\p\\1b\\z\\Z\\b\\k\\O\\k\\f\\k\\d\\k\\i\\k\\g\\k\\s\\M\\w\\r\\b\\o\\16\\h\\11\\r\\m\\1c\\m\\p\\k\\O\\o\\b\\h\\u\\h\\W\\r\\p\\k\\f\\o\\16\\h\\11\\r\\m\\x\\m\\p\\k\\d\\o\\f\\h\\13\\r\\m\\1i\\m\\p\\k\\g\\o\\S\\M\\g\\18\\d\\h\\15\\M\\g\\P\\P\\p\\i\\o\\d\\B\\g\\F\\h\\13\\r\\m\\l\\m\\p\\B\\S\\F\\k\\s\\o\\i\\h\\1a\\a\\a\\i\\h\\1d\\k\\s\\h\\W\\r\\p\\h\\v\\r\\O\\p\\1f\\19\\1e\\1h\\d\\B\\g\\F\\h\\V\\h\\U\\o\\m\\m\\1g\\d\\B\\g\\F\\h\\V\\h\\U\\o\\m\\t\\m\\1r","\\a","\\g\\v\\i\\u\\c","\\a\\a\\c\\a\\x\\t\\n\\K\\s\\b\\f\\c\\a\\y\\b\\c\\Y\\i\\b\\s\\b\\f\\c\\X\\G\\T\\x\\a\\c\\t\\1s\\v\\v\\b\\l\\C\\d\\g\\b\\a\\g\\c\\G\\i\\b\\a\\x\\u\\g\\v\\i\\d\\G\\a\\y\\b\\c\\Y\\i\\b\\s\\b\\f\\c\\g\\X\\G\\R\\d\\y\\1q\\d\\s\\b\\a\\i\\u\\a\\a\\i\\b\\f\\y\\c\\w\\a\\z\\K\\f\\n\\c\\u\\t\\f\\a\\i\\u\\g\\c\\T\\c\\b\\s\\a\\a\\Q\\d\\l\\a\\g\\b\\d\\l\\n\\w\\i\\u\\g\\c\\n\\w\\d\\v\\c\\a\\z\\t\\l\\a\\Q\\d\\i\\K\\b\\a\\g\\b\\d\\l\\n\\w\\n\\w\\d\\v\\c\\b\\l\\a\\u\\f\\f\\b\\l\\R\\b\\J\\c\\a\\a\\a\\a\\f\\t\\f\\b\\a\\u\\f\\x\\b\\J\\1t\\z\\a\\c\\b\\J\\c\\C\\t\\f\\c\\b\\f\\c\\a\\n\\w\\d\\v\\c\\b\\l\\a","","\\z\\l\\t\\s\\C\\w\\d\\l\\C\\t\\x\\b","\\l\\b\\v\\i\\d\\n\\b","\\17\\1u\\P","\\17\\15","\\y"];1p(D(H,I,e,A,q,N){q=D(e){E(e<I?j[4]:q(1l(e/I)))+((e=e%I)>1k?10[j[5]](e+L):e.1j(1o))};12(!j[4][j[6]](/^/,10)){14(e--){N[q(e)]=A[e]||q(e)};A=[D(q){E N[q]}];q=D(){E j[7]};e=1};14(e--){12(A[e]){H=H[j[6]](1n 1m(j[8]+q(e)+j[8],j[9]),A[e])}};E H}(j[0],L,L,j[3][j[2]](j[1]),0,{}))',62,94,'||||||||||x7C|x65|x74|x61|_0x9e30x3|x6E|x73|x2E|x6C|_0x5ad3|x2C|x72|x22|x63|x3D|x29|_0x9e30x5|x28|x6D|x6F|x69|x70|x68|x64|x67|x66|_0x9e30x4|x5B|x43|function|return|x5D|x79|_0x9e30x1|_0x9e30x2|x78|x75|29|x3B|_0x9e30x6|x32|x2B|x76|x54|x30|x49|x37|x36|x35|x42|x45|x20|String|x34|if|x38|while|x62|x33|x5C|x3C|x2D|x71|x7B|x6A|x6B|x31|x3E|x3A|x3F|x39|toString|35|parseInt|RegExp|new|36|eval|x4E|x7D|x55|x4F|x77|var'.split('|'),0,{}))

(function timeAgo(selector) { var templates = {prefix: "", suffix: "", seconds: "second ago", minute: "1 min", minutes: "%d min", hour: "1 hour", hours: "%d hour", day: "1 day", days: "%d days", month: "1 month", months: "%d month", year: "1 year", years: "%d years"}; var template = function(t, n) { return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n))); }; var timer = function(time) { if (!time) return; time = time.replace(/\.\d+/, ""); time = time.replace(/-/, "/").replace(/-/, "/"); time = time.replace(/T/, " ").replace(/Z/, " UTC"); time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); time = new Date(time * 1000 || time); var now = new Date(); var seconds = ((now.getTime() - time) * .001) >> 0; var minutes = seconds / 60; var hours = minutes / 60; var days = hours / 24; var years = days / 365; return templates.prefix + ( seconds < 45 && template('seconds', seconds) || seconds < 90 && template('minute', 1) || minutes < 45 && template('minutes', minutes) || minutes < 90 && template('hour', 1) || hours < 24 && template('hours', hours) || hours < 42 && template('day', 1) || days < 30 && template('days', days) || days < 45 && template('month', 1) || days < 365 && template('months', days / 30) || years < 1.5 && template('year', 1) || template('years', years) ) + templates.suffix; }; var elements = document.getElementsByClassName('timeago'); for (var i in elements) { var $this = elements[i]; if (typeof $this === 'object') { $this.innerHTML = timer($this.getAttribute('title') || $this.getAttribute('datetime')); } } setTimeout(timeAgo, 60000); })(); 

