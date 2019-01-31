//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var classDiv = document.getElementsByClassName('navi');
//console.log(classDiv);
for (var i=0; i<classDiv.length; i++) {
    //console.log(classDiv[i]);
    classDiv[i].addEventListener('click', showNav);
}

function showNav () {
    //console.log('hi');
    var childElem = this.querySelectorAll('.inner')[0];

    if (childElem.style.display === 'block') {
        childElem.style.display = 'none';
    }else {
        childElem.style.display = 'block';
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var menu = document.getElementsByClassName('name');

for (var i=0; i<menu.length; i++) {
    menu[i].addEventListener('click', showMenu);
}
function showMenu () {
    //console.log('hi');
    var secretMenu = this.querySelectorAll('.menu')[0];
    if (secretMenu.style.display === 'block') {
        secretMenu.style.display = 'none';
    }else {
        secretMenu.style.display ='block';
    }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/



var thumbDown = document.getElementsByClassName('thumb');
 for (var i=0; i<thumbDown.length; i++) {
    
     thumbDown[i].addEventListener('click', dislike);
     console.log('hi')
    var counter = document.createElement('div');
    counter.className = 'dislike';
    thumbDown[i].appendChild(counter);
    
     
 }

 function dislike () {
     var disLikeCount = this.querySelectorAll('.dislike')[0];
     disLikeCount.innerHTML ++;
 }