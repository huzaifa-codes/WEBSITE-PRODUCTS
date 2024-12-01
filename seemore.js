var deta1 = localStorage.getItem("card")
var deta2 =  JSON.parse(deta1)
var div = document.querySelector("#con")

fetch(`https://fakestoreapi.com/products/${deta2}`)
.then((res)=>{
    return res.json()
    .then((res)=>{
        div.innerHTML += `
          <div class="card" style="width: 18rem; ; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); transition: transform 0.3s; ">
            <img src="${res.image}" class="card-img-top" alt="..." style="width: 300px; height: 100px; display: block; margin: 0 auto; object-fit: contain;">
            <div class="card-body" style="text-align: center; background: linear-gradient(135deg, #ffffff, #f8f9fa);">
             <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: #333;">${res.id}</h5>
              <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: #333;">${res.category}</h5>
              <p class="card-text" style="color: #555;">${res.title}</p>
                
             
             </div>
          </div>
        `;
      });
        
        
        
        
    })
