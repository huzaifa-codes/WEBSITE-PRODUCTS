

var div = document.querySelector("#container-2")


var data1 = localStorage.getItem("cards")
var date1 = JSON.parse(data1)

 
date1.map((item, index) => {
    div.innerHTML += `
      <div class="card" style="width: 18rem; ; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); transition: transform 0.3s; ">
        <img src="${item.image}" class="card-img-top" alt="..." style="width: 300px; height: 100px; display: block; margin: 0 auto; object-fit: contain;">
        <div class="card-body" style="text-align: center; background: linear-gradient(135deg, #ffffff, #f8f9fa);">
          <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: #333;">${item.category}</h5>
          <p class="card-text" style="color: #555;">${item.title}</p>

          <p class="card-text${index}" style="color: #555;">${item.price}</p>

          <button type="button" class="btn btn-outline-warning" onclick = "dicrease(${index})">-</button>
  <h1 id="inc${index}">1</h1>
    <button type="button" class="btn btn-outline-warning" onclick = "increase(${index})">+</button>
         
          <button type="button" class="btn btn-outline-warning" onclick = "delete4(${index})">Delete</button>
           <button type="button" class="btn btn-outline-danger" onclick = "buynow(${index})">Buy Now</button>
        </div>
      </div>
    `;
  });

function increase(index){
    var plus = document.querySelector(`#inc${index}`)
    var price = document.querySelector(`.card-text${index}`)
    plus.innerHTML++
    price.innerHTML = date1[index].price * plus.innerHTML


}

function dicrease(index){
    var minus = document.querySelector(`#inc${index}`)
    var price = document.querySelector(`.card-text${index}`)
 if(minus.innerHTML > 1){
    minus.innerHTML--
    price.innerHTML = date1[index].price * minus.innerHTML
 }

}



 
  function delete4(index){
    date1.splice(index,1)
        div.innerHTML = ""
        date1.map((item, index) => {
            div.innerHTML += `
              <div class="card" style="width: 18rem; ; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); transition: transform 0.3s; ">
                <img src="${item.image}" class="card-img-top" alt="..." style="width: 300px; height: 100px; display: block; margin: 0 auto; object-fit: contain;">
                <div class="card-body" style="text-align: center; background: linear-gradient(135deg, #ffffff, #f8f9fa);">
                  <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: #333;">${item.category}</h5>
                  <p class="card-text" style="color: #555;">${item.title}</p>
  


                 
                  <button type="button" class="btn btn-outline-warning" onclick = "delete4(${index})">Delete</button>
                   <button type="button" class="btn btn-outline-danger" onclick = "buynow(${index})">Buy Now</button>
                </div>
              </div>
            `;
          });
        

    }
  

    function buynow(index){
        alert( "bhai khareed liya apne mubarak ho")
        var han1 = date1[index]
        console.log(han1);
        
       
        
        
    }