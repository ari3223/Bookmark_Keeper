 //all validations and changes in ui(html) is here
class UI_Valid {
     //(1)this come user to the main page 
    go1(){
         //raedy up form for next info
        document.querySelector('.form').reset();
         //change to div(main and form div) display for going to main page
        document.querySelector('.visi').classList.remove('after');
        PlusPlace.style.display = 'block';
    }
     //(2)make new bookmark and added to main page using user untered info
    addBookmark(name ,url){
        //make place of bookmark and give some style
       let div = document.createElement('div');
       div.classList.add('x');
       div.classList.add('txCon');
        //add user info to the div that we make
         //( div=Favicon of the site)( a= user intered info)( p = X for deleting bookMark)
       div.innerHTML = `
                <div class="favicon" style="background-image: url(https://www.google.com/s2/favicons?domain=www.${url})"></div>
                <a class="a" target="_blank" href="https://www.${url}">${name}</a>
                <p class="ex">X</p>`
       //add the div that we make to page(to his place)
       divPlace.appendChild(div);
   }
     //(3)see if fields are full in right ones
    validfields(f1,f2){
         //if they are full its time for next validation
        if(f1 !== '' && f2 !== ''){
             //if url is valid its time for name length
            if(f2.search('.com') !== -1){
                if(f1.length < 16){
                    //everything is good so book should be added
                   return 'done';
                   }
                 //if intered info unvalid we should tell user what is wronge
                else{
                    alert('name must be shorter');
                }
            }
            else{
                alert('(.com) in url is missing');
            }
        }
        else{
            alert('please fill the fields');
        }
    }
}
