let txtareanote=document.querySelector('#txtareanote');
let btnadd = document.querySelector('#btnadd');
let swrapper=document.querySelector('.swrapper');
let not1=document.getElementById('not1');


btnadd.addEventListener('click',()=>{
     let txtin=txtareanote.value;

     if(txtin===' '){
        alert('Text area cannot be empty');
        return;
     }
    
    let note=document.createElement('div');
    swrapper.classList.add('.not1');
    swrapper.appendChild(note);
    note.innerHTML=`
    <h4>${txtin}</h4>
    <p>This is my first note taking App</p>
    <button type="button" id="viewdetailsbtn">View Details</button>
    
    `


    


})