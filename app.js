const div = document.querySelector(".container-1");
var deta
fetch('https://fakestoreapi.com/products')
  .then((res) => {
    return res.json().then((res) => {
        deta = res
      
      deta.map((item, index) => {
        div.innerHTML += `
          <div class="card" style="width: 18rem; ; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); transition: transform 0.3s; ">
            <img src="${item.image}" class="card-img-top" alt="..." style="width: 300px; height: 100px; display: block; margin: 0 auto; object-fit: contain;">
            <div class="card-body" style="text-align: center; background: linear-gradient(135deg, #ffffff, #f8f9fa);">
              <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: #333;">${item.category}</h5>
              <p class="card-text" style="color: #555;">${item.title}</p>
             
              <button type="button" class="btn btn-outline-warning" onclick = "seemore(${item.id})">See More</button>
               <button type="button" class="btn btn-outline-danger" onclick = "addtocard(${index})">Add To Card</button>
            </div>
          </div>
        `;
      });
    });
  });


function seemore(id){
    var num = JSON.stringify(id)
    localStorage.setItem("card" , num)
    alert("ruko bhai pehle ok karo")
    window.location = "seemore.html"
    
}





var h1 = document.querySelector("#h-1")

var array = []



  function addtocard(index){
    var h1 = document.querySelector("#h-1")
h1.innerHTML++
addtocard[index] = h1.innerHTML

   var check = array.indexOf(deta[index])
   if(check === -1){
    deta[index].quantity = 1
    array.push(deta[index])
   }
   
   else{
    deta[index].quantity += 1
   }
   console.log(array);


   alert("check your order")
   
    
  }


  function checkyourorder(){
    var cards = JSON.stringify(array)
    localStorage.setItem("cards" , cards)
    window.location = "check.html"
  }



    




