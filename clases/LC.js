 //all add and access to local storage is here
class LC {
    
     //(1)get data inside Lc (if empty we should valid the form of that)
    getLC(){
        let data,
            lcdata = localStorage.getItem('mainData');
        if(lcdata === null){
            data = [];
        }
        else{
            data = JSON.parse(lcdata);
        }
         //empty or full at end we should return an array(fill array or empty one)
        return data;
    }
     //(2)add the data that user intered To Local storage for next load(for saving)
    addToLc(name,url,Lcd){
         //ready up new data for add to lc
        let newinfo = [name,url];
         //add new data to array that gonna save in lc
        Lcd.push(newinfo);
         //add The array to Lc
        localStorage.setItem('mainData', JSON.stringify(Lcd));  
    }
     //(3)access to Local Storage info after every reload for show saved book again
    showfromlc(lcI){
        lcI.forEach(function (elem) {
            ui.addBookmark(elem[0], elem[1]);
        });
    }
     //(4)remove delete books(delete from main page) From Local Storage
    removefromlc(eleme, lci){
         //access to value of choosen bookmark for finding that in Local storage
        let aTag = eleme.parentElement.childNodes[3].textContent;
         //search in Lc for finding choosen bookmark
        lci.forEach(function (elem, index) {
            if(elem[0] === aTag){
                 //after finding that we should deleted
                lci.splice([index], 1);
            }
        });
         //save the before changed in Local Storage
        localStorage.setItem('mainData', JSON.stringify(lci));
    }
}