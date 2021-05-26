//clases s
let ui = new UI_Valid();
let lc = new LC();

//variabless
 //access to the Plus btn , div that contain bookmarks , div around the Form
let PlusPlace = document.querySelector('.plusC');
let divPlace = document.querySelector('.textContainar');
let outform = document.querySelector('.visi');

//evenlisener
evenLisener()
function evenLisener() {
     // add book to page and added to lc for save after reload 
    document.querySelector('.saveBtn').addEventListener('click', aftersub);
     //after clicking Plus we should send User to Form page so user can inter book data
    document.querySelector('.plus').addEventListener('click', addNew);
     //after user click on X we should delete the choosen book from page and LC
    divPlace.addEventListener('click', deleteBook);
    
     //if user click on form X(thats for exit) we should go to the main page
    document.querySelector('.exit').addEventListener('click', function(e){ ui.go1(); });
     //after every reload we should Load Data of bookmarks from Local Storage
    document.addEventListener('DOMContentLoaded',function(e){ lc.showfromlc(lc.getLC()); });
     //if user click on outside of the form, thats mean user want go to the main page
    outform.addEventListener('click', function outForm(e) {
         //click out side so we are getting user main page
        if(e.target.className === 'containar visi after'){ui.go1();}});
}

//functions

 //add user intered info(bookmark data) to main page and saving it in lv
function aftersub (e) {
    e.preventDefault();
     //access to user intered info
    let name = document.querySelectorAll('.form input')[0].value,
        url  = document.querySelectorAll('.form input')[1].value;
     //valid the two inputs
    let valid = ui.validfields(name,url);
     //see if they are vlid or not
    if(valid === 'done'){
         //add new book to page, to local storage , then send user to main page
        ui.addBookmark(name, url);
        lc.addToLc(name, url, lc.getLC());
        ui.go1();
    }
}
 //after clicking Plus we should send User to Form page so user can inter book data
function addNew(e) {
     //we should off main page display and on form page display 
    PlusPlace.style.display = 'none';
    outform.classList.add('after');
}
 //after user click on X we should delete the choosen book from page and LC
function deleteBook(e) {
     //make sure that user click on X
    if(e.target.className === 'ex'){
         //remove from page
        e.target.parentElement.remove();
         //remove from Local Storage
        lc.removefromlc(e.target, lc.getLC());
    }
}