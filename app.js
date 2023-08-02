let txtareanote=document.querySelector('#txtareanote');
let btnadd = document.querySelector('#btnadd');
let notes=document.querySelector('.notes');
let viewdetailsbtn=document.getElementById('viewdetailsbtn');



btnadd.addEventListener('click',(e)=>{
e.preventDefault();
addnote();
})


function addnote(){
   
   let txtin=txtareanote.value;

   if(txtin===' '){
      alert('Text area cannot be empty');
      return;
   }
  
  let card=document.createElement('div');
  //note.setAttribute('class','card');
 
  card.classList.add('card');
  notes.appendChild(card);
 card.innerHTML=`
  <h4>NOTE</h4>
  <p>${txtin}</p>
  <button type="button" id="viewdetailsbtn">View Details</button>
  
  `
  txtareanote.value= '';
}

let clear=card.querySelector('.del');

clear.addEventListener('click',function(){

   card.remove();
})
