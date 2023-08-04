let txtareanote=document.getElementById('#txtareanote');
let btnadd = document.getElementById('#btnadd');
let notes=document.getElementById('.notes');
let modal=document.getElementById('pmodal');
console.log(modal)




btnadd.addEventListener('click',()=>{
   let txtin=txtareanote.value;

   if(txtin==' ')
   {
      alert("some fileds are empty");
      return;
    }
   

  
  let cards=document.createElement('div');
  //note.setAttribute('class','card');
 
  cards.classList.add('card');
  notes.appendChild(cards);
 cards.innerHTML=`
  <h4>NOTE</h4>
  <p>${txtin}</p>
  <button type="button" id="viewdetailsbtn">Delete</button>
  <button type="button" id="deletebtn">View Details</button>
  
  `
  txtareanote.value= '';


   let clear=cards.getElementById('viewdetailsbtn')

     clear.addEventListener('click',()=>{
      cards.remove();
     })

     const deletn= cards.getElementById('deletebtn');
     const dele=cards.
     deletn.addEventListener('click',()=>{
      modal.innerHTML=`
      <div id="modal-container ">
      <div id="modal">
           <button id="modalbtn">&times;</button>
          <p id="pmodal">${txtin}
          </p>
      </div>
      </div>`


       
     })
})




